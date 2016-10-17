import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

export default class BoiseStateYL extends Component {
  
  render() {
    return (
      <div style={s.wrapper}>
        <div className="content-wrapper">
          <h1>Boise State Young Life</h1>
          <p>Boise State Young Life is a thriving college ministry. They were in need of a clean, friendly site to engage donors and get information to students. Other requirements included it being easy to update and maintain, and to be flexible for ongoing (and unforeseen) needs. </p>
          <p>This WordPress site does just that. Rather than starting from scratch, we adapted an existing theme to help speed up the development process and reduce cost. Updates to the site are easy to make (even by those with no coding experience), and new pages for announcing events and fundraisers can be added easily. And though the use of a child theme, I am able to make ongoing customizations to their theme while still allow theme updates to happen without a hitch.</p>
          Key technical aspects of the project:
          <ul>
          	<li>Exploration and implementation of site objectives and goals</li>
          	<li>WordPress site creation, including customized child theme</li>
          </ul>
          
          <ProjectLinks 
            liveUrl="http://www.boisestateyounglife.org"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/bsu-young-life/ss01.jpg', 
                caption: 'Front Page'
              },
              {
                src: '/img/projects/bsu-young-life/ss02.jpg', 
                caption: 'Events Page'
              },
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(BoiseStateYL);

const s = {
  wrapper: {
    //marginBottom: '30px',
  },
  logo: {
    float: 'left',
  }
}