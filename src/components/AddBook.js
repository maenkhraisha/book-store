import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddBook() {
  const inputTitle = document.getElementById("title");
  const inputAuthor = document.getElementById("author");

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: "ADD_BOOK", payload: { title: title, author: author } });
    setAuthor("");
    setTitle("");
    
    inputTitle.value = "";
    inputAuthor.value = "";
  };

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form>
      Title :
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        name="title"
      />
      Author:
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        id="author"
        name="author"
      />
      <button onClick={addHandler} type="button">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
