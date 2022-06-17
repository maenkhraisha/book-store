import React from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "./redux/books/booksReducer";

const FetchBooks = () => {
  const dispatch = useDispatch();

  const callAPIHandller = () => {
    dispatch(getBooks(), []);
  };

  return (
    <div>
      <h2>Call the API</h2>
      <button type="button" onClick={callAPIHandller}>
        CALLL
      </button>
    </div>
  );
};

export default FetchBooks;
