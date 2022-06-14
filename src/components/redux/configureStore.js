import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './books/books';
import { categorieReducer } from './categories/categories';

const rootReducer = {
    books: bookReducer,
    categories: categorieReducer
};

export const store = configureStore({ reducer: rootReducer });
