import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer)

describe('rootReducer', () => {
  test('should check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'LANDING_PAGE'
    }
    store.dispatch(action);
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action))
  });
});
