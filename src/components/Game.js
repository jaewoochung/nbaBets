import React from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})


// const Game = ({ home, away, scheduled, home_points, away_points, test }) => {

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: ''
    }
  }

  componentDidMount = async() => {
    // get the total value from Profit API
    await api.get('/profit/600cceac8f535b0be56757bd').then(profit => {
      this.setState({
        amount: profit.data.data.total,
      })
    })
    // call to updateProfits at a certain time
    window.setInterval(function(){ // Set interval for checking
      var date = new Date(); // Create a Date object to find out what time it is
      if(date.getHours() > 12 && date.getMinutes() === 0){ // Check the time
          // Do stuff
          this.updateProfits()
      }
    }, 600000); // Repeat every 600000 milliseconds (10 minute)
  }

  updateProfits() {
    // Obtain the winner of the game
    let winner = ''
    if (this.props.home_points > this.props.away_points) {
      winner = this.props.home.name
    } else {
      winner = this.props.away.name
    }
    // Go through the bets
    this.props.betData.forEach((item, i) => {
      // An Nba Game they have bet on
      if (item.betTeam === this.props.home.name || item.betTeam === this.props.away.name) {
        if (item.betTeam === winner) {  // they won the bet
          var num = this.state.amount + (item.betOdds * item.betAmount)
          var payload = { total: num }
          api.put('/profit/600cceac8f535b0be56757bd', payload)
          var link = '/user/' + item._id
          api.delete(link)
        } else {  // they lost the bet
          var num = this.state.amount - item.betAmount
          var payload = { total: num }
          api.put('/profit/600cceac8f535b0be56757bd', payload)
          var link = '/user/' + item._id
          api.delete(link)
        }
      }
    });

  }

  // console.log(winner)
  // test.forEach((item, i) => {
  //   if (item.betTeam === winner) {
  //     var profitData = api.get('/profit/600cceac8f535b0be56757bd')
  //     console.log(profitData)
  //     // let payload = {
  //     //   result: 'won',
  //     //   betTeam: item.betTeam,
  //     //   betAmount: item.betAmount,
  //     //   betOdds: item.betOdds,
  //     // }
  //     // var link = '/user/' + item._id
  //     // api.put(link, payload)
  //   } else {
  //     var profitData = api.get('/profit/600cceac8f535b0be56757bd')
  //     console.log(profitData)
  //   }
  // })

  render() {
    return (
      <div >
      </div>
    )
  }
}

export default Game
