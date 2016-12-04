import React, { Component } from 'react';
import { Link } from 'react-router';
require('../styles/_home.scss');

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="content-wrapper">
        
          <h1>Hello World</h1>
          
          <div className="home-content-section">
            <img src="/img/eye.png" />
            <div>A few years ago, I was all set to begin optometry school. I'd spent years taking the necessary courses, exams, and interviews. I picked a school, enrolled in classes, and my wife and I were ready to move.</div>
          </div>
          
          <div className="home-content-section">
            <img className="round" src="/img/coding.jpg" />
            <div>Instead, providence landed me on the support team of a small software company. I spent years worth of early mornings, late nights, and weekends learning how to code. Eventually I could build things of value, and transitioned to the development team. I love what I do.</div>
          </div>
          
          <div className="home-content-section">
            <img src="/img/react-logo.png" />
            <div>My focus these days is on crafting memorable JavaScript-based clientside experiences, particularly with React/Redux. I'm still early in the journey, and learning a ton. #juniordevforlife</div>
          </div>

        </div>
      
        <div className="home-mountain-section">
          
          <h2 className="quote">
            “The trail is the thing, not the end of the trail. Travel too fast and you miss all you are traveling for.”
          </h2>
        
          <div className="mtn-link-wrapper mtn-link-wrapper-tl">
            <div className="mtn-link-line"></div>
            <Link className="mtn-link mtn-link-tl" to="/projects">Projects</Link>
          </div>
          
          <div className="mtn-link-wrapper mtn-link-wrapper-bl">
            <div className="mtn-link-line"></div>
            <Link className="mtn-link mtn-link-bl" to="/learning">Learning</Link>
          </div>
        
          <div className="mtn-link-wrapper mtn-link-wrapper-tr">
            <div className="mtn-link-line"></div>
            <Link className="mtn-link mtn-link-tr" to="/posts">Posts</Link>
          </div>
          
          <div className="mtn-link-wrapper mtn-link-wrapper-br">
            <div className="mtn-link-line"></div>
            <Link className="mtn-link mtn-link-br" to="/about">About</Link>
          </div>
          
        </div>
        
      </div>
    );
  }
}

