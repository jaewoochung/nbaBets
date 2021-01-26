import { createStore } from 'redux';
import betsReducer from '../reducers/bets';

const betStore = createStore(betsReducer);
betStore.subscribe(() => {
 console.log('store bets data:', betStore.getState());
});

export default betStore;
