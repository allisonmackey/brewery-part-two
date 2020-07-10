import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions'


describe('selectedKegReducer', () => {
  const kegData= {
    id: 3
  }
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer(null, {type:null})).toEqual(null);
  })
  test('should return updated state with id when given action SELECT_KEG', () => {
    const {id} = kegData
    expect(selectedKegReducer(null, a.selectKeg(id))).toEqual(3)
  })
  test('should return updated state with id when given action UNSELECT_KEG', () => {
    expect(selectedKegReducer(null, a.unselectKeg())).toEqual(null)
  })
})