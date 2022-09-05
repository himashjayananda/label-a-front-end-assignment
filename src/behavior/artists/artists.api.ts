import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, API_KEY } from '../../utils/constants';

// async thunk to retrive artists data
export const getTopArtists = createAsyncThunk(
  'artists/getTopArtists',
  async () => {
    const response = await axios(
      `${API}?method=chart.gettopartists&api_key=${API_KEY}&format=json`,
    );
    return response.data;
  },
);
