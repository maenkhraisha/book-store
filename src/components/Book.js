import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "./redux/books/booksReducer";

const Book = (book) => {
  
  const dispatch = useDispatch();
  const removeBookHandler = (e) => {
    const keyValue = e.target.value;
    dispatch(removeBook(keyValue));
  };

  const { props } = book;
  /* eslint-disable react/prop-types */
  const { item_id, category, author, title } = props;

  return (
    
    <div>
      <ul>
          <li key={item_id}>
            <p>{category}</p>
            <p>{title}</p>
            <p>{author}</p>
            <button type="button">Comments</button>
            <button
              value={item_id}
              onClick={(e) => removeBookHandler(e)}
              type="button"
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </li>
      </ul>
    </div>
  );
};

export default Book;
