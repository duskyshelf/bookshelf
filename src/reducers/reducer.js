import { RECEIVE_BOOKS } from "../actions/APIActions";

export default function booksCollection(state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        books: state[action.books]
      })
    default:
      return state
  }
}