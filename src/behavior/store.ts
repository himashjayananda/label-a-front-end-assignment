import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from './artists/artistsSlice';
import albumsReducer from './albums/albumsSlice';
import albumReducer from './album/albumSlice';
import songReducer from './song/songSlice';

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albums: albumsReducer,
    album: albumReducer,
    song: songReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
