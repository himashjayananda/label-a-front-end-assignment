import { createSlice } from '@reduxjs/toolkit';
import { AlbumType } from '../../utils/types';
import { getAlbumsOfArtist } from './albums.api';

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
    // sort by name ascending action
    sortAlbumsByNameAscending: state => {
      const sortedAlbums = state.albums.sort((a: any, b: any) =>
        a.name.localeCompare(b.name),
      );
      state.albums = sortedAlbums;
    },
    // sort by name descending action
    sortAlbumsByNameDescending: state => {
      const sortedAlbums = state.albums.sort((a: any, b: any) =>
        b.name.localeCompare(a.name),
      );
      state.albums = sortedAlbums;
    },
    resetAlbums: state => {
      state.albums = [];
      state.loading = true;
      state.error = '';
    },
  },
  extraReducers: builder => {
    // get albums of artist - fulfilled case
    builder.addCase(getAlbumsOfArtist.fulfilled, (state, action) => {
      const { album } = action.payload.topalbums;
      state.albums = album
        .filter((item: AlbumType) => item.mbid)
        .sort((a: any, b: any) => a.name.localeCompare(b.name));
      state.loading = false;
    });
    // get albums of artist - fulfilled case
    builder.addCase(getAlbumsOfArtist.rejected, (state, action) => {
      state.error = "Oops! We couldn't retrieve data. Please try again later.";
    });
  },
});

export const {
  sortAlbumsByNameAscending,
  sortAlbumsByNameDescending,
  resetAlbums,
} = albumsSlice.actions;

export default albumsSlice.reducer;
