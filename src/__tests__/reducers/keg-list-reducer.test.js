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

  const currentState = {
    4: {
      name: "IPA",
      brand: "Bouy Beer Co.",
      price: 150,
      alcoholContent: 7.5,
      pintsLeft: 124,
      id: 4
    },
    5: {
      name: "Lil Sumpin' Hazy",
      brand: "Lagunitas",
      price: 150, 
      alcoholContent: 7.2,
      pintsLeft: 124, 
      id: 5
    }
  }

  test('should sucessfully delete a keg from kegListReducer', () => {
    action = {
      type: 'DELETE_KEG',
      id: 4
    }
    expect(kegListReducer(currentState, action)).toEqual({
      5: {
        name: "Lil Sumpin' Hazy",
        brand: "Lagunitas",
        price: 150, 
        alcoholContent: 7.2,
        pintsLeft: 124, 
        id: 5 
      }
    });
  });

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

    expect(kegListReducer({}, action)).toEqual({
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

