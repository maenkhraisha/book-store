import React from "react";
import { store } from "./redux/configureStore";




function add() {
  const inputName = document.getElementById("title");
  const inputAuthor = document.getElementById('author');

  console.log(store.dispatch({
    type:'ADD_BOOK',
    title:inputName.value,
    author:inputAuthor.value
  }));
}

function AddBook() {
  return (
    <form>
      <input type="text"  id="title"  name="title" />
      <input type="text"  id="author" name="author" />
      <button onClick={add} type="button">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
