import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return (
      <header className='container-fluid fixed-navigation'>
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
        <div className='row mainnav justify-content-center'>
          <nav className='col-sm-10 col-xl-9 d-flex align-items-center justify-content-between justify-content-md-start'>
            <img src='static/svg/logo.svg' alt='WorkAmerica' className='logo' />
            <ul className='nav navbar-nav hidden-sm-down flex-row'>
              <li className='nav-item' id='employers-nav'>
                <Link to='/' className='nav-link'>Employers</Link>
              </li>
              <li className='nav-item' id='educators-nav'>
                <Link to='/educators' className='nav-link'>Educators</Link>
              </li>
              <li className='nav-item' id='jobseekers-nav'>
                <Link to='/jobseekers' className='nav-link'>Job Seekers</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Navigation;
