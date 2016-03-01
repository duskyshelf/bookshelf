import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <BookList books={books} />,
  document.getElementById('app')
);