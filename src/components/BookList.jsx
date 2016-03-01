import React from 'react';

export default React.createClass({
  getBookList: function() {
    return this.props.books || [];
  },
  render: function() {
    return <div className="booklist">
      {this.getBookList().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});