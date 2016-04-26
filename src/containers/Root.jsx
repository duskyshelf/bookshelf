import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/store'
import Async from '../containers/Async'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Async />
      </Provider>
    )
  }
}