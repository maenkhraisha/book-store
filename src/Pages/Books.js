import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const bookList = {
  categorie: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
};

function Books() {
  return (
    <div>
      <Book books={bookList} />
      <AddBook />
    </div>
  );
}
export default Books;
