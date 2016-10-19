import React, { Component } from 'react';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import styleVars from '../../styles/variables';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="content-wrapper" style={s.wrapper}>
        
          <h1>Hello World</h1>
          
          <div style={s.section}>
            <img style={s.eyeImg} src="/img/eye.png" />
            <p style={s.text}>A few years ago, I was all set to begin optometry school. I'd spent years taking the necessary courses, exams, and interviews. I picked a school, enrolled in classes, and my wife and I were ready to move.</p>
          </div>
          
          <div style={s.section}>
          <img style={s.codingImg} src="/img/coding.jpg" />
            <p style={s.text}>Instead, providence landed me on the support team of a small software company. I spent years worth of early mornings, late nights, and weekends learning how to code. Eventually I could build things of value, and transitioned to the development team. I love what I do.</p>
            
          </div>
          
          <div style={s.section}>
            <img style={s.reactImg} src="/img/react-logo.png" />
            <p style={s.text}>My focus these days is on crafting memorable JavaScript-based clientside experiences, particularly with React/Redux. I'm still early in the journey, and learning a ton. #juniordevforlife</p>
          </div>

        </div>
      
        <div style={s.mountainSection}>
          
          <h2 style={s.trailQuote}>
            “The trail is the thing, not the end of the trail. Travel too fast and you miss all you are traveling for.”
          </h2>
        
          <div style={{...s.mtnLinkWrapper,...s.mtnLinkWrapperTL}}>
            <div style={s.mtnLinkLine}></div>
            <Link to="/projects" style={{...s.mtnLink,...s.mtnLinkTL}}>Projects</Link>
          </div>
          
          <div style={{...s.mtnLinkWrapper,...s.mtnLinkWrapperBL}}>
            <div style={s.mtnLinkLine}></div>
            <Link to="/learning" style={{...s.mtnLink,...s.mtnLinkBL}}>Learning</Link>
          </div>
        
          <div style={{...s.mtnLinkWrapper,...s.mtnLinkWrapperTR}}>
            <div style={s.mtnLinkLine}></div>
            <Link to="/posts" style={{...s.mtnLink,...s.mtnLinkTR}}>Posts</Link>
          </div>
          
          <div style={{...s.mtnLinkWrapper,...s.mtnLinkWrapperBR}}>
            <div style={s.mtnLinkLine}></div>
            <Link to="/about" style={{...s.mtnLink,...s.mtnLinkBR}}>About</Link>
          </div>
          
        </div>
        
      </div>
      
      
      
    );
  }
}


const s = {
  wrapper: {
    
  },
  section: {
    display: 'flex',
    marginBottom: '30px',
    backgroundColor: styleVars.colors.ltBlue,
    padding: '20px',
    borderRadius: '5px',
  },
  text: {
    alignSelf: 'center',
  },
  eyeImg: {
    alignSelf: 'center',
    marginRight: '30px',
    marginLeft: '-98px',
    height: '156px',
  },
  codingImg: {
    alignSelf: 'center',
    marginRight: '30px',
    height: '156px',
    borderRadius: '50%',
    marginLeft: '-102px',
  },
  reactImg: {
    alignSelf: 'center',
    marginRight: '30px',
    height: '166px',
    marginLeft: '-102px',
  },
  mountainSection: {
    marginTop: '100px',
    backgroundImage: 'url("img/path.jpg")',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    marginBottom: '30px',
  },
  trailQuote: {
    textAlign: 'center',
    color: 'white',
    padding: '30px',
    fontSize: '24px',
  },
  
  // Mtn Link Shared
  mtnLinkWrapper: {
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
  },
  mtnLinkLine: {
    position: 'absolute',
    width: '100%',
    height: '4px',
    backgroundColor: styleVars.colors.red,
    top: '50%',
    zIndex: '0',
    borderRadius: '15px',
  },
  mtnLink: {
    color: 'white',
    display: 'inline-block',
    padding: '24px',
    backgroundColor: styleVars.colors.red,
    fontSize: '36px',
    zIndex: '10000',
    borderRadius: '4px',
    '@media (max-width: 1000px)': {
      padding: '22px',
      fontSize: '28px',
    },
    '@media (max-width: 800px)': {
      padding: '18px',
      fontSize: '22px',
    },
    '@media (max-width: 640px)': {
      padding: '20px',
      fontSize: '24px',
    }
  },
  
  // Mtn Link: Top Left
  mtnLinkWrapperTL: {
    right: '50%',
    bottom: '100px',
    width: '20%',
    textAlign: 'left',
    transform: 'skewY(15deg)',
  },
  mtnLinkTL: {
    transform: 'skewY(-15deg)',
  },
  
  // Mtn Link: Top Right
  mtnLinkWrapperTR: {
    left: '50%',
    bottom: '73px',
    width: '20%',
    textAlign: 'right',
    transform: 'skewY(-15deg)',
  },
  mtnLinkTR: {
    transform: 'skewY(15deg)',
  },
  
  // Mtn Link: Bottom Left
  mtnLinkWrapperBL: {
    right: '50%',
    bottom: '34px',
    width: '40%',
    textAlign: 'left',
    transform: 'skewY(5deg)',
  },
  mtnLinkBL: {
    transform: 'skewY(-5deg)',
  },
  
  // Mtn Link: Bottom Right
  mtnLinkWrapperBR: {
    left: '50%',
    bottom: '7px',
    width: '40%',
    textAlign: 'right',
    transform: 'skewY(-5deg)',
  },
  mtnLinkBR: {
    transform: 'skewY(5deg)',
  },
  
}