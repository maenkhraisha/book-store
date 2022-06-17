import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books";
const addURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/";

export const getBooks = createAsyncThunk("", async () => {
  return fetch(getURL).then((res) => res.json());
});

// export const sendBook = createAsyncThunk("", async (data) => {
//   return fetch(addURL, {
//     method: "POST",
//     body: data,
//   })
//     .then((res) => {
//       return res;
//     })
//     .then((text) => {
//       console.log('this is response',text);
//     }).catch((err =>{
//       console.log(err);
//     }));
// });


const bookSlice = createSlice({
  name: "bookSlice",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    addBook: (state, payload) => {
      state.entities.push(payload);
      console.log(state);
    },
    removeBook: (state, key) => {
      state.filter((s) => s.key !== key.payload);
    },
  },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities.splice(0, state.entities.length);
      const data = action.payload;
      if(data){
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
    }    

  },
  // [sendBook.fulfilled]:(state,payload) => {
  //   state.push({
  //     item_id: state.length + 1,
  //     category: "Islamic",
  //     title: payload.payload.title,
  //     author: payload.payload.author,
  //   });
  // },
  
});

export const { addBook, removeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
