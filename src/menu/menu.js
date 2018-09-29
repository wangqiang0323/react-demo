import React from 'react';
import './../App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './../home/home.js'
import Login from './../Login/Login.js'
import ModalGallery from './../ModalGallery/ModalGallery.js'
import Topics from './../Topics/Topics.js'
import {PrivateRoute} from './../PrivateRoute.js'

class Menu extends React.Component {
  render() {
    return (
      <Router>
        <div className="App-content">
          <div className="App-menu">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/topics">Topics</NavLink>
              </li>
              <li>
                <NavLink to="/Yahoo">Yahoo</NavLink>
              </li>
              <li>
                <NavLink to="/modal-gallery">ModalGallery</NavLink>
              </li>
            </ul>
          </div>
          <div className="App-body">
            <PrivateRoute strict path="/home" component={Home} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/modal-gallery" component={ModalGallery} />
            <PrivateRoute path="/topics" component={Topics} />
            <Route path="/:id(Yahoo|about)" component={Child} />
          </div>
        </div>
      </Router>
    )
  }
}

const Child = ({ match }) => (
  <div className="page-content">
    <h3>Only Yahoo/about are allowed: {match.params.id}</h3>
  </div>
);

const About = () => (
  <div className="page-content">
    <h2>About</h2>
  </div>
);

export default Menu;
