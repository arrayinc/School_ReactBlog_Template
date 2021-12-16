import { createSlice } from '@reduxjs/toolkit';


const commentsUpload = (comments) => {
    fetch('/postcomments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comments) //send updated calendar info 
    })
  }

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
            console.log(action.payload)
        state.comments = action.payload
        //localStorage.setItem('storedComments', JSON.stringify(state.comments) );
        commentsUpload(state.comments) 
        },
        deleteComments: (state, action) => {
            state.comments.splice(action.payload, 1);
            //localStorage.setItem("storedComments", JSON.stringify(state.comments))
            commentsUpload(state.comments)
        }
    }

})

export const { addComments, deleteComments } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;

