import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
