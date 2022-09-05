import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistsWrapper } from './Artists.styled';
import { getTopArtists } from '../../behavior/artists/artists.api';
import { AppDispatch, RootState } from '../../behavior/store';
import ArtistCard from '../../components/artists/ArtistCard';

interface ArtistsProps {}

const Artists: FC<ArtistsProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { artists, loading, error } = useSelector(
    (state: RootState) => state.artists,
  );

  useEffect(() => {
    // requests for artists
    dispatch(getTopArtists());
  }, [dispatch]);

  // show error if server error occur
  if (loading && error) return <h5>{error}</h5>;

  // render Artists in Cards if data is loaded else show loading message
  return (
    <ArtistsWrapper>
      {!loading ? (
        artists.map((artist, index) => (
          <ArtistCard artist={artist} key={`${artist.mbid}${index}`} />
        ))
      ) : (
        <h2>Loading artists...</h2>
      )}
    </ArtistsWrapper>
  );
};

export default Artists;
