const betsReducer = (state02 = [], action2) => {
 switch(action2.type) {
  case 'ADD_BETS':
    return [...state02, ...action2.bets];
 }
};
export default betsReducer;
