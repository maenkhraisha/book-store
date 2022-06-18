import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/';
const request = new Request(getURL);

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async () => fetch(getURL).then((res) => res.json()),
);

export const sendBook = createAsyncThunk('book/addBook', async (payload) => {
  payload = {...payload,
    item_id:payload.itemId,
  }
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return payload;
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
  reducers: {},
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
      state.entities.filter((s) => s.item_Id !== payload);
    },
  },
});

export const bookReducer = getBookSlice.reducer;
