import React from 'react'
import BetChild from './BetChild'

const Bet = (props) => {
  return (
    <div className="game-list">
      {/*props.teams*/}
      {props.sites && props.sites.filter(site => site.site_key==="draftkings").map(filtered => (
        <BetChild key={filtered.site_key} {...filtered} team={props.teams} userData={props.userData}/>
      ))}
    </div>
  )
}

export default Bet
