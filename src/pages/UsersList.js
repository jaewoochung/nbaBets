import React from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'
import 'react-table-6/react-table.css'


const Wrapper = styled.div`
  padding: 0 50px 40px 40px;
`

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    // Using the api I created in ../api directory
    await api.getAllUsers().then(users => {
      this.setState({
        users: users.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { users, isLoading } = this.state
    console.log('TCL: Userslist -> render -> users', users)

    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
      },
      {
        Header: 'Bet Amount',
        accessor: 'betAmount',
        filterable: true,
      },
      {
        Header: 'Bet Team',
        accessor: 'betTeam',
        filterable: true,
      },
    ]


    let showTable = true
    if (!users.length) {
      showTable = false
    }

    return (
      <div>
      <Wrapper>
        {showTable && (
          <ReactTable
            data={users}
            columns={columns}
            loading={isLoading}
            defaultPageSize={5}
            showPageSizeOptions={true}
            minRow={0}
          />
        )}
        </Wrapper>
      </div>
    )
  }
}

export default UsersList
