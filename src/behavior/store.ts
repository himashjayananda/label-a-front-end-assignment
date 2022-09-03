import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './albums/albumsSlice';
import albumReducer from './album/albumSlice';

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    album: albumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
