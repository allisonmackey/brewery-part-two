import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions'

describe('selectedKegReducer', () => {
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer(null, {type:null})).toEqual(null);
  })
  test('should return updated state with id when given action SELECT_KEG', () => {
    expect(selectedKegReducer(null, {type: c.SELECT_KEG})).toEqual(null);
  })
})
})