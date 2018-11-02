import React from 'react';
import Tabs from '../../components/Tabs'
import { IntervalEnhance } from './IntervalEnhance';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Home.css'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
import { connect } from 'react-redux'
import { addItem, initCarousel } from '../../actions'

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

const Panel = Loadable({
  loader: () =>
    import('../../components/Panel'),
  loading: Loading
})

const Datetime = Loadable({
  loader: () =>
    import('../../components/Datetime'),
  loading: Loading
})

const Todos = Loadable({
  loader: () =>
    import('../../components/Todos'),
  loading: Loading
})

let input

class Home extends React.Component {
  
  componentDidMount () {
    this.props.initCarousel()
  }

  render() {
    return (
      <div className="page-content">
        <Panel title="Tab" footer="footer">
          <Tabs data={ this.props.items }/>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.addItem(input.value)
            input.value = ''
          }}>
            <input ref={node => input = node} />
            <button type="submit">
              Add Items
            </button>
          </form>
        </Panel>
        <Panel title="ReactCSSTransitionGroup" footer="footer">
          <ReactCSSTransitionGroup className="navigation" transitionAppear={true}
          transitionAppearTimeout={500} transitionName="tab" transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
          <h2 >Home1</h2>
          </ReactCSSTransitionGroup>
        </Panel>
        <Panel title="Minxs" footer="footer">
          <strong>Time elapsed for interval: </strong>
          {this.props.seconds} ms
        </Panel>
        <Panel title="Carousel" footer="footer">
          <Carousel images={this.props.carouselImages}/>
        </Panel>
        <Panel title="Upload" footer="footer">
          <Upload btnText="上传" className="upload"></Upload>
        </Panel>
        <Panel title="Datetime" footer="footer">
          <Datetime></Datetime>
        </Panel>
        <Panel title="Todos" footer="footer">
          <Todos></Todos>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.tabItems,
    carouselImages: state.carouselImages
  }
}

export default connect(mapStateToProps,{
  initCarousel,
  addItem
})(IntervalEnhance(Home))