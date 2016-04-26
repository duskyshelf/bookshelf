import fetch from 'isomorphic-fetch';
export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';


export function fetchBooks() {
  return dispatch => {
    dispatch(requestBooks)
    return fetch('http://localhost:3000')
      .then(req => req.json())
      .then(json => dispatch(receiveBooks(json)))
  }
}

function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    books: json,
    isFetching: false
  }
}

function requestBooks() {
  return {
    type: REQUEST_BOOKS,
    isFetching: true
  }
}



// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`http://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
//
// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }
//
// export function fetchPostsIfNeeded(subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }

