import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import PostsSlice from './PostSlice';

let reducers = combineReducers({
    postslice: PostsSlice
})
const store = configureStore({
    reducer: {
        postReducers: reducers,
    },
    middleware: [thunk]
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;