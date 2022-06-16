import React from "react";
import { useDispatch } from "react-redux";

const Book = (book) => {
  const dispatch = useDispatch();
  const removeBookHandler = (e) => {
    const keyValue = e.target.value;
    dispatch({ type: "REMOVE_BOOK", payload: { key: keyValue } });
  };

  const {categorie, author, key, title } = book.props;
  return (
    <div>
      <ul>
        <li key={key}>
          <p>{categorie}</p>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button">Comments</button>
          <button
            value={key}
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
