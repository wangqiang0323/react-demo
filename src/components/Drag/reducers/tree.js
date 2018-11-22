const initialState = [{
  id: 1,
  name: '权限管理',
  node: [{
    id: 21,
    name: '权限查看',
  }]
},{
  id: 2,
  name: 'b',
  node: [{
    id: 22,
    name: 'bb',
    node: [{
      id: 111,
      name: 'a',
      node: [{
        id: 2111,
        name: 'aa',
      }]
    },{
      id: 222,
      name: 'b',
      node: [{
        id: 2211,
        name: 'bb'
      }]
    }]
  }]
}]

const initialState2 = [{
  id: 1,
  name: '个人信息',
  parent: null
}, {
  id: 2,
  name: '状态管理',
  parent: null
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
        (item.id === action.data.id)
          ? {...item, show: !item.show || false}
          : item
      )
    default:
      return state
  }
}

export default toggleTree