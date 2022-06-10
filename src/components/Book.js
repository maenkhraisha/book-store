import React from 'react';

const Book = (props) => {
  /* eslint-disable react/prop-types */
  const { books } = props;
  return (
    <div>
      <ul>
        <li>
          <p>{books.categorie}</p>
          <p>{books.title}</p>
          <p>{books.author}</p>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default Book;
