import React from 'react';

export default React.createClass({
  getBookList: function() {
    return this.props.books || [];
  },
  render: function() {
    return <ul className="list">
      {this.getBookList().map(book =>
        <li>
          <button key={book}>
            <h1>{book}</h1>
          </button>
        </li>
      )}
    </ul>
  }
});