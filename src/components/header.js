import React, { Component } from 'react';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import styleVars from '../../styles/variables';


class Header extends Component {
  render() {
    return (
      <header style={s.header}>
        <img style={s.headerLogo} src="/img/logo.png" />
        <nav style={s.nav}>
          <Link style={s.navItem} to="/">Home</Link>
          <Link style={s.navItem} to="/about">About</Link>
          <Link style={s.navItem} to="/projects">Projects</Link>
          <Link style={s.navItem} to="/posts">Posts</Link>
        </nav>
      </header>
    );
  }
}

export default Radium(Header);

const s = {
  headerLogo: {
    display: 'block',
    margin: '30px auto',
    width: '400px',
    maxWidth: '90%',
  },
  nav: {
    height: '50px',
    borderTop: '1px solid #DCDBDB',
    borderBottom: '1px solid #DCDBDB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: styleVars.colors.ltGray,
  },
  navItem: {
    display: 'block',
    color: '#303030',
    alignSelf: 'center',
    margin: '0 26px',
    fontWeight: '300',
    textTransform: 'uppercase',
    fontSize: '18px',
    border: 'none',
    transition: 'color .3s',
    ':hover': {
      color: 'red',
    },
    '@media (max-width: 440px)': {
      margin: '0 10px',
    }
  },
}