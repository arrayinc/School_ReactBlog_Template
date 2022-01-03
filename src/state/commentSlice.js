import { createSlice } from '@reduxjs/toolkit';
let comments = []
if (localStorage.getItem("storedComments")) {
    comments = JSON.parse(localStorage.getItem("storedComments"))
}

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
        comments: comments
    },
    reducers: {
        addComments: (state, action) => {
        state.comments = action.payload
         localStorage.setItem('storedComments', JSON.stringify(state.comments) );
        }
    }

})

export const { addComments } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;

