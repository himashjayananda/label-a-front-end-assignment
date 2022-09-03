import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumCard, AlbumSortbySelect } from '../../components/home';
import { CardWrapper, HomeWrapper } from './Home.styled';
import { getAlbums } from '../../behavior/albums/albums.api';
import { AppDispatch, RootState } from '../../behavior/store';
import {
  sortAlbumsByNameAscending,
  sortAlbumsByNameDescending,
} from '../../behavior/albums/albumsSlice';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { albums, loading, error } = useSelector(
    (state: RootState) => state.albums,
  );
  const [sortByOption, setSortByOption] = useState('asc');

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  useEffect(() => {
    if (sortByOption === 'asc') dispatch(sortAlbumsByNameAscending());
    if (sortByOption === 'desc') dispatch(sortAlbumsByNameDescending());
  }, [sortByOption]);

  if (loading && error) return <h5>{error}</h5>;

  return (
    <HomeWrapper>
      <AlbumSortbySelect
        sortByOption={sortByOption}
        setSortByOption={setSortByOption}
      />
      <CardWrapper>
        {!loading ? (
          albums.map((album, index) => (
            <AlbumCard album={album} key={`${album.mbid}${index}`} />
          ))
        ) : (
          <h2>Loading albums...</h2>
        )}
      </CardWrapper>
    </HomeWrapper>
  );
};

export default Home;
