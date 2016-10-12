import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import { API_URL } from '../../../constants.js';

class ProjectView extends Component {
  
  constructor(props) {
    super(props);
    this.state = { project: {} };
    this.getProject = this.getProject.bind(this);
  }
  
  componentWillMount() {
    this.getProject();
  }
  
  getProject() {
    const slug = this.props.routeParams.slug;
    axios.get(`${API_URL}/projects/${slug}`)
    .then(response => {
      this.setState({ project: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
  render() {
    
    const project = this.state.project;
    
    return (
      <div>
        <h1>{project.title}</h1>
        <div
          className="content-wrapper"
          dangerouslySetInnerHTML={{__html: project.body}}></div>
      </div>
    );
  }
}

export default Radium(ProjectView);