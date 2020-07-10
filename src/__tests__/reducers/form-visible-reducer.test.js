import formVisibleReducer from '../../reducers/form-visible-reducer'
import * as a from '../../actions';

describe('formVisibleReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(formVisibleReducer('landing-page', {type:null})).toEqual('landing-page');
  });
  test('should change form visiblility state to keg-list when action type is equal to KEG_LIST', () => {
    expect(formVisibleReducer(false, a.seeKegList())).toEqual('keg-list');
  });
  test('should change form visiblility state back to landing-page when action type is equal to LANDING_PAGE', () => {
    expect(formVisibleReducer(false, a.seeLandingPage())).toEqual('landing-page');
  });    
  test('should change form visiblility state to add-keg when action type is equal to SEE_FORM', () => {
    expect(formVisibleReducer(false, a.seeForm())).toEqual('see-form');
  });    
  
});  