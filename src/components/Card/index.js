import React from 'react';
import './index.css'

class Card extends React.Component {
  render() {
    let style = {
      background: `url('/image/tupuna-safari.jpg')`,
      backgroundSize: "100% 100%"
    }
    return (
      <div className="card" style={style}>
        <div>
          card
        </div>
      </div>
    )
  }
}

export default Card
