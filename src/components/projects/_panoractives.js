import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

export default class Panoractives extends Component {
  
  render() {
    return (
      <div style={s.wrapper}>
        <div className="content-wrapper">
          <h1>Panoractives</h1>

          <p>Panoractives is a real estate photography and 3D virtual tour provider.</p>
          <p>We pride ourselves on our gorgeous photography, fantastic service, and use of the latest imaging technology. We work hard to continually innovate the concept of the virtual tour, using 3D walkthrough and video technology perfect for real estate agents wanting an impressive web presence for their listings.</p>
          <p>As co-founder, I've done all web development work, pioneered new combinations of photography and web development tools for product creation, as well as head our marketing efforts.</p>
          <p>Key technical aspects of the project:</p>

          <ul>
          	<li>WordPress site creation, including customized child theme</li>
          	<li>virtual tour theme creation, including integration with maps, photo galleries, and 360º panoramas</li>
          	<li>custom scripting to automate photo processing workflow</li>
          	<li>Google analytics and SEO management</li>
          </ul>
          
          <ProjectLinks 
            liveUrl="http://www.panoractives.com"
            codeUrl="https://github.com/foster154/panoractives"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/panoractives/ss01.jpg', 
                caption: 'Front page. Built with WordPress, using a customized child theme.'
              },
              {
                src: '/img/projects/panoractives/ss02.jpg', 
                caption: 'The photography page, displaying some of our recent work and conveying the value we provide.'
              },
              {
                src: '/img/projects/panoractives/ss03.jpg', 
                caption: 'A sample virtual tour page, which displays a navigable 360 x 180 degree panorama scene.'
              },
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(Panoractives);

const s = {
  wrapper: {
    //marginBottom: '30px',
  },
  logo: {
    float: 'left',
  }
}