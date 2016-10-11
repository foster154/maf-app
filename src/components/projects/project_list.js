import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
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
        <li>{project.title}</li>
      );
    });
  }
  
  render() {
    return (
      <div style={s.contentWrapper}>
        <h1>Projects</h1>
        <ul>
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

export default Radium(ProjectList);

const s = {

}















