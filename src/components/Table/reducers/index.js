import { combineReducers } from 'redux'
import table from './table'
import columns from './columns'

export default combineReducers({
  table,
  columns
})
