import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer)

describe('rootReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      selectedKeg: null,
      formVisibleOnPage: 'landing-page',
      masterKegList: {
        1:  { name: "Mo-haze-ic IPA",
        brand: "Migration Brewery",
        price: 170,
        alcoholContent: 6.1,
        pintsLeft: 124,
        id: 1 },
    2: { name: "Starburst IPA",
        brand: "Ecliptic Brewing",
        price: 180,
        alcoholContent: 7.8,
        pintsLeft: 124,
        id: 2 },
    3: { name: "IPA",
        brand: "Bouy Beer Co.",
        price: 150,
        alcoholContent: 7.5,
        pintsLeft: 124,
        id: 3 },
    4: { name: "Ranier",
        brand: "Pabst Brewing",
        price: 100,
        alcoholContent: 4.73,
        pintsLeft: 124,
        id: 4} 
      }
    })
  })

  test('should check that inital state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type:null}));
  });

  test('should check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'LANDING_PAGE'
    }
    store.dispatch(action);
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action))
  });
});


// test('check that state of formVisibleReducer matches rootReducer when changed with action', () => {
//   const action = {
//     type: 'ADD_KEG',
//     name: "Lil' Squeezy Juicy Ale",
//     brand: "Deschutes",
//     price: 150,
//     alcoholContent: 5,
//     pintsLeft: 124,
//     id: 4
//   }
//   store.dispatch(action); 
//   expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
// }) 