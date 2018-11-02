import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
import './index.css'

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: Loading
})

class Shop extends React.Component {
  state = {
    data: [[1,2,3,4],[5,6]]
  }

  add = (x) => {
    console.log(x + 1)
  }

  render() {
    return (
      <div className="page-content">
        <div className="flex flex-column">
          {
            this.state.data.map((d,i) => {
                return <Cards d={d} i={i} key={i} />
            })
          }
        </div>
        <button onClick={this.add(2)}>add</button>
      </div>
    )
  }
}

const Cards = ({d,i}) => (
  <div className="flex" key={i}>
      {
        d.map((s,y) =>
        {
            return <Card key={y}/>
        }
        )
      }
  </div>
)

export default Shop
