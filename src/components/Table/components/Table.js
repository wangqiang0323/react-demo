import React from 'react'
import { connect } from 'react-redux'

class Table extends React.Component {
  componentDidMount() {
    window.resize()
  }

  render() {
    return (
      <div className="self-table">
        <div className="tb-header">
          <table cellPadding="0" cellSpacing="0" border="0" ref={el => this.tableHeader = el}>
            <thead>
              {<tr>{this.props.columns.map(column => {
                  return <td key={column.Header} colSpan={column.columns.length}>{column.Header}</td>
                })}</tr>
              }
            </thead>
          </table>
        </div>
        <div className="tb-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {
                  this.props.data.map((item, index) => {
                    return <tr key={index}><td>{item.firstName}</td><td>{item.age}</td><td>{item.visits}</td></tr>
                  })
                }
              </tbody> 
            </table>
        </div>
      </div>
    )
  }
}

export default connect()(Table)