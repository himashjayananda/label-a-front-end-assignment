import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongSearchResults } from '../../../behavior/song/song.api';
import { AppDispatch } from '../../../behavior/store';
import {
  ErrorMessage,
  Searchbox,
  SearchButton,
  SearchSongFormWrapper,
} from './SearchSongForm.styled';

interface SearchSongFormProps {}

const SearchSongForm: FC<SearchSongFormProps> = () => {
  const [song, setSong] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  // handle search value submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // set error if the search value is empty
    if (!song) setError('Please enter a value');
    else if (error) setError('');

    dispatch(getSongSearchResults(song));
  };

  return (
    <SearchSongFormWrapper onSubmit={handleSubmit}>
      <Searchbox
        name='song'
        value={song}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSong(e.target.value)}
      />
      <SearchButton>Search</SearchButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SearchSongFormWrapper>
  );
};

export default SearchSongForm;
