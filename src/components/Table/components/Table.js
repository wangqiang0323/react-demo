import React from 'react'
import { connect } from 'react-redux'

class Table extends React.Component {
  state = {
    columns: []
  }

  searchColumns = (obj, result) => {
    obj.forEach(column => {
      if ('columns' in column) {
        column._id = Symbol()
        column._parent = column._parent || 'root'
        column.columns.forEach(item => {
          item._parent = column._id
          item._id = Symbol()
        })
        result.push(column)
        this.searchColumns(column.columns, result)
      } else {
        result.push(column)
      }
    })
  }

  componentWillMount() {
    // this.props.dispatch(transforTable(this.props.columns))
    let result = []
    this.searchColumns(this.props.columns, result)
    this.setState({
      columns: result
    })
    let accessors = []
    result.forEach(item => {
      if ('accessor' in item) {
        accessors.push(item.accessor)
      }
    })
    this.setState({
      accessors: accessors
    })
  }

  render() {
    console.log(this.state.accessors)
    return (
      <div className="self-table">
        <div className="tb-header" ref={el => this.tableHeader = el}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              {<tr>{this.props.columns.map(column => {
                  return <td key={column.Header} colSpan={column.columns ? column.columns.length : 1} rowSpan={column.columns ? 1 : 2}>{column.Header}</td>
                })}</tr>
              }
              {
                <tr>{this.props.columns.map(column => 
                  'columns' in column
                  ? column.columns.map(item => {
                      return <td key={item.Header}>{item.Header}</td>
                    })
                  : null
                )}</tr>
              }
            </thead>
          </table>
        </div>
        <div className="tb-content" ref={el => this.tableBody = el}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {
                this.props.data.map((item, index) => {
                  return <tr key={index}>{
                    this.state.accessors.map(accessor => {
                      return <td key={accessor}>{item[accessor]}</td>
                    })
                  }</tr>
                })
              }
            </tbody> 
          </table>
        </div>
        <div className="tb-footer">
          <tr><td>上一页</td><td>下一页</td><td><input type="text" width="50px"></input></td><td>共 xxx 页</td></tr>
        </div>
      </div>
    )
  }
}

export default connect()(Table)