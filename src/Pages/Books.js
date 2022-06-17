import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Book from "../components/Book";
import AddBook from "../components/AddBook";
import { getBooks } from '../components/redux/books/booksReducer';

function Books() {
  let bookList = useSelector((bookState) => bookState.books);
  bookList = bookList.entities;

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBooks(), [])
  });

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
