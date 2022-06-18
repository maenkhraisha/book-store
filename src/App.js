import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Books from './Pages/Books';
import Categories from './Pages/Categories';
import { getBooks } from './components/redux/books/booksReducer';

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
          {...dispatch(getBooks(), [])}
            path="/books"
            element={<Books />}
          />
          <Route
            path="*"
            element={<Books />}
          />
          <Route
            path="/categories"
            element={<Categories />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
