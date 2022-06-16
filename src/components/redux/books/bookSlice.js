import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { key: 0, title: "slice", author: "maen" },
  reducers: {
    ADD_BOOK: (state, action) => {
      const {title,author} = action.payload;
      const key = state.length + 1;
      state.push({key,title,author})
    },
  },
});

