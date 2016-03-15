import { createStore } from 'redux'
import { fetchBooks } from '../actions/APIActions'
import { Provider } from 'react-redux'
import BookList from '../components/BookList'
import reducer from '../reducers/reducer'
import { Map } from 'immutable'
import ReactDOM from 'react-dom';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: { books: ['A Killing Joke', 'The Dark Knight Returns', 'The Long Halloween'] }
});

// ReactDOM.render(
//   <Provider store={store}>
//     <BookList />
//   </Provider>
//   document.getElementById('app')
// );