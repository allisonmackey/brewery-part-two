import * as c from './../actions/ActionTypes';
import kegListReducer from './keg-list-reducer';

export default (state = null, action) => {
  const {id} = action;
  switch (action.type) {
    case c.SELECTED_KEG: 
      state = id
      return state;
    default: return state; 
  }
  
}
