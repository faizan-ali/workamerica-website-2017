import React from 'react';
import {Router, Route} from 'react-router';
import {IndexRedirect, browserHistory} from 'react-router';

import {App} from '../containers/';
import {Home, Educators, Jobseekers, AboutUs, ContactUs, SignUp} from '../pages/';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='/home' component={Home} />
      <Route path='/educators' component={Educators} />
      <Route path='/jobseekers' component={Jobseekers} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/signup' component={SignUp} />
    </Route>
  </Router>
);
