import { createStore } from 'redux';
import gamesReducer from '../reducers/games';
const store = createStore(gamesReducer);
store.subscribe(() => {
 console.log('store data:', store.getState());
});
export default store;
