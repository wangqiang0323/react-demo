import { makeData } from '../utils'

const initData = makeData()

const initTable = (state=initData, action) => {
  switch(action.type) {
    case 'INIT_TABLE':
      return state
    default:
      return state
  }
}

export default initTable