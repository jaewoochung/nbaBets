import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store/store';
import betStore from './store/betStore'
import { addGames } from './actions/games';
import { addBets } from './actions/bets'
import Header from './components/Header'
import { Provider } from 'react-redux'
import GamesList from './components/GamesList'
import BetsList from './components/BetsList'
import AppDB from './pages/AppDB'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import { nav } from 'react-bootstrap';

import Calculations from './components/Calculations'
import Profit from './components/Profit'

class AppBet extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/odds')
    .then(response => {
      console.log(response.data)
      betStore.dispatch(addBets(response.data.data))
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Profit />
        <BetsList  />
      </div>
    )
  }
}

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/schedule')
    .then(response => {
      console.log(response.data)
      store.dispatch(addGames(response.data.games))
    })
  }

  render() {
    return (
      <div>
        <GamesList />
      </div>
    )
  }
}

// export { PContext }

ReactDOM.render(
 <Provider store={store}>
  <AppDB />
  <Provider store={betStore}>
    <AppBet />
  </Provider>
  <App />
 </Provider>,
document.getElementById('root'));
