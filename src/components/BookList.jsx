import React from 'react';

export default React.createClass({
  getBookList: function() {
    return this.props.books || [];
  },
  render: function() {
    return <ul className="list">
      {this.getBookList().map(book =>
        <li style={{"list-style-type": "none"}}>
          <button key={book}>
            <h1>{book}</h1>
          </button>
        </li>
      )}
    </ul>
  }
});
