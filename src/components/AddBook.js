import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

import { sendBook } from './redux/books/booksReducer';

function AddBook() {
  const inputTitle = document.getElementById('title');
  const inputAuthor = document.getElementById('author');

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addHandler = () => {
    const itemId = uuid();
    const category = 'islamic';



    dispatch(sendBook({
      itemId, category, title, author,
    }), []);

    setAuthor('');
    setTitle('');
    inputTitle.value = '';
    inputAuthor.value = '';
  };

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
