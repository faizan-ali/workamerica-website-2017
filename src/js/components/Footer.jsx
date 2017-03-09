import React from 'react';
import {Link} from 'react-router';

const Footer = () => {
  return (
    <footer className='d-flex container-fluid main-footer align-items-start justify-content-center'>
      <nav className='row col-sm-10 col-xl-9'>
        <div className='row col-lg-5 col-sm-12'>
          <div className='row col-lg-12 pb-2'>
            <img src='static/svg/logo.svg' alt='WorkAmerica' className='logo' />
          </div>
          <div className='col-lg-6 col-sm-6 pt-4'>
            <ul>
              <li>
                <Link to='/'>Employers</Link>
              </li>
              <li>
                <Link to='/educators'>Educators</Link>
              </li>
              <li>
                <Link to='/jobseekers'>Job Seekers</Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-6 col-sm-6 p-4'>
            <ul>
              <li>
                <a href='http://blog.workamerica.com/' target='_blank'>Blog</a>
              </li>
              <li>
                <Link to='/about-us'>About us</Link>
              </li>
              <li>
                <Link to='/contact-us'>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row col-lg-4 newsletter-signup align-items-start justify-content-start'>
          <h2 className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>Stay up to date!</h2>
          <p className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>
            <input type='text' placeholder='Email adress' />
            <button className='submit-newsletter'>Go</button>
          </div>
        </div>
        <div className='row col-lg-3 col-md-12 col-sm-12 social-icons align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center'>
          <a href='https://www.linkedin.com/company/workamerica' target='_blank'><i className='fa fa-linkedin-square' aria-hidden='true'></i></a>
          <a href='https://www.facebook.com/workamerica.co/' target='_blank'><i className='fa fa-facebook-square' aria-hidden='true'></i></a>
          <a href='https://twitter.com/work_america' target='_blank'><i className='fa fa-twitter-square' aria-hidden='true'></i></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
