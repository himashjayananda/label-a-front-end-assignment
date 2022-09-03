import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

export const getAlbumDetails = createAsyncThunk(
  'albums/getAlbumDetails',
  async (albumId: string) => {
    const response = await axios(
      `${api}?method=album.getinfo&api_key=${apiKey}&artist=coldplay&mbid=${albumId}&format=json`,
    );
    return response.data;
  },
);
