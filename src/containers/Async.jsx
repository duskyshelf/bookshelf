import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/APIActions'
import BookList from '../components/BookList'

class Async extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBooks())
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props
    dispatch(fetchBooks())
  }

  // handleChange() {
  // }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchBooks())
  }

  render() {
    const { books, isFetching } = this.props
    return (
      <div>
        <div>
          <a href='#' onClick={this.handleRefreshClick}> Refresh </a>
        </div>
        { isFetching && books.length === 0 &&
          <h2>Loading...</h2>
        }
        { !isFetching && books.length === 0 &&
          <h2>Empty.</h2>
        }
        { books.length > 0 &&
          <div>
            Booklist
            <BookList books={ books } />
          </div>
        }
      </div>
    )
  }
}

// Async.propTypes = {
//   books: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  const { booksCollection } = state

  const {
     books,
     isFetching
   } = booksCollection || {
     books: [],
     isFetching: true
   }

  return {
    books,
    isFetching
  }
}

export default connect(mapStateToProps)(Async)