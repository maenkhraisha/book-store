import React from "react";
import { useSelector } from "react-redux";
import {bookState} from "./redux/books/books-state";


const Book = () => {
  let bookList = useSelector(bookState => bookState.books);
  console.log(bookState);
  
  return (
    <div>
      <ul>
        {bookList.map((b) => (
          <li key={b.key}>
            <p>{b.categorie}</p>
            <p>{b.title}</p>
            <p>{b.author}</p>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
