export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsLeft, id} = keg;
  return {
    type: 'ADD_KEG',
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent, 
    pintsLeft: pintsLeft, 
    id: id
  }
}