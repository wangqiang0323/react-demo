import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { toggleVisiable, moveNode, setActiveNode } from '../actions'
import TreeList from './TreeList'
// const Tree = ({dispatch, data, parent}) => {
//   return (
//     // <ul>
//     //   { data.node 
//     //     ? <li>
//     //         <FontAwesomeIcon icon="angle-right" onClick={() => dispatch(toggleVisiable(data))}/> {data.name}
//     //         { data.show ? <TreeList data={data.node}></TreeList> : null }
//     //       </li> 
//     //     : <li>{data.name}</li> }
//     // </ul>
//     <ul>
//       { data.filter(i => i.parent === parent).map(item => {
//         return <div key={item.id}><li onClick={() => dispatch(toggleVisiable(item))}>{data.filter(asd => asd.parent === item.id).length > 0 ? <FontAwesomeIcon icon="angle-right"/> : null} {item.name}</li>{item.show ? <TreeList data={data} parent={item.id}></TreeList> : null}</div>
//       })}
//     </ul>
//   )
// }

class Tree extends React.Component {
  allowDrop(ev){
    ev.preventDefault();
  };

  drag(ev, item){
    ev.dataTransfer.setData("Text",item.id);
  }

  drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    this.props.dispatch(moveNode(parseInt(data, 10), parseInt(ev.target.id, 10)))
  }

  handClick (item) {
    if (!item.active) {
      this.props.dispatch(setActiveNode(item.id))
    }
    this.props.dispatch(toggleVisiable(item.id))
  }
  render() {
    let style = {
      height: '25px',
      width: '100%'
    }
    let items = this.props.data.filter(i => i.parent === this.props.parent)
    return (
      // <ul>
      //   { data.node 
      //     ? <li>
      //         <FontAwesomeIcon icon="angle-right" onClick={() => dispatch(toggleVisiable(data))}/> {data.name}
      //         { data.show ? <TreeList data={data.node}></TreeList> : null }
      //       </li> 
      //     : <li>{data.name}</li> }
      // </ul>
      <ul>
        { items.map((item, index) => {
          return <div key={item.id}>
                    <li className={item.active ? ' active': ''} onClick={this.handClick.bind(this, item)} 
                    draggable="true" id={item.id} onDragStart={(event) => this.drag(event, item)}  onDrop={this.drop.bind(this)} 
                    onDragOver={this.allowDrop}>
                      {this.props.data.filter(asd => asd.parent === item.id).length > 0 
                        ? <FontAwesomeIcon icon="angle-right" /> 
                        : null} 
                      &nbsp;{item.name}
                    </li>
                    {item.show 
                      ? <TreeList data={this.props.data} parent={item.id}></TreeList>
                      : null}
                    {(this.props.parent === 0 & items.length === index + 1) ? <div style={style} onDrop={this.drop.bind(this)} id={0} onDragOver={this.allowDrop}></div> : null}
                  </div>
        })}
      </ul>
    )
  }
}

export default connect()(Tree)