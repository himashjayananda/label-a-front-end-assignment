import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, API_KEY } from '../../utils/constants';

// async thunk to retrive albums data of a artist
export const getAlbumsOfArtist = createAsyncThunk(
  'albums/getAlbumsOfArtist',
  async (artistId: string) => {
    const response = await axios(
      `${API}?method=artist.gettopalbums&mbid=${artistId}&api_key=${API_KEY}&format=json`,
    );

    return response.data;
  },
);
