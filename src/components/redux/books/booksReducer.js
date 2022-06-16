import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: [
    {
      key: "1",
      categorie: "Islamic",
      title: "Islamic Gold Era 444",
      author: "Maen khraisha",
    },
  ],
  reducers: {
    addBook : (state, payload) => {
      state.push( {
        key: payload.payload.key,
        categorie: "Islamic",
        title: payload.payload.title,
        author: payload.payload.author,
      })    
    },
    removeBook : (state,key) => {
      console.log(key.payload);
      return state.filter((s) => s.key !== key.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const  bookReducer  = bookSlice.reducer;
