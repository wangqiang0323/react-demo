import React from 'react'

class Shop extends React.Component {
  add = (x) => {
    console.log(x + 1)
  }

  render() {
    return (
      <div>
        shop
        <button onClick={this.add(2)}>add</button>
      </div>
    )
  }
}

export default Shop