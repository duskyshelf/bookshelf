import { RECEIVE_BOOKS } from "../actions/APIActions";
import { Map } from 'immutable';

export default function booksCollection(state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        books: action.books
      });
    case 'SET_STATE':
      return state.merge(action.state);
    default:
      return state;
  }
}