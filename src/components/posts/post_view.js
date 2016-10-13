import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import { API_URL } from '../../../constants.js';

class PostView extends Component {
  
  constructor(props) {
    super(props);
    this.state = { post: {} };
    this.getPost = this.getPost.bind(this);
  }
  
  componentWillMount() {
    this.getPost();
  }
  
  getPost() {
    const slug = this.props.routeParams.slug;
    axios.get(`${API_URL}/posts/${slug}`)
    .then(response => {
      this.setState({ post: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
  render() {
    
    const post = this.state.post;
    
    return (
      <div>
        <h1>{post.title}</h1>
        <div
          className="content-wrapper"
          dangerouslySetInnerHTML={{__html: post.body}}></div>
      </div>
    );
  }
}

export default Radium(PostView);