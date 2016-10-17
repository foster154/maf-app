import React, { Component } from 'react';
import Radium from 'radium';
import Screenshots from '../helpers/screenshots';
import ProjectLinks from '../helpers/project_links';

export default class ShowAndTour extends Component {
  
  render() {
    return (
      <div style={s.wrapper}>
        <div className="content-wrapper">
          <h1>Show and Tour</h1>
          <img style={s.logo} src="/img/projects/show-and-tour/logo.png" alt="Show and Tour logo" />Show &amp; Tour is a virtual tour creation tool for independent real estate photographers.

          <p>Photographers can log in, create a new tour, enter the home’s information, upload photos, and choose a tour theme. There are also various other settings and features, including lead capture forms, photo credits, and more. This virtual tour can then be sold or given to the real estate agent listing the home for marketing purposes.</p>

          <p>I began work on Show &amp; Tour in March of 2014. It has served as an excellent sample project to flesh out many of the web development skills I’d been gaining from studying online resources. I needed a sandbox to put concepts into practice, and Show &amp; Tour was just that.</p>

          <strong>Key technical aspects of the project:</strong>
          <ul>
            <li>Built with Ruby on Rails (and Bootstrap)</li>
            <li>database design and implementation with PostgreSQL</li>
            <li>integration with Stripe for payment processing (subscription and per tour options)</li>
            <li>CSS &amp; JS management of multiple active themes (for sales pages &amp; tour theme options)</li>
            <li>intuitive tour creation with user-friendly design</li>
            <li>multiple, simultaneous image uploads and processing, done via a background process</li>
            <li>cookie-based lead generation modals with optional email notifications</li>
          </ul>
          
          <ProjectLinks 
            liveUrl="http://www.showandtour.com"
            codeUrl="https://github.com/foster154/tour_app"
          />
          
        </div>
        
        <Screenshots 
          images={
            [
              {
                src: '/img/projects/show-and-tour/ss01.jpg', 
                caption: 'Front page. Uses Bootstrap framework with customized version of "React" theme.'
              },
              {
                src: '/img/projects/show-and-tour/ss02.jpg', 
                caption: 'A sample tour, which is a single page site displaying all the uploaded images, details and location of the home.'
              },
              {
                src: '/img/projects/show-and-tour/ss03.jpg', 
                caption: 'Another sample tour, using an alternate theme that can be selected by the user during page creation.'
              },
              {
                src: '/img/projects/show-and-tour/ss04.jpg', 
                caption: 'The user\'s dashboard that is seen upon login. It shows the 5 most recently created home tours, with quick links for viewing or editing. This is integrated with Stripe Checkout if the user needs to puchase a new tour.'
              },
              {
                src: '/img/projects/show-and-tour/ss05.jpg', 
                caption: 'The interface for creating and editing a home tour page. Photos are uploaded and hosted using Amazon S3.'
              },
            ]
          }
        />
      
      </div>
    );
  }
};

export default Radium(ShowAndTour);

const s = {
  wrapper: {
    //marginBottom: '30px',
  },
  logo: {
    float: 'left',
  }
}