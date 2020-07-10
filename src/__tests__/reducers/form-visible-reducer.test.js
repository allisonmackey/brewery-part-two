import formVisibleReducer from '../../reducers/form-visible-reducer'
import * as c from '../../actions/ActionTypes';

describe('formVisibleReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(formVisibleReducer('landing-page', {type:null})).toEqual('landing-page');
  });
  test('should change form visiblility state to keg-list when action type is equal to KEG_LIST', () => {
    expect(formVisibleReducer(false, {type: c.KEG_LIST} )).toEqual('keg-list');
  });
  test('should change form visiblility state back to landing-page when action type is equal to LANDING_PAGE', () => {
    expect(formVisibleReducer(false, {type: c.LANDING_PAGE})).toEqual('landing-page');
  });    
  test('should change form visiblility state to add-keg when action type is equal to SEE_FORM', () => {
    expect(formVisibleReducer(false, {type: c.SEE_FORM})).toEqual('see-form');
  });    
  
});  