import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import { API_URL } from '../../../constants.js';

class ProjectList extends Component {
  
  renderProjects() {
    
    const projects = [
      {
        "title" : "Show and Tour",
        "slug" : "show-and-tour",
        "coverImage" : "showandtour.jpg",
        "summary" : "A virtual tour creation web app geared toward real estate photographers.",
      },
      {
        "title" : "Support Tracker",
        "slug" : "support-tracker",
        "coverImage" : "supporttracker.jpg",
        "summary" : "A support ticket and case management web app, including followups and metrics.",
      },
      {
        "title" : "Panoractives",
        "slug" : "panoractives",
        "coverImage" : "panoractives.jpg",
        "summary" : "A real estate photography and virtual tour provider.",
      },
      {
        "title" : "My Rent Will Buy",
        "slug" : "rent-buy",
        "coverImage" : "rentbuy.jpg",
        "summary" : "An online lead generation tool for real estate agents.",
      },
      {
        "title" : "Boise State Young Life",
        "slug" : "bsu-young-life",
        "coverImage" : "bsuyounglife.jpg",
        "summary" : "A website for a thriving college ministry.",
      },
      {
        "title" : "Brookside Dentistry",
        "slug" : "brookside-dentistry",
        "coverImage" : "brookside.jpg",
        "summary" : "A website for an award-winning dental office.",
      },
    ];
    
    return projects.map(function(project, index) {
      return (
        <li key={index}>
          <h2 style={s.projectTitle}>{project.title}</h2>
          <Link to={`/projects/${project.slug}`}>
            <div style={s.projectWrapper}>
              <img 
                src={`/img/project-covers/${project.coverImage}`} 
                style={s.coverImage} />
              <div style={s.summary}>
                {project.summary}
              </div>
            </div>
          </Link>

        </li>
      );
    });
  }
  
  render() {
    return (
      <div className="content-wrapper">
        <h1>Projects</h1>
        <ul style={s.projectList}>
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

export default Radium(ProjectList);

const s = {
  projectList: {
    listStyle: 'none',
    padding: '0',
  },
  projectWrapper: {
    border: '1px solid #ccc', 
    borderRadius: '4px',
    ':hover': {
      boxShadow: '0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)',
    }
  },
  projectTitle: {
    marginBottom: '2px',
  },
  coverImage: {
    width: '100%',
  },
  summary: {
    color: '#2b2b2b',
    margin: '10px 18px 15px',
  }
}















