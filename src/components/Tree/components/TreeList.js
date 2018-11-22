import React from 'react'
import Tree from './Tree'

const TreeList = ({data, parent}) => {
  return (
    <Tree data={data} parent={parent} key={data.id}></Tree>
  )
}

export default TreeList