'use strict';

//redux reducers both define the state, and the interactions to the state
//function signature of a redux reducer (oldState, action) => newState

//an action is object with two proptypes(type, payload)
//it gets passed into a reducer and the reducer ca use the action to update the state
let intialState = 0;

reducer = (state=0, action) => {
  let {type, payload} = action

  switch(type){
    case 'INC':
      return state + (payload ? payload : 1)
    case 'DEC':
      return state - (payload ? payload : 1)
    default:
      return state
  }
}
