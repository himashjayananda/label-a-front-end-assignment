import { createSlice } from '@reduxjs/toolkit';
import { AlbumType } from '../../utils/types';
import { getAlbums } from './albums.api';

export interface AlbumsStateType {
  albums: AlbumType[];
  loading: boolean;
  error: string;
}

const initialState: AlbumsStateType = {
  albums: [],
  loading: true,
  error: '',
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    sortAlbumsByNameAscending: state => {
      const sortedAlbums = state.albums.sort((a: any, b: any) =>
        a.name.localeCompare(b.name),
      );
      state.albums = sortedAlbums;
    },
    sortAlbumsByNameDescending: state => {
      const sortedAlbums = state.albums.sort((a: any, b: any) =>
        b.name.localeCompare(a.name),
      );
      state.albums = sortedAlbums;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAlbums.fulfilled, (state, action) => {
      const { album } = action.payload.topalbums;
      state.albums = album
        .filter((item: AlbumType) => item.mbid)
        .sort((a: any, b: any) => a.name.localeCompare(b.name));
      state.loading = false;
    });
    builder.addCase(getAlbums.rejected, (state, action) => {
      state.error = "Oops! We couldn't retrieve data. Please try again later.";
    });
  },
});

export const { sortAlbumsByNameAscending, sortAlbumsByNameDescending } =
  albumsSlice.actions;

export default albumsSlice.reducer;
