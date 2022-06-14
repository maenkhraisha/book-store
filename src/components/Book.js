import React from "react";

const bookList = [{
  key:1,
  categorie: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
},
{
  key:2,
  categorie: 'Novel',
  title: 'Ulysses',
  author: 'James Joyce',
},
{
  key:3,
  categorie: 'Drama',
  title: 'Don Quixote',
  author: 'Herman Melville',
}];

const Book = () => {
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
