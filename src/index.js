import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import ProjectList from './components/projects/project_list';
//import ProjectView from './components/projects/project_view';
import PostList from './components/posts/post_list';
import PostView from './components/posts/post_view';

// projects
import ShowAndTour from './components/projects/_show_and_tour';
import SupportTracker from './components/projects/_support_tracker';
import Panoractives from './components/projects/_panoractives';
import MyRentWillBuy from './components/projects/_my_rent_will_buy';
import BoiseStateYL from './components/projects/_boise_state_young_life';
import BrooksideDentistry from './components/projects/_brookside_dentistry';

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="projects" component={ProjectList} />
        <Route path="projects/show-and-tour" component={ShowAndTour} />
        <Route path="projects/support-tracker" component={SupportTracker} />
        <Route path="projects/panoractives" component={Panoractives} />
        <Route path="projects/rent-buy" component={MyRentWillBuy} />
        <Route path="projects/bsu-young-life" component={BoiseStateYL} />
        <Route path="projects/brookside-dentistry" component={BrooksideDentistry} />
        <Route path="posts" component={PostList} />
        <Route path="posts/:slug" component={PostView} />
      </Route>
    </Router>
  , document.querySelector('.container'));