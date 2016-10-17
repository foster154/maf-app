import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import { API_URL } from '../../../constants.js';

class ProjectList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { projects: [] }
    this.getProjects = this.getProjects.bind(this);
  }
  
  componentWillMount() {
    this.getProjects();
  }
  
  getProjects() {
    axios.get(`${API_URL}/projects`)
    .then(response => {
      this.setState({ projects: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  renderProjects() {
    return this.state.projects.map(function(project) {
      return (
        <li key={project._id}>
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















