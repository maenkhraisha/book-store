import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/";
  const request = new Request(getURL);

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async () => await fetch(getURL).then((res) => res.json())
);

export const sendBook = createAsyncThunk("book/addBook", async (payload) => {
  console.log("POST");
  const response = await fetch(request, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
    return payload;
});

const getBookSlice = createSlice({
  name: "book",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
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
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
    },
    [sendBook.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.entities.push(payload);
    },
    [sendBook.pending]: (state, action) => {
      state.loading = true;
    },
    [sendBook.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const bookReducer = getBookSlice.reducer;
