import React from 'react'
import ReactDOM from 'react-dom';

class ECMAScript extends React.Component {
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.ref.innerHTML)
    console.log(ReactDOM.findDOMNode(this).innerHTML)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  showHtml = () => {
    this.refs.btn.showHtml()
  }
  render() {
    return (
      <code className="hljs language-html">
        <div onClick={this.showHtml} ref={r => this.ref= r} >213123</div>
        <Child template={Template}></Child>
        <Button hello={Template} ref="btn">
          123
          <i>BUY NOW</i>
        </Button>
      </code>
    )
  }
}

class Button extends React.Component {
  showHtml = () => {
    console.log(this.ref.innerHTML)
  }
  render() {
    return (
      <code ref={r => this.ref= r} >
        {this.props.children}123{this.props.hello()}
      </code>
    )
  }
}

class Child extends React.Component {
  render() {
    return (<div>{ this.props.template( {name:  '13123123' }) }</div>)
  }
}

const Template = () => {
  return (
    <div>
      pre
    </div>
  )
}

export default ECMAScript