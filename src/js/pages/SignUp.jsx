/**
  * Creates the Signup page.
  * @exports SignUp Renders the Signup page.
 */

import React from 'react';
import fetch from 'isomorphic-fetch';
import MaskedInput from 'react-maskedinput';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} firstName Controlled input field for firstName value
     * @property {string} lastName Controlled input field for lastName value
     * @property {string} email Controlled input field for email value
     * @property {number} phone Controlled input field for phone value
     * @property {string} company Controlled input field for company value
     * @property {string} password Controlled input field for password value
     * @property {boolean} showErr Boolean to show error message if input is empty (true when sending empty form)
     * @property {boolean} existsErr Boolean to show error message if account already exists with given email
     */
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      company: ``,
      password: ``,
      showErr: false,
      existsErr: false,
    };
  }

  /**
    * Lifecycle method when component has rendered.
    * Scroll To Top of page.
   */
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /**
    * Handle sending the contact form.
   */
  handleSendMessage = () => {
    const {firstName, lastName, email, phone, company, password} = this.state;

    if (firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && company.length !== 0 && password.length !== 0) {
      this.validate();
      const form = new FormData();

      form.append(`firstName`, firstName);
      form.append(`lastName`, lastName);
      form.append(`email`, email);
      form.append(`phone`, phone);
      form.append(`company`, company);
      form.append(`password`, password);

      fetch(`https://api.workamerica.co/website/employer`, {
        method: `POST`,
        body: form
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.success) {
          window.location.href = data.misc;
        }
        if (data.message === `exists`) {
          this.setState({existsErr: true});
        }
      });
    } else {
      this.validate();
    }
  }

  /**
   * Handle change event at input form
   * @param {SytheticEvent} e
   */
  handleChange = e => this.setState({[e.currentTarget.name]: e.currentTarget.value});

  /**
   * Validate form after clicking submit
   */
  validate = () => {
    const {firstName, lastName, email, phone, company, password} = this.state;
    const fields = [firstName, lastName, company, phone, email, password];
    // reset main error message
    this.setState({showErr: false});
    // check all individual fields
    for (let i = 0;i < fields.length;i ++) {
      if (fields[i].length <= 0) {
        // set state for individual errors and main error message
        this.setState({showErr: true, [`err${i}`]: true});
      } else {
        // set state for individual filled in inputs
        this.setState({[`err${i}`]: false});
      }
    }
  }

  render () {
    return (
      <section className='container-fluid'>
        <div className='row signup-section justify-content-center align-items-start'>
          <div className='col-lg-4 col-sm-10 m-2 overlay'>
            <h1 className='row col-xl-12'>3 Free Candidates To Get You Started</h1>
            <p>
              See for yourself how easy it is to accomplish your sourcing and hiring needs on WorkAmerica. Run your first searches free, on us.
            </p>
          </div>
          <div className='col-lg-4 col-sm-10 align-items-center m-2 contact-form overlay'>
            <div className='col-sm-12 pb-4'>
              First Name*
              <input type='text' className={this.state.err0 ? `empty-field` : ``} placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Last Name*
              <input type='text' className={this.state.err1 ? `empty-field` : ``} placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Company*
              <input type='text' className={this.state.err2 ? `empty-field` : ``} placeholder='Company' name='company' value={this.state.company} onChange={this.handleChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Phone Number*
              <MaskedInput className={this.state.err3 ? `empty-field` : ``} mask='(111) 111-1111' name='phone' size='10' value={this.state.phone} onChange={this.handleChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              E-mail*
              <input className={this.state.err4 ? `empty-field` : ``} type='email' placeholder='Email Address' name='email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Password*
              <input className={this.state.err5 ? `empty-field` : ``} type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className='row col-xl-12'>
              <div className='col-xl-12 pb-4'>
                <button className='cta-primary send' onClick={this.handleSendMessage}>Get started!</button>
              </div>
              <div className='col-xl-12 pb-4 error'>
                {this.state.showErr ? `Please fill in all required fields.` : ``}
                {this.state.existsErr ? `An account already exists for ${this.state.email}` : ``}
              </div>
              <div className='col-xl-12 pb-4'>
                * fields are required.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
