/**
  * Creates the footer.
  * @exports Footer Renders the Footer.
 */

import React from 'react';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {boolean} signedUp Boolean to check if user has signed up (true on succesful API request)
     * @property {boolean} doingRequest Boolean to check if request is happaning (for loading indication)
     * @property {string} email Controlled input field for email value
     * @property {boolean} errMsg Boolean to show error message if input is empty (true when sending empty form)
     */
    this.state = {
      signedUp: false,
      doingRequest: false,
      email: ``,
      errMsg: false
    };
  }

  /**
    * Handle Newsletter Sign Up click event
   */
  handleSignUp = () => {
    if (this.state.email.length > 0) {
      this.setState({doingRequest: true, errMsg: false});

      const form = new FormData();
      const {email} = this.state;

      form.append(`email`, email);

      fetch(`http://api-stage.workamerica.co/website/newsletter`, {
        method: `POST`,
        body: form
      })
      .then(res => {
        if (res.ok) {
          this.setState({doingRequest: false, signedUp: true});
        }
      });
    } else {
      this.setState({errMsg: true});
    }
  }

  /**
   * Handle change event at input form
   * @param {SytheticEvent} e
   */
  handleEmailChange = e => {
    this.setState({email: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="email"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="email"]`).classList.remove(`empty-field`);
    }
  }

  render() {
    return (
      <footer className='d-flex container-fluid main-footer align-items-start justify-content-center'>
        <nav className='row col-sm-10 col-xl-9'>
          <div className='row col-lg-5 col-sm-12'>
            <div className='row col-lg-12 p-0 pl-4'>
              <img src='static/svg/logo.svg' alt='WorkAmerica' className='col-lg-12 logo' />
              <p className='col-lg-12 mb-0'>Connecting Education to Employment.</p>
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
            <div className='col-lg-6 col-sm-6 pt-4'>
              <ul>
                <li>
                  <a href='http://blog.workamerica.co/' target='_blank'>Blog</a>
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
          <hr className='row col-lg-12 hidden-lg-up' />
          <div className='row col-lg-5 align-items-end newsletter-signup'>
            <h2 className='col-md-12 justify-content-md-center justify-content-lg-start mb-4'>Stay up to date!</h2>
            <p className='col-md-12 justify-content-md-center justify-content-lg-start p-0 pl-4 mb-4'>The best way to keep up with our progress? Sign up for Email Notifications.</p>
              {
                !this.state.signedUp && !this.state.doingRequest ?
                  <div className='col-md-12 justify-content-md-center justify-content-lg-start mb-0'>
                    <input type='email' required placeholder='Email adress' name='email' value={this.state.email} onChange={this.handleEmailChange} />
                    <button className='submit-newsletter' onClick={this.handleSignUp}>Go</button>
                    {this.state.errMsg ? <p className='error'>Please enter your email address.</p> : ``}
                  </div>
                : ``
              }
              {
                !this.state.signedUp && this.state.doingRequest ?
                  <div className='col-md-12 justify-content-md-center pb-4'>
                    <p className='green'>Adding {this.state.email} to our mailing list.</p>
                  </div>
                :
                ``
              }
              {
                this.state.signedUp && !this.state.doingRequest ?
                  <div className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>
                    <p className='green'>You are now signed up for the WorkAmerica newsletter!</p>
                  </div>
                :
                ``
              }
          </div>
          <hr className='row col-lg-12 hidden-lg-up' />
          <div className='row col-lg-2 col-md-12 col-sm-12 social-icons align-items-end justify-content-center justify-content-lg-end'>
            <a href='https://www.linkedin.com/company/workamerica' target='_blank'><i className='fa fa-linkedin' aria-hidden='true'></i></a>
            <a href='https://www.facebook.com/workamerica.co/' target='_blank'><i className='fa fa-facebook' aria-hidden='true'></i></a>
            <a href='https://twitter.com/work_america' target='_blank'><i className='fa fa-twitter' aria-hidden='true'></i></a>
          </div>
        </nav>
      </footer>
    );
  }
}
