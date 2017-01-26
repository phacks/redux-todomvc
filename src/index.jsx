import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';
import {fromJS} from 'immutable';

import 'todomvc-app-css/index.css';

const initialState = fromJS({
  todos: [
    {id: 1, text: 'React', status: 'active', editing: false},
    {id: 2, text: 'Redux', status: 'active', editing: false},
    {id: 3, text: 'Immutable', status: 'active', editing: false},
  ],
  filter: 'all'
});

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);
