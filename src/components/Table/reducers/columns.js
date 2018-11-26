const searchColumns = (obj, result) => {
  obj.forEach(column => {
    if ('columns' in column) {
      column.id = Symbol()
      column.columns.forEach(item => {
        item.parent = column.id
      })
      result.push(column)
      searchColumns(column.columns, result)
    } else {
      result.push(column)
    }
  })
}

const transforTable = (state=[], action) => {
  switch(action.type) {
    case 'TRANSFOR_TABLE':
      let result = []
      searchColumns(action.data, result)
      return result
    default:
      return state
  }
}

export default transforTable