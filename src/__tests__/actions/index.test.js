import * as actions from '../../actions';

describe('brewery actions', () => {
  let keg = {
    name: "Lil' Squeezy Juicy Ale",
    brand: "Deschutes",
    price: 150,
    alcoholContent: 5,
    pintsLeft: 124,
    id: 4
  }

  it('deleteKeg should create an DELETE_KEG action', () => {
    expect(actions.deleteKeg(keg.id)).toEqual({
      type: "DELETE_KEG",
      id: 4
    });
  });

  it('addKeg should create an ADD_KEG action', () => {

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

  it('see kegList should create a KEG_LIST action', () =>  {
    expect(actions.seeKegList()).toEqual({
      type: 'KEG_LIST'
    });
  });

  it('seeLandingPage should create a LANDING_PAGE action', () =>  {
    expect(actions.seeLandingPage()).toEqual({
      type: 'LANDING_PAGE'
    });
  });

  it('seeForm should create a SEE_FORM action', () =>  {
    expect(actions.seeForm()).toEqual({
      type: 'SEE_FORM'
    });
  });
})