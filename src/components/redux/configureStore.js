import { configureStore } from '@reduxjs/toolkit';

import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { bookReducer } from './books/booksReducer';
import { categorieReducer } from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categorie: categorieReducer,
  },},applyMiddleware(thunk));

export default store;
