import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsLeft, id} = keg;
  return {
    type: c.ADD_KEG,
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent, 
    pintsLeft: pintsLeft, 
    id: id
  }
}

export const deleteKeg = (id) => {
  return {
    type: c.DELETE_KEG, 
    id: id
  }

}
export const buyPint = (keg) => {
  const { name, brand, price, alcoholContent, pintsLeft, id} = keg;
  return {
    type: c.BUY_PINT,
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent, 
    pintsLeft: pintsLeft, 
    id: id
  }
}

export const selectKeg = (id) => {
  return {
    type: c.SELECTED_KEG, 
    id: id
  }
}

export const unselectKeg = (id) => {
  return {
    type: c.UNSELECT_KEG, 
    // id: null
  }
}

export const seeKegList = () => ({
  type: c.KEG_LIST
})

export const seeLandingPage = () => ({
  type: c.LANDING_PAGE
})

export const seeForm = () => ({
  type: c.SEE_FORM
})
