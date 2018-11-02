//高阶函数

import React from 'react';
/*
  1
  参数： ComposeComponent（组件，也就是需要包装增强的组件---类似minxs功能）
  返回： class (一个类)
  详见 Home Component
*/
export var IntervalEnhance = ComposeComponent => class extends ComposeComponent {
  // 2
  static displayName = 'ComponentEnhancedWithIntervalHOC';

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }
  // 3
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  // 3
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1000
    });
  }

  render() {
    return (
      // 4 会把当前高阶组件的全部props和state都发送给‘需要包装增强的组件’
      <ComposeComponent {...this.props} {...this.state} />
    );
  }
}