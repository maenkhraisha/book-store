import React from 'react';

function Book(props) {
    return(
        <div>
        <ul>
          <li>
            <p>{props.books[0].categorie}</p>
            <p>{props.books[0].title}</p>
            <p>{props.books[0].author}</p>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
          </li>
        </ul>
      </div>
    )
}

export default Book;