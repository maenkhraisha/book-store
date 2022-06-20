import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  let bookList = useSelector((bookState) => bookState.books);
  bookList = bookList.entities;

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.item_id} props={book} />
      ))}

      <AddBook />
    </div>
  );
}
export default Books;
