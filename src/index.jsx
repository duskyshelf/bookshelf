import { createStore } from 'redux'
import { fetchBooks } from './actions/APIActions'
import { Provider } from 'react-redux'
import BookList from './components/BookList'
import reducer from './reducers/reducer'
import { Map } from 'immutable'
import ReactDOM from 'react-dom';
import React from 'react'

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: Map({ books: ['A Killing Joke', 'The Dark Knight Returns', 'The Long Halloween'] })
});

ReactDOM.render(
  <BookList books={ store.getState().toJS().books }/>,
  document.getElementById('app')
);