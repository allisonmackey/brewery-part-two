import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer({}, {type:null})).toEqual(null);
  })
})