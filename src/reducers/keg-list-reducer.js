export default (state = { 
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
    }, action) => {
  
  const {name, brand, price, alcoholContent, pintsLeft, id} = action;
  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          name: name, 
          brand: brand, 
          price: price, 
          alcoholContent: alcoholContent, 
          pintsLeft: pintsLeft, 
          id: id
        }
      })
    default: return state;
  }
}