import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, API_KEY } from '../../utils/constants';

// async thunk to retrive albums data of a artist
export const getAlbumDetails = createAsyncThunk(
  'album/getAlbumDetails',
  async (albumId: string) => {
    const response = await axios(
      `${API}?method=album.getinfo&api_key=${API_KEY}&artist=coldplay&mbid=${albumId}&format=json`,
    );
    return response.data;
  },
);
