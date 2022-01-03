import { createSlice } from '@reduxjs/toolkit';
import localData from '../SiteData';

  
 
 

 
export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: localData
    },
    reducers: {
        addContent: (state, action) => {
        state.content = action.payload
        },
        deleteContent: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem("storedContent", JSON.stringify(state.content))
          
        }
    }

})

export const { addContent, deleteContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer;

