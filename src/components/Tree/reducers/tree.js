const initialState2 = [{
  id: 1,
  name: '个人信息',
  parent: 0
}, {
  id: 2,
  name: '状态管理',
  parent: 0
}, {
  id: 3,
  name: '自我介绍',
  parent: 1
}, {
  id: 4,
  name: '学历信息',
  parent: 1
}, {
  id: 5,
  name: '日历',
  parent: 2
}, {
  id: 6,
  name: '笔记本',
  parent: 5
}, {
  id: 7,
  name: '修改笔记本',
  parent: 6
}, {
  id: 8,
  name: '经历',
  parent: 2
}, {
  id: 9,
  name: '小记',
  parent: 5
}, {
  id: 10,
  name: '旅游',
  parent: 8
}]

const toggleTree = (state=initialState2, action) => {
  switch(action.type) {
    case 'TOGGLE_VISIABLE':
      return state.map(item => 
        (item.id === action.id)
          ? {...item, show: !item.show || false}
          : item
      )
    case 'MOVE_NODE':
      return action.fromId === action.toId ? state : state.map(item => 
        (item.id === action.fromId)
          ? Object.assign({}, item, {parent: action.toId})
          : item
      )
    case 'SET_ACTIVE_NODE':
      return state.map(item => 
        (item.id === action.id)
          ? {...item, active: true}
          : Object.assign({}, item, {active: false})
      ) 
    default:
      return state
  }
}

export default toggleTree