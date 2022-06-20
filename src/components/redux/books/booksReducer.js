import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';


const getURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/';
const request = new Request(getURL);



export const getBooks = createAsyncThunk(
  'book/getBooks',
  async () => fetch(getURL).then((res) => res.json()),
);

export const sendBook = createAsyncThunk('book/addBook', async (payload) => {
  const payload2 = {
    ...payload,
    item_id: payload.itemId,
  };
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify(payload2),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return payload2;
});

export const removeBook = createAsyncThunk('book/deleteBook', async (payload) => {
  await fetch(request.url + payload, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return payload;
});
const getBookSlice = createSlice({
  name: 'book',
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
  
  },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.entities.splice(0, state.entities.length);
      const data = action.payload;
      if (data) {
        Object.entries(data).forEach(([key, value]) => {
          const objbook = {
            item_id: key,
            category: value[0].category,
            title: value[0].title,
            author: value[0].author,
          };
          state.entities.push(objbook);
        });
      }
    },
    [sendBook.fulfilled]: (state, { payload }) => {
      state.entities.push(payload);
    },
    [removeBook.fulfilled]: (state, { payload }) => {
      // console.log("remove book");
      // for(let i=0;i<state.entities.length ;i++){
      //   console.log('this is state',state.entities[i].itemId==payload);
      //   console.log('this is payload',typeof(payload));
      // }

      state.entities = state.entities.filter((s) => s.itemId !== payload);
    },
  },
});

export const bookReducer = getBookSlice.reducer;
