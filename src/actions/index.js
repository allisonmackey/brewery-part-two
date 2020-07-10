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

export const seePostList = () => ({
  type: c.POST_LIST
})

export const seeLandingPage = () => ({
  type: c.LANDING_PAGE
})

export const seeAddKegForm = () => ({
  type: c.SEE_FORM
})
