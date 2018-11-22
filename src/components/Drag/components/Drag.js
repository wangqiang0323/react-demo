import React from 'react'
import { connect } from 'react-redux'
class Drag extends React.Component {
  allowDrop(ev){
    ev.preventDefault();
  };

  drag(ev){
    console.log(ev)
    ev.dataTransfer.setData("Text",ev.target.id);
  }

  drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }

  render () {
    return (
      <div>
        <p>请把 W3School 的图片拖放到矩形中：</p>

        <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
        <br />
        <div id="drag1" src="/image/mountain.jpg" draggable="true" onDragStart={this.drag} alt="" >
          <p>123123</p>
          <p>asdasd</p>
        </div>
      </div>
    )
  }
}

export default connect()(Drag)