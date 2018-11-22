export const toggleVisiable = (id) => ({
  type: 'TOGGLE_VISIABLE',
  id
})

export const initTree = () => ({
  type: 'INIT_TREE'
})

export const moveNode = (fromId, toId) => ({
  type: 'MOVE_NODE',
  fromId,
  toId
})

export const setActiveNode = (id) =>({
  type: 'SET_ACTIVE_NODE',
  id
})