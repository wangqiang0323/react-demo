import React from 'react';
import Tabs from './../../components/Tabs'
import { IntervalEnhance } from '../../minxs/IntervalEnhance';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.css'
import Data from '../../data'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const Carousel = Loadable({
  loader: () =>
    import('../../components/Carousel'),
  loading: Loading
})

const Upload = Loadable({
  loader: () =>
    import('../../components/Upload'),
  loading: Loading
})


class Home extends React.Component {
  state = {
    items: Data.points.total,
    images: ['https://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/bd/tupuna-safari.jpg',
      'https://goss2.vcg.com/creative/vcg/800/version23/VCG41157533306.jpg'
    ]
  }

  handleAdd() {
    const newItems = this.state.items.concat([{ id: Symbol('id'), name: prompt('Enter some text'), text: 'text' }, ]);
    this.setState({ items: newItems });
  }


  render() {
    return (
      <div className="page-content">
        <ReactCSSTransitionGroup className="navigation" transitionAppear={true}
      transitionAppearTimeout={500} transitionName="tab" transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
        <h2 >Home1</h2>
        </ReactCSSTransitionGroup>
        <strong>Time elapsed for interval: </strong>
        {this.props.seconds} ms
        <Tabs data={ this.state.items } handleAdd={this.handleAdd.bind(this)}/>
        <button onClick = { this.handleAdd.bind(this) } > Add Item </button>
        {this.props.children}
        <Carousel images={this.state.images}/>
        <Upload btnText="上传" className="upload"></Upload>
      </div>
    );
  }
}

export default IntervalEnhance(Home);
