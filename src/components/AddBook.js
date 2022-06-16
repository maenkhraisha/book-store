import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

import addBookAction from './redux/actions';

function AddBook() {
  const inputTitle = document.getElementById('title');
  const inputAuthor = document.getElementById('author');

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addHandler = () => {
    const key = uuid();
    const categorie = 'islamic';
    
    dispatch(addBookAction({ key,categorie, title, author}));
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
