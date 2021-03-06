import React, { Component } from 'react';
import axios from 'axios';
require('../styles/_about.scss');

export default class AboutPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { instagramPics: [] };
  }
  
  getInstagramPics() {
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=410514147.fa8199b.60218cf7197242f8a18387e437fd483c`)
    .then(response => {
      this.setState({ instagramPics: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    
    //this.getInstagramPics();
    
    return (
      <div className="content-wrapper">
        <h1>About</h1>
        
        <p>What initially drew me in to the world of coding was the the ability to create entire digital worlds from literally nothing. A blank text editor page can be transformed, using the mind and a few million keystrokes, into whatever digital creation can be imagined.</p>
        
        <img className="text-editor-img" src="/img/about/text-editor.gif" />
        
        <p>It’s easy to lose sight of that after you’ve been doing this work for awhile, but when you’re starting out it’s an amazing concept.</p>  

        <p>Coding allowed me to skip an expensive optometry school program, and instead teach myself (for almost free) a skill worth good money to an employer.</p>

        <p>Coding has allowed me to streamline and automate much of my real estate photography side business, and to create auxiliary products that may turn into income generating businesses of their own.</p>

        <p>And in the next stage of life, coding will be the primary force behind allowing me to imagine new, freedom-based approaches to work (remote work, freelancing, and self-employment). These could help me to do some of my best work, while also seeing more of my family, living anywhere in the world, and chasing after the goal of financial independence.</p>

        <p>I’m truly grateful. Who knows where this all will lead, but I invite you to come along for the ride.</p>

        <h3>(Personal)</h3>
        <p>When I’m not sitting (or standing) behind a computer screen, you’ll find me spending time with my family, mountain biking, geocaching, trail running, backpacking, and working on house projects. My Instagram account chronicles these adventures if you’re interested.</p>
        
      </div>
    );
  }
}