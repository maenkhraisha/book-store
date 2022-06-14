import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from './books/books';
import { categorieReducer } from './categories/categories';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categorieReducer,
  },
});

export default store;
