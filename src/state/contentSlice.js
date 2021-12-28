import { createSlice } from '@reduxjs/toolkit';
import localData from '../SiteData';

  
 
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

  const GetContent = () => {
    fetch('/getcontent')
    .then(response => response.json())
    .then(data => {
      return data
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
        //contentUpload(state.content)
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

