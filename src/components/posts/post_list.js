import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);
import { API_URL } from '../../../constants.js';
import styleVars from '../../../styles/variables';

class PostList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { posts: [] }
    this.getPosts = this.getPosts.bind(this);
  }
  
  componentWillMount() {
    this.getPosts();
  }
  
  getPosts() {
    axios.get(`${API_URL}/posts`)
    .then(response => {
      this.setState({ posts: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  renderPosts() {
    return this.state.posts.map(function(post) {
      return (
        <li key={post._id} style={s.post}>
          <Link to={`/posts/${post.slug}`} >
            <h2 style={s.postTitle}>{post.title}</h2>
          </Link>
          <div>
            <img src="http://lorempixel.com/140/100/" style={s.postImage} />
            <div style={s.postSummary}>
              { post.summary }
            </div>
          </div>
          <div style={s.readMoreLink}>
            <Link to={`/posts/${post.slug}`} >
              READ MORE
            </Link>
          </div>


        </li>
      );
    });
  }
  
  render() {
    return (
      <div className="content-wrapper">
        <h1>Posts</h1>
        <ul style={s.postList}>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default Radium(PostList);

const s = {
  postList: {
    listStyle: 'none',
    padding: '0',
  },
  post: {
    clear: 'both',
  },
  postTitle: {
    marginBottom: '5px',
    color: '#2b2b2b',
    transition: 'color .3s',
    ':hover': {
      color: styleVars.colors.red,
    }
  },
  postImage: {
    float: 'left',
  },
  postSummary: {
    display: 'block',
    width: '77%',
    float: 'right',
  },
  readMoreLink: {
    clear: 'both',
    textAlign: 'right',
  },
}















