import React from 'react';
import { fetchBooks } from '../actions/APIActions'

export default React.createClass({
  getBookList: function() {
    return this.props.books || [ "test" ];
  },
  render: function() {
    return <ul className="list">
      {this.getBookList().map(book =>
        <li style={{"list-style-type": "none"}}>
          <button key={book} onclick={ fetchBooks() }>
            <h1>{book}</h1>
          </button>
        </li>
      )}
    </ul>
  }
});