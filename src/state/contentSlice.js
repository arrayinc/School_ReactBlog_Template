import { createSlice } from '@reduxjs/toolkit';
import siteData from '../SiteData';


export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: siteData
    },
    reducers: {
        addContent: (state, action) => {
        console.log(action.payload)
        }
    }

})

export const { addContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer;