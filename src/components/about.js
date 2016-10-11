import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div style={s.contentWrapper}>
        <h1>About</h1>
        
        <p>I stumbled across a love for web development inadvertently.</p>

<p>My real goal at the time was to create my first business. I was all set to begin optometry school in a few months, and in the meantime a friend and I wanted to start a business together. We picked a business from a list of potentials in Entrepreneur magazine (how every successful business is started!), and got to work.</p>

<p>Nothing much came of the business itself (though it does still exist), but I credit it with starting me down this path. My favorite parts of the work we did were the rudimentary coding, and I haven’t looked back since. I ended up cancelling my optometry school enrollment and took a job with the support team of a small web-based SaaS company.</p>

<p>Since then, I’ve spent ridiculous amounts of time working through online resources, building side projects, and slowing taking on more and more development projects at my full time job.</p>

<p>My hope is to use this site to display some of the projects I’ve worked on, convey what I am learning, and to connect with others who are on a similar journey.</p>

<p>Bon voyage!</p>

<h3>(Personal)</h3>
<p>When I’m not in front of my computer, you’ll find me spending time with my wonderful wife and daughter, completing the latest home improvement or woodworking project, and geocaching in the vast Idaho wilderness.</p>
        
      </div>
    );
  }
}

const s = {
  contentWrapper: {
    width: '700px',
    maxWidth: '90%',
    margin: '0 auto 60px',
  }
}