import { AlbumInfoType } from './../../utils/types';
import { createSlice } from '@reduxjs/toolkit';
import { getAlbumDetails } from './album.api';

export interface AlbumStateType {
  album: AlbumInfoType;
  loading: boolean;
  error: string;
}

const initialState: AlbumStateType = {
  album: {
    name: '',
    tracks: { track: [] },
    wiki: {
      published: '',
      summary: '',
    },
  },
  loading: true,
  error: '',
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    resetAlbum: state => {
      state.album = {
        name: '',
        tracks: { track: [] },
        wiki: {
          published: '',
          summary: '',
        },
      };
      state.loading = true;
      state.error = '';
    },
  },
  extraReducers: builder => {
    // get album details - fulfilled case
    builder.addCase(getAlbumDetails.fulfilled, (state, action) => {
      const { album } = action.payload;
      state.album = album;
      state.loading = false;
    });
    // get album details - rejected case
    builder.addCase(getAlbumDetails.rejected, (state, action) => {
      state.error = "Oops! We couldn't retrieve data. Please try again later.";
    });
  },
});

export const { resetAlbum } = albumSlice.actions;

export default albumSlice.reducer;
