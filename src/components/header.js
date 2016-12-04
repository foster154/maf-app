import React, { Component } from 'react';
import { Link } from 'react-router';
require('../styles/_header.scss');


export default class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src="/img/logo.png" />
        <nav style={s.nav}>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/about">About</Link>
          <Link className="nav-item" to="/projects">Projects</Link>
          <Link className="nav-item" to="/learning">Learning</Link>
          <Link className="nav-item" to="/posts">Posts</Link>
        </nav>
      </header>
    );
  }
}