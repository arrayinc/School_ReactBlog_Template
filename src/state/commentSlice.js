import { createSlice } from '@reduxjs/toolkit';
let comments = []
let storedComments = JSON.parse(localStorage.getItem("storedComments"));
if (storedComments) comments = storedComments 

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
        comments: comments
    },
    reducers: {
        addComments: (state, action) => {
            console.log(action.payload)
        state.comments = action.payload
        localStorage.setItem('storedComments', JSON.stringify(state.comments) ); 
        },
        deleteComments: (state, action) => {
            state.comments.splice(action.payload, 1);
            localStorage.setItem("storedComments", JSON.stringify(state.comments))
        }
    }

})

export const { addComments, deleteComments } = commentSlice.actions;
export const selectComments  = (state) => state.comments.comments;
export default commentSlice.reducer;

