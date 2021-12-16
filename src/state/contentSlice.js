import { createSlice } from '@reduxjs/toolkit';
import siteData from '../SiteData'
 
 
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
  const content = () => {fetch('/getcontent')
 .then(response => response.json())
 .then(data => {
   console.log(data)
 })
}
 
 content()

export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: siteData
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

