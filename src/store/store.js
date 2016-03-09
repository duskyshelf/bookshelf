import { createStore } from 'redux'
import { fetchBooks, RECEIVE_BOOKS } from '../actions/APIActions'
import reducer from '../reducers/reducer'

const store = createStore(reducer);

store.dispatch(fetchBooks())