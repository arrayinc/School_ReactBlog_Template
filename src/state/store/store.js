import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'
import commentReducer from '../commentSlice'



export const store = configureStore({
    reducer:{
        content: contentReducer,
        comments: commentReducer
    }
});