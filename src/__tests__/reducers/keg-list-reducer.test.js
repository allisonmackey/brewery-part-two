import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: "IPA",
    brand: "Bouy Beer Co.",
    price: 150,
    alcoholContent: 7.5,
    pintsLeft: 124,
    id: 3
  }

  test('should sucessfully add new keg data to kegListReducer', () => {
    const {name, brand, price, alcoholContent, pintsLeft, id} = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand, 
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };

    expect(kegListReducer({}, {action})).toEqual({
      [id]: {
        name: name,
        brand: brand, 
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  })
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type:null})).toEqual({});
  })

})