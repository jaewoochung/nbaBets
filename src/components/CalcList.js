import React from 'react'
import { gameMap } from './Game'

let secondMap = new Map()
const CalcList = ({ betTeam }) => {
  // if (gameMap.has(betTeam)) {
  //   console.log("it contains team")
  // } else {
  //   console.log("couldnt find")
  // }
  return (
    <div>{betTeam}</div>
  )
}

export default CalcList
