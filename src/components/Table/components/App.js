import React from 'react'
import Table from './Table'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    let columns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: 'lastName'
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age"
          },
          {
            Header: "Status",
            accessor: "status"
          }
        ]
      },
      {
        Header: 'Stats',
        accessor: "visits"
      }
    ]
    return (
      <Table data={this.props.data}  columns={columns}></Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.table
})

export default connect(mapStateToProps)(App)