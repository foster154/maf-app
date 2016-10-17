import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

export default class SupportTracker extends Component {
  
  render() {
    return (
      <div style={s.wrapper}>
        <div className="content-wrapper">
          <h1>Support Tracker</h1>
          <p><img style={s.img} src="/img/projects/support-tracker/logo.jpg" alt="Support Tracker logo" />Support Tracker is a Ruby on Rails web app used to track support cases and follow up tasks.</p>
          <p>I currently manage the support team at a local software company, and we needed a better tool for tracking cases, followups and metrics as the support team grew. There were some great help desk solutions available, but none quite fit the system we had already evolved and loved (particularly with tracking phone-based support cases).</p>
          <p>This was a fantastic project for continuing to build and hone my front-end and Rails chops… it had instant users and provided real-life value right out of the gates.</p>
          <p>Key technical aspects of the project:</p>

          <ul>
          	<li>Ruby on Rails framework</li>
          	<li>database design and implementation with PostgreSQL</li>
          	<li>front-end implementation with Bootstrap</li>
          </ul>
          
          <ProjectLinks 
            codeUrl="https://github.com/foster154/support_tracker"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/support-tracker/ss01.jpg', 
                caption: 'Dashboard. View the day\'s cases & stats, as well as quickly create new cases and navigate to see past days.'
              },
              {
                src: '/img/projects/support-tracker/ss02.jpg', 
                caption: 'Metrics: Calendar showing number of cases and minutes by day, as well as weekly totals.'
              },
              {
                src: '/img/projects/support-tracker/ss03.jpg', 
                caption: 'Metrics: Number of cases by tags, as well as month over month differences for spotting trends.'
              },
              {
                src: '/img/projects/support-tracker/ss04.jpg', 
                caption: 'Creating a new case, including on-the-spot customer creation, tags, and followup reminders.'
              },
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(SupportTracker);

const s = {
  wrapper: {
    //marginBottom: '30px',
  },
  img: {
    float: 'left',
    width: '300px',
    marginRight: '10px',
  }
}