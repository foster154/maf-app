import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

class BrooksideDentistry extends Component {
  
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <h1>Brookside Dentistry</h1>
          
          <p>A website for an award winning dental office in St. Louis Park, Minnesota.</p>

          <p>For many people, going the dentist isn't their <em>favorite</em> activity. We focused this project on feeling warm and inviting, to help begin the process of putting patients at ease. Given Brookside Dentistry's outstanding track record, we also wanted to prominently feature their recent awards and BBB rating.</p>

          <p>Other than presenting the office well, the other practical benefit of the site is a way for patients to quickly and easy acquire the necessary forms. This was built in, as well as an easily-updated blog to keep patients informed.</p>

          <p>Key technical aspects of the project:</p>
          
          <ul>
          	<li>Exploration and implementation of site objectives and goals</li>
          	<li><span class="s1">WordPress site creation, including customized theme work</span></li>
          </ul>
          
          <ProjectLinks 
            liveUrl="http://www.brookside-dentistry.com"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/brookside/ss01.jpg', 
                caption: ''
              }
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(BrooksideDentistry);