import { RECEIVE_BOOKS } from "../actions/APIActions";
import { Map } from 'immutable';

export default function booksCollection(state = Map(), action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return state.merge({ books: action.books });
    case 'SET_STATE':
      return action.state
    default:
      return state;
  }
};