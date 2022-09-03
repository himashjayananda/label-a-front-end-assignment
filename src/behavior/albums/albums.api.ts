import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

export const getAlbums = createAsyncThunk('albums/getAlbums', async () => {
  const response = await axios(
    `${api}?method=artist.gettopalbums&artist=coldplay&api_key=${apiKey}&format=json`,
  );
  return response.data;
});
