import React from 'react'
import api from '../api'
import CalcList from './CalcList'

import { connect } from 'react-redux'

class Calculations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = async () => {
    // Using the api I created in ../api directory
    await api.getAllUsers().then(users => {
      this.setState({
        users: users.data.data,
      })
    })
  }

  render() {
    const { users } = this.state
    return (
      <div>
      { users.map((user) => <CalcList key={user._id} {...user} /> )}
      </div>
    )
  }
}

export default Calculations
