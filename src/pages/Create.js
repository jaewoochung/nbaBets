import React from 'react'
import api from '../api'

import axios from 'axios'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
    background: #F64C72
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      betAmount: '',
      betTeam: '',
      betData: [],
    }
  }

  componentDidMount = async () => {
    axios.get('http://localhost:3000/odds').then(res => {
      // console.log(res.data)
      this.setState({
        betData: res.data.data,
      })
    })
  }

  handleChangeInputName = async event => {
    const betTeam = event.target.value
    this.setState({ betTeam })
  }

  handleChangeInputFunds = async event => {
    const betAmount = event.target.value
    this.setState({ betAmount })
  }

  // handleBetInput
  handleIncludeUser = async () => {
    const { betAmount, betTeam } = this.state
    const payload = { betAmount, betTeam }
    await api.insertUser(payload).then(res => {
      window.alert("Bet was inserted")
      this.setState({
        betAmount: '',
        betTeam: '',
      })
    })
  }

  createOptions = async () => {
    var answer
  }

  render() {
    {/* this.getListOfTeams() */}
    { const {betData} = this.state}
    return (
      <Wrapper>
        <Title>Create Bet</Title>
        <Label>BetAmount: </Label>
        <InputText
          type="number"
          value={this.state.betAmount}
          onChange={this.handleChangeInputFunds}
        />

        <Label>Select a team to bet on</Label>

        <select id="teams" value={"TeamName"}>
          { this.state.betData.map((item, i) =>
              <option>{item.teams[0]}</option>
          )}
        </select>
        <br/>

        <Button onClick={this.handleIncludeUser}>Add Bet</Button>
        <CancelButton href={'/users/list'}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default Create
