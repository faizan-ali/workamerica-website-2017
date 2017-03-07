import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className='container-fluid fixed-navigation'>
    <div className='row topnav justify-content-center'>
      <nav className='col-sm-10 col-xl-9 d-flex align-items-center'>
        <ul className='col d-flex justify-content-end align-items-center'>
          <li><Link href='/about-us'><a>About us</a></Link></li>
          <li><Link href='/contact-us'><a>Contact us</a></Link></li>
          <li><a href='http://blog.workamerica.co/'>Blog</a></li>
          <li className='topnav-login'><a href='https://secure.workamerica.co'>Login</a></li>
        </ul>
      </nav>
    </div>
    <div className='row mainnav justify-content-center'>
      <nav className='col-sm-10 col-xl-9 d-flex align-items-center justify-content-between justify-content-md-start'>
        <img src='static/svg/logo.svg' alt='WorkAmerica' className='logo' />
        <ul className='nav navbar-nav hidden-sm-down flex-row'>
          <li className='nav-item nav-active'>
            <Link href='/'><a className='nav-link'>Employers</a></Link>
          </li>
          <li className='nav-item'>
            <Link href='/educators'><a className='nav-link'>Educators</a></Link>
          </li>
          <li className='nav-item'>
            <Link href='/jobseekers'><a className='nav-link'>Job Seekers</a></Link>
          </li>
        </ul>
        <ul className='nav navbar-nav hidden-md-up'>
          <li className='nav-item dropdown'>
            <a data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              <i aria-hidden='true' className='fa fa-bars'></i>
            </a>
            <div className='dropdown-menu dropdown-menu-right'>
              <button className='dropdown-item' type='button'>Employers</button>
              <button className='dropdown-item' type='button'>Educators</button>
              <button className='dropdown-item' type='button'>Job Seekers</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Navigation;
