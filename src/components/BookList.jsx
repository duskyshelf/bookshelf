import React, { PropTypes, Component } from 'react'
// import { fetchBooks } from '../actions/APIActions'

// export default React.createClass({
//   getBookList: function() {
//     return this.props.books || [ "test" ];
//   },
//   render: function() {
//     return <ul className="list">
//       {this.getBookList().map(book =>
//         <li style={{"list-style-type": "none"}}>
//           <button key={book}}>
//             <h1>{book}</h1>
//           </button>
//         </li>
//       )}
//     </ul>
//   }
// });

export default class BookList extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book, i) =>
          <li key={i}>{book}</li>
        )}
      </ul>
    )
  }
}

// BookList.propTypes = {
//   posts: PropTypes.array.isRequired
// }



// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { fetchBooks } from '../actions/APIActions'
//
// class BookList extends Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleRefreshClick = this.handleRefreshClick.bind(this)
//   }
//
//   componentDidMount() {
//     const { dispatch } = this.props
//     dispatch(fetchBooks())
//   }
//
//   componentWillReceiveProps(nextProps) {
//     const { dispatch } = this.props
//     dispatch(fetchBooks())
//   }
//
//   handleChange() {
//   }
//
//   handleRefreshClick(e) {
//     e.preventDefault()
//
//     const { dispatch } = this.props
//     dispatch(fetchBooks())
//   }
//
//   render() {
//     const { books } = this.props
//     return <ul className="list">
//       { books.map(book =>
//         <li>
//           <button key={book} onclick={ this.handleRefreshClick }>
//             <h1>{book}</h1>
//           </button>
//         </li>
//       )}
//     </ul>
//   }
// }
//
// // BookList.propTypes = {
// //   books: PropTypes.array.isRequired,
// //   isFetching: PropTypes.bool.isRequired,
// //   dispatch: PropTypes.func.isRequired
// // }
//
// function mapStateToProps(state) {
//   const { booksCollection } = state
//
//   const {
//      books,
//      isFetching
//    } = booksCollection || {
//      books: [],
//      isFetching: true
//    }
//
//   return {
//     books,
//     isFetching
//   }
// }
//
// export default connect(mapStateToProps)(BookList)