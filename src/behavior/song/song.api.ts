import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, API_KEY } from '../../utils/constants';

// async thunk to retrive song search results
export const getSongSearchResults = createAsyncThunk(
  'song/getSongSearchResults',
  async (song: string) => {
    const response = await axios(
      `${API}?method=track.search&track=${song}&api_key=${API_KEY}&format=json`,
    );
    return { data: response.data, searchValue: song };
  },
);
