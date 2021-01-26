import React from 'react'
import { connect } from 'react-redux'
import Bet from './Bet'
import betStore from '../store/betStore'

import api from '../api'

class BetsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = async () => {
    await api.getAllUsers().then(users => {
      this.setState({
        users: users.data.data,
      })
    })
  }

  render() {
    return (
      <div className="game-list">
        { this.props.bets && this.props.bets.map((bet, index) =>
          <Bet key={index} {...bet} userData={this.state.users} /> ) }
      </div>
    )
  }
}

const mapBetStateToProps = (state02) => {
  return {
    bets: state02
  }
}

export default connect(mapBetStateToProps)(BetsList)

// export default connect(mapBetStateToProps)(BetsList);
