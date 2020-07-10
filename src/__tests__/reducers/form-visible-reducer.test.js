import formVisibleReducer from '../../reducers/form-visible-reducer'

describe('formVisibleReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(formVisibleReducer('landing-page', {type:null})).toEqual('landing-page');
  });
  test('should change form visiblility state to keg-list when action type is equal to KEG_LIST', () => {
    expect(formVisibleReducer(false, {type:'KEG_LIST'})).toEqual('keg-list');
  });
  test('should change form visiblility state back to landing-page when action type is equal to LANDING_PAGE', () => {
    expect(formVisibleReducer(false, {type:'LANDING_PAGE'})).toEqual('landing-page');
  });
  
});  