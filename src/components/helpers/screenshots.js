import React, { Component } from 'react';
import Radium from 'radium';
import styleVars from '../../../styles/variables';


export default class Screenshots extends Component {
  
  renderScreenshots() {
    
    return this.props.images.map(function(image, index){
      return (
        <div key={index} style={s.screenshotItem}>
          {/* <div style={s.divider}></div> */}
          <div style={s.caption}>{image.caption}</div>
          <img style={s.image} src={image.src} />
        </div>
      );
    });
  }
  
  render() {
      
    return(
      <div style={s.wrapper}>
        <h2 style={s.title}>Screenshots</h2>
        { this.renderScreenshots() }
      </div>
      
    );
      
  }
}

const s = {
  wrapper: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: styleVars.colors.ltBlue,
  },
  title: {
    paddingTop: '30px',
  },
  screenshotItem: {
    display: 'inline-block',
    width: '450px',
    maxWidth: '90%',
    margin: '30px',
  },
  divider: {
    width: '300px',
    height: '7px',
    borderRadius: '2px',
    backgroundColor: styleVars.colors.gray,
    margin: '30px auto 20px',
  },
  caption: {
    width: '1000px',
    maxWidth: '100%',
    textAlign: 'left',
    backgroundColor: '#CAEBF2',
    marginBottom: '8px',
    //padding: '8px 12px',
    fontSize: '18px',
    fontWeight: '400',
  },
  image: {
    display: 'block',
    //height: '400px',
    objectFit: 'cover',
    maxWidth: '100%',
    //margin: '0 auto',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.15)',
    //borderRadius: '4px',
  }
}





