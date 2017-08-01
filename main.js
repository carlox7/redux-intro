import {createStore} = from 'redux';

import categoryReducer from './reducer/boards.js';
import{
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset,
}from './action/category-actions.js'

const store = createStore(categoryReducer)

store.subscribe(() => {
  console.log('__STATE__', store.getState());
})

store.dispatch(categoryCreate({title: 'coolbeans'}))
store.dispatch(categoryCreate({title: 'wat'}))
store.dispatch(categoryCreate({title: 'js rules'}))
