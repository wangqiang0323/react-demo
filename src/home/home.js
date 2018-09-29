import React from 'react';
import Tabs from './../Tabs/Tabs.js'

const data = {
  points: {
    total: [
      { id: 1, name: 'tab-1', text: 'text' },
      { id: 2, name: 'tab-2', text: 'text-2' },
      { id: 3, name: 'tab-3', text: 'text-2' }
    ]
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="page-content">
        <h2>Home1</h2>
        <Tabs data={ data } />
      </div>
    );
  }
}

export default Home;
