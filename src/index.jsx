import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';

const books = ['Catch 22', 'Lord of the Rings'];

ReactDOM.render(
  <BookList books={books} />,
  document.getElementById('app')
);