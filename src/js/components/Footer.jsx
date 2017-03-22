import React from 'react';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      signedUp: false,
      doingRequest: false,
      email: ``
    };
  }

  handleSignUp = () => {
    this.setState({doingRequest: true});

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
  }

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
            <div className='row col-lg-12 pb-2'>
              <img src='static/svg/logo.svg' alt='WorkAmerica' className='logo' />
              Connecting Education to Employment.
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
          <div className='row col-lg-4 newsletter-signup align-items-start justify-content-start'>
            <h2 className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>Stay up to date!</h2>
            <p className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>The best way to keep up with our progress? Sign up for Email Notifications.</p>
              {
                !this.state.signedUp && !this.state.doingRequest ?
                  <div className='col-md-12 justify-content-md-center justify-content-lg-start pb-4'>
                    <input type='email' placeholder='Email adress' name='email' value={this.state.email} onChange={this.handleEmailChange} />
                    <button className='submit-newsletter' onClick={this.handleSignUp}>Go</button>
                  </div>
                : ``
              }
              {
                !this.state.signedUp && this.state.doingRequest ?
                  <div className='col-md-12 justify-content-md-center pb-4'>
                    <p>Adding {this.state.email} to our mailing list.</p>
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
          <div className='row col-lg-3 col-md-12 col-sm-12 social-icons align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center'>
            <a href='https://www.linkedin.com/company/workamerica' target='_blank'><i className='fa fa-linkedin-square' aria-hidden='true'></i></a>
            <a href='https://www.facebook.com/workamerica.co/' target='_blank'><i className='fa fa-facebook-square' aria-hidden='true'></i></a>
            <a href='https://twitter.com/work_america' target='_blank'><i className='fa fa-twitter-square' aria-hidden='true'></i></a>
          </div>
        </nav>
      </footer>
    );
  }
}
