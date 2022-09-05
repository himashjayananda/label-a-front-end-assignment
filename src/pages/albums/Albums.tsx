import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumCard, AlbumSortbySelect } from '../../components/albums';
import { CardWrapper, AlbumsWrapper, ArtistName } from './Albums.styled';
import { getAlbumsOfArtist } from '../../behavior/albums/albums.api';
import { AppDispatch, RootState } from '../../behavior/store';
import {
  resetAlbums,
  sortAlbumsByNameAscending,
  sortAlbumsByNameDescending,
} from '../../behavior/albums/albumsSlice';

interface AlbumsProps {}

const Albums: FC<AlbumsProps> = () => {
  let { artistId } = useParams<{ artistId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { albums, loading, error } = useSelector(
    (state: RootState) => state.albums,
  );
  const [sortByOption, setSortByOption] = useState('asc');

  useEffect(() => {
    // requests for albums
    if (artistId) dispatch(getAlbumsOfArtist(artistId));
  }, [artistId, dispatch]);

  useEffect(() => {
    // clear albums data in state when unmounting
    return () => {
      dispatch(resetAlbums());
    };
  }, [dispatch]);

  useEffect(() => {
    // dispatch actions for sort by options
    if (sortByOption === 'asc') dispatch(sortAlbumsByNameAscending());
    if (sortByOption === 'desc') dispatch(sortAlbumsByNameDescending());
  }, [sortByOption, dispatch]);

  // show error if server error occur
  if (loading && error) return <h5>{error}</h5>;

  // render Albums in Cards if data is loaded, else show loading message
  return (
    <AlbumsWrapper>
      {!loading ? (
        <>
          <ArtistName>{albums[0].artist.name}</ArtistName>
          <AlbumSortbySelect
            sortByOption={sortByOption}
            setSortByOption={setSortByOption}
          />
          <CardWrapper>
            {albums.map((album, index) => (
              <AlbumCard album={album} key={`${album.mbid}${index}`} />
            ))}
          </CardWrapper>
        </>
      ) : (
        <h2>Loading albums...</h2>
      )}
    </AlbumsWrapper>
  );
};

export default Albums;
