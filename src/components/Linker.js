import React from 'react'
import api from '../api'
import axios from 'axios'

console.log("hello brother good night")

let tmp1 = []
let tmp2 = []

class Linker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data1: [],
      data2: []
    }
  }
	componentDidMount = async () => {
		Promise.all([
			axios.get('http://localhost:3000/schedule'),
			api.getAllUsers()
		]).then(([result1, result2]) => {
			this.setState({
				data1: result1.data.games,
				data2: result2.data.data
			})
		})
	}
	render() {
		return (
			<div>
			{ console.log(this.state.data1) }
			{ console.log(this.state.data2) }
			</div>
		)
	}
}


export default Linker
