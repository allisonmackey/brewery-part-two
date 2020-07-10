import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {id} = action;
  switch (action.type) {
    case c.SELECTED_KEG: 
      state = id
      return state;
    case c.UNSELECT_KEG:
      state = null
      return state;
    default: return state; 
  }
  
}
