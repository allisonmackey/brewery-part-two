import * as actions from './../actions';

describe('brewery actions', () => {
  it('addKeg should create an ADD_KEG action', () => {
    let keg = {
      name: "Lil' Squeezy Juicy Ale",
      brand: "Deschutes",
      price: 150,
      alcoholContent: 5,
      pintsLeft: 124,
      id: 4
    }
    expect(actions.addKeg(keg)).toEqual({
      type: 'ADD_KEG',
      name: "Lil' Squeezy Juicy Ale",
      brand: "Deschutes",
      price: 150,
      alcoholContent: 5,
      pintsLeft: 124,
      id: 4
    });
  });
})