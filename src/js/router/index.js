import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import {IndexRedirect, browserHistory} from 'react-router';

import {App} from '../containers/';
import {Home, Educators, Jobseekers, AboutUs, ContactUs, SignUp} from '../pages/';

import ReactGA from 'react-ga';

ReactGA.initialize(`UA-38337436-1`);

function trackPageForGoogle() {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

export default (
  <Router onUpdate={trackPageForGoogle} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='/home' component={Home} />
      <Route path='/educators' component={Educators} />
      <Route path='/jobseekers' component={Jobseekers} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/signup' component={SignUp} />
    </Route>
    <Redirect from='*' to='/home' />
  </Router>
);
