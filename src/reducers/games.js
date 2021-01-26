const gamesReducer = (state = [], action) => {
 switch(action.type) {
  case 'ADD_GAMES':
    return [...state, ...action.games];
 }
};
export default gamesReducer;
