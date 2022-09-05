import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSong } from '../../../behavior/song/songSlice';
import { AppDispatch, RootState } from '../../../behavior/store';
import {
  SongResultsWrapper,
  SongsWrapper,
  Song,
  ArtistName,
} from './SongResults.styled';

interface SongResultsProps {}

const SongResults: FC<SongResultsProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchValue, songResults, loading, error } = useSelector(
    (state: RootState) => state.song,
  );

  useEffect(() => {
    // Clear search results state data when unmounting
    return () => {
      dispatch(resetSong());
    };
  }, [dispatch]);

  // show error if server error occur
  if (loading && error) return <h5>{error}</h5>;

  // render components when data is loaded
  return (
    <SongResultsWrapper>
      {searchValue && <div>{`Search results for : ${searchValue}`}</div>}
      {songResults.length > 0 && (
        <SongsWrapper>
          {songResults.map((song, index) => (
            <Song key={`${song}${index}`}>
              <div>{song.name}</div>
              <ArtistName>{song.artist}</ArtistName>
            </Song>
          ))}
        </SongsWrapper>
      )}
    </SongResultsWrapper>
  );
};

export default SongResults;
