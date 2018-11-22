const searchColumns = (obj) => {
  let result = []
  obj.forEach(column => {
    if ('columns' in column) {
      column.id = Symbol()
      column.columns.forEach(item => {
        item.parent = column.id
      })
      result.push(column)
      searchColumns(column.columns)
    } else {
      result.push(column)
    }
  })
  return result
}

const transforTable = (state=[], action) => {
  switch(action.type) {
    case 'TRANSFOR_TABLE':
      return searchColumns(action.data)
    default:
      return state
  }
}

export default transforTable