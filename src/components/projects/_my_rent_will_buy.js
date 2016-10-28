import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

class MyRentWillBuy extends Component {
  
  render() {
    return (
      <div style={s.wrapper}>
        <div className="content-wrapper">
          <h1>My Rent Will Buy</h1>

          <p>My Rent Will Buy is a web app geared toward toward helping potential home buyers quickly learn how much they may be able to qualify for. By answering a few simple questions, they get a quick estimate, as well the information of a local mortgage officer.</p>
          <p><img src="/img/projects/rentbuy/logo.jpg" alt="portfolio-logo-rentbuy" style={s.img} />This database-backed Ruby on Rails web app can be used to help generate leads for real estate agents and mortgage lenders, and allows for a large amount of customization in regards to automatic followup emails, lead notifications, and more.</p>
          <p>Key technical aspects of the project:</p>

          <ul>
          	<li>built with Ruby on Rails</li>
          	<li>database design and implementation with PostgreSQL</li>
          	<li>front-end implementation with Bootstrap 3 and SASS</li>
          	<li>customizable email templates for lead notifications and followups</li>
          </ul>
          
          <ProjectLinks 
            liveUrl="http://www.myrentwillbuy.com"
            codeUrl="https://github.com/foster154/rentbuy"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/rentbuy/ss01.jpg', 
                caption: 'Front page. Uses Bootstrap framework with customized version of "React" theme.'
              },
              {
                src: '/img/projects/rentbuy/ss02.jpg', 
                caption: 'A sample tour, which is a single page site displaying all the uploaded images, details and location of the home.'
              },
              {
                src: '/img/projects/rentbuy/ss03.jpg', 
                caption: 'Another sample tour, using an alternate theme that can be selected by the user during page creation.'
              },
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(MyRentWillBuy);

const s = {
  img: {
    width: '300px', 
    float: 'right', 
    margin: '0 0 3px 20px',
  }
}