import { createSlice } from '@reduxjs/toolkit';
import localData from '../SiteData';
import serverData from '../content.json';
  
 
  //to upload list:
  const contentUpload = (data) => {
    fetch('/postcontent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //send updated calendar info 
    })
  }

export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: []
    },
    reducers: {
        addContent: (state, action) => {
        state.content = action.payload
        console.log(state.content)
        //localStorage.setItem('storedContent', JSON.stringify(state.content) );
        contentUpload(state.content)
        },
        deleteContent: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem("storedContent", JSON.stringify(state.content))
            contentUpload(state.content)
        }
    }

})

export const { addContent, deleteContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer;

