export default (state = 'landing-page', action) => {
  switch (action.type) {
    case 'KEG_LIST': 
      state = 'keg-list';
      return state;
    case 'LANDING_PAGE':
      state = 'landing-page';
      return state;
  default: 
    return state;
  }
}