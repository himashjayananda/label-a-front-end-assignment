import { createSlice } from '@reduxjs/toolkit';
import { SongType } from '../../utils/types';
import { getSongSearchResults } from './song.api';

export interface SongStateType {
  searchValue: string;
  songResults: SongType[];
  loading: boolean;
  error: string;
}

const initialState: SongStateType = {
  searchValue: '',
  songResults: [],
  loading: true,
  error: '',
};

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    resetSong: state => {
      state.searchValue = '';
      state.songResults = [];
      state.loading = true;
      state.error = '';
    },
  },
  extraReducers: builder => {
    // get song search results - fulfilled case
    builder.addCase(getSongSearchResults.fulfilled, (state, action) => {
      const { data, searchValue } = action.payload;
      state.searchValue = searchValue;
      state.songResults = data.results.trackmatches.track;
      state.loading = false;
    });
    // get song search results - rejected case
    builder.addCase(getSongSearchResults.rejected, state => {
      state.error = "Oops! We couldn't retrieve data. Please try again later.";
    });
  },
});

export const { resetSong } = songSlice.actions;

export default songSlice.reducer;
