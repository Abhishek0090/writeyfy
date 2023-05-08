import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../app/api/apiSlice';  
import writersSlice from '../redux/writersSlice/writersSlice';
import registerSlice from '../redux/registerSlice/RegisterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [apiSlice.reducerPath],
};

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer, 
  writers: writersSlice,
  register : registerSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
