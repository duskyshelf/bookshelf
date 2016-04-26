import { combineReducers } from 'redux'
import { REQUEST_BOOKS, RECEIVE_BOOKS } from "../actions/APIActions";
import { Map } from 'immutable';

function booksCollection(state = { isFetching: false, books: [] }, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      console.log("request books action")
      return state.merge({
        isFetching: true
      })
    case RECEIVE_BOOKS:
      console.log("receive books action")
      return state.merge({
        books: action.books,
        isFetching: false
      })
    case 'SET_STATE':
      console.log("set state action")
      return action.state
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  booksCollection
})

export default rootReducer