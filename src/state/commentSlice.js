import { createSlice } from '@reduxjs/toolkit';

// remove conditional looking for local storage 

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
        state.comments = action.payload
        //remove localStorage.setitem
        }
    }

})

export const { addComments } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;

//then go to comments if you have not