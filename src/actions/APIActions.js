import { fetch } from 'isomorphic-fetch';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';

export function fetchBooks() {
  return dispatch => {
    return fetch('http://localhost:3000')
    .then(req => req.json())
    .then(json => dispatch(receiveBooks(json)))
  }
}

function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    books: json
  }
}
