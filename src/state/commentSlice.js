import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
        state.comments = action.payload
        }
    }

})

export const { addComments } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;

