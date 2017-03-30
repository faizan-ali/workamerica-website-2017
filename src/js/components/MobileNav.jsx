/**
  * Creates the navigation for mobile devices
  * @exports MobileNav Renders the Mobile Navigation.
 */

import React from 'react';
import {Link} from 'react-router';

export default class MobileNav extends React.Component {

  constructor(props, context) {
    super(props, context);
    /**
     * @type {object}
     * @property {boolean} showNav Boolean to that manages toggle state of the mobile nav.
     */
    this.state = {
      showNav: false
    };
  }

  /**
    * Handle Mobile navigation toggle event
   */
  handleToggleNav = () => {
    if (this.state.showNav) {
      this.setState({showNav: false});
    } else {
      this.setState({showNav: true});
    }
  }

  render() {
    return (
        <div className='fixed-navigation'>
          <div className='row topnav justify-content-center'>
            <nav className='col-sm-10 col-xl-9 d-flex align-items-center'>
              <ul className='col d-flex justify-content-end align-items-center'>
                <li><Link to='/about-us'>About us</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
                <li><a href='http://blog.workamerica.co/'>Blog</a></li>
                <li className='topnav-login'><a href='https://secure.workamerica.co'>Login</a></li>
              </ul>
            </nav>
          </div>
          <header className='d-flex justify-content-between align-items-center mobile-header'>
            <div className='flex-column'>
              <img src='static/svg/logo.svg' alt='WorkAmerica' className='logo' />
            </div>
            {this.state.showNav ?
              <i className='fa fa-bars active' aria-hidden='true' onClick={this.handleToggleNav}></i>
              :
              <i className='fa fa-bars' aria-hidden='true' onClick={this.handleToggleNav}></i>
            }
          </header>
          {this.state.showNav ?
          <nav className='mobile-nav'>
            <ul>
              <li>
                <Link to='/' className='nav-link' onClick={this.handleToggleNav}>Employers</Link>
              </li>
              <li>
                <Link to='/educators' className='nav-link' onClick={this.handleToggleNav}>Educators</Link>
              </li>
              <li>
                <Link to='/jobseekers' className='nav-link' onClick={this.handleToggleNav}>Job Seekers</Link>
              </li>
            </ul>
          </nav>
          : ``}
        </div>
    );
  }
}
