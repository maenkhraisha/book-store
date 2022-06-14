import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from './books/books';
import { categorieReducer } from './categories/categories';
import { bookState } from './books/books-state'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categorieReducer,
  },bookState
});

export default store;
