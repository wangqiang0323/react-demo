import React from 'react';

const Child = ({ match }) => (
  <div className="page-content">
    <h3>Only Yahoo/about are allowed: {match.params.id}</h3>
  </div>
);

export default Child