import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const getURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/';

export const sendBook = createAsyncThunk("", async (data) => {
    console.log("am add the book to the server",data);
    const request = new Request(getURL);
    fetch(request, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    
  })
  
  const getBookSlice = createSlice({
    name: 'bookSlice',
    initialState: {
      entities: [],
      loading: false,
    },
    reducers: {},
    extraReducers: {
      [send.fulfilled]: (state, action) => {
        console.log("am send data");
        state.loading = false;
        state.entities.push(action.payload);
      },
      [getBooks.pending]: (state, action) => {
        state.loading = true;
      },
      [getBooks.rejected]: (state, action) => {
        state.loading = false;
      },
    },
   
  
  });
  
  export const getBookReducer = getBookSlice.reducer;
  