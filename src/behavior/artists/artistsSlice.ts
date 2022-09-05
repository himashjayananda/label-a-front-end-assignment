import { createSlice } from '@reduxjs/toolkit';
import { ArtistType } from '../../utils/types';
import { getTopArtists } from './artists.api';

export interface ArtistsStateType {
  artists: ArtistType[];
  loading: boolean;
  error: string;
}

const initialState: ArtistsStateType = {
  artists: [],
  loading: true,
  error: '',
};

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // get artists data - fulfilled case
    builder.addCase(getTopArtists.fulfilled, (state, action) => {
      const { artist } = action.payload.artists;
      state.artists = artist.filter((item: ArtistType) => item.mbid);
      state.loading = false;
    });
    // get artists data - rejected case
    builder.addCase(getTopArtists.rejected, state => {
      state.error = "Oops! We couldn't retrieve data. Please try again later.";
    });
  },
});

export default artistsSlice.reducer;
