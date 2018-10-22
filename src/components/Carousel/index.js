import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

class Carousel extends React.Component {
  state = {
    indexImg: 0
  }

  prevImage = () => {
    if (this.state.indexImg === 0) return
    this.setState({ indexImg: (this.state.indexImg - 1) })
  }

  nextImage = () => {
    if (this.state.indexImg + 1 === this.props.images.length) return
    this.setState({ indexImg: this.state.indexImg + 1 })
  }

  render() {
    return (
      <div className="carousel">
        <div className="col-left">

        </div>
        <div className="col-center">
          <div className="icon left"  onClick={this.prevImage}>
            <FontAwesomeIcon icon="angle-left" size="lg"/>
          </div>
          <ImageCarousel imageSrc={this.props.images[this.state.indexImg]} />
          <div className="icon right"  onClick={this.nextImage}>
            <FontAwesomeIcon icon="angle-right" size="lg"/>
          </div>
        </div>
        <div className="col-right">

        </div>
      </div>
    )
  }
}

class ImageCarousel extends React.Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} alt={this.props.imageSrc}/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Carousel