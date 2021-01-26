import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'

import api from '../api'
import CalcList from './CalcList'

class GamesList extends React.Component { // = (props) => {
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
        {
          this.props.games && this.props.games.map((game) =>
          <Game key={game.id} { ...game } betData={this.state.users} /> )
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    games: state
  }
}

export default connect(mapStateToProps)(GamesList)
