import React from "react";
import Book from '../components/Book';

let bookList = [{
    categorie: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  }];

function Books(props) {
    console.log(props);
  return (
    <Book  books={bookList} />
  );
}
export default Books;
