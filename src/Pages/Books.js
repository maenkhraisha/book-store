import React from 'react';
import { useSelector } from 'react-redux';

import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const bookList = useSelector((bookState) => bookState.books);

  return (
    <div>

      {bookList.map((book) => (
        <Book key={book.key} props={book} />
      ))}

      <AddBook />
    </div>
  );
}
export default Books;
