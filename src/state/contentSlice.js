import { createSlice } from '@reduxjs/toolkit';
import siteData from '../SiteData';


// export const contentSlice = createSlice ({
//     name: 'content',
//     initialState: {
//         content: siteData
//     },
//     reducers: {
//         addContent: (state, action) => {
//         console.log(action.payload)
//         }
//     }

// })

// export const { addContent } = contentSlice.actions;
// export const selectContent = (state) => state.content.content;
// export default contentSlice.reducer;

let content = []
let storedContent = JSON.parse(localStorage.getItem("storedContent"));

storedContent ? content = storedContent :  content = siteData
export const contentSlice = createSlice({
    name: 'content',
    initialState: {
       content: content
    },
    reducers: {
        addContent: (state, action) => {
            state.content.push(action.payload);
            console.log(JSON.stringify(state.content))
            localStorage.setItem("storedContent", JSON.stringify(state.content));
        },
        deleteContent: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem("storedContent", JSON.stringify(state.content))
        },
    },
});

export const { addContent, deleteContent } = contentSlice.actions;

export const selectContent = (state) => state.content.content;

export default contentSlice.reducer;