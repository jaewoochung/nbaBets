import React from 'react'
import styled from 'styled-components'
import api from '../api'

const Title = styled.h1.attrs({
    className: 'h3',
})`
  color: #FFF;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    width: 75px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
    background: #F64C72
`

// const BetChild = ({site_key, odds, team, userData}) => {
class BetChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      betTeam: '',
      betAmount: '',
      betOdds: '',
    }
  }

  handleIncludeBet = async () => {
    const { betAmount, betTeam, betOdds } = this.state
    const payload = { betAmount, betTeam, betOdds }
    await api.insertUser(payload).then(res => {
      window.alert("Bet was inserted")
      this.setState({
        betAmount: '',
        betTeam: '',
        betOdds: '',
      })
    })
  }

  handleTeamBet = async (team, odds) => {
    const betTeam = team
    const betOdds = odds
    window.alert("You completed a bet on " + betTeam + " with the odds: " +odds + " press complete bet to process it")
    this.setState({ betTeam, betOdds })
  }

  handleInputFunds = async event => {
    const betAmount = event.target.value
    this.setState({ betAmount })
  }

  render() {
    return (
      <Wrapper>
        <Title>Input bet amount</Title>
        <InputText
          type="number"
          value={this.state.betAmount}
          onChange={this.handleInputFunds}
        />

        <div className="gameDiv">
          <em>Odds Maker: </em>{this.props.site_key}
          <br/>
          {this.props.team[0]}:{this.props.odds.totals.odds[0]}
          <Button onClick={() =>
            this.handleTeamBet(this.props.team[0], this.props.odds.totals.odds[0])}>
            Bet
          </Button>
          <br/>
          {this.props.team[1]}:{this.props.odds.totals.odds[1]}
          <Button onClick={() =>
            this.handleTeamBet(this.props.team[1], this.props.odds.totals.odds[1])}>
            Bet
          </Button>
        </div>

        <Button onClick={this.handleIncludeBet}>Complete Bet</Button>
      </Wrapper>

    )
  }
}

export default BetChild
