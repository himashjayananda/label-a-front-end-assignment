import { FC } from 'react';
import { SearchSongForm, SongResults } from '../../components/searchSong';
import { SearchSongWrapper } from './SearchSong.styled';

interface SearchSongProps {}

const SearchSong: FC<SearchSongProps> = () => {
  return (
    <SearchSongWrapper>
      <h2>Search for a song</h2>
      <SearchSongForm />
      <SongResults />
    </SearchSongWrapper>
  );
};

export default SearchSong;
