import React from 'react';
import fetch from 'isomorphic-fetch';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      company: ``,
      password: ``,
      showErr: false,
      existsErr: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSendMessage = () => {
    const {firstName, lastName, email, phone, company, password} = this.state;

    if (firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && company.length !== 0 && password.length !== 0) {
      const form = new FormData();

      form.append(`firstName`, firstName);
      form.append(`lastName`, lastName);
      form.append(`email`, email);
      form.append(`phone`, phone);
      form.append(`company`, company);
      form.append(`password`, password);

      fetch(`http://api-stage.workamerica.co/website/employer`, {
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
        console.log(`Request succeeded with JSON response`, data);
        if (data.success) {
          window.location.href = data.misc;
        }
        if (data.message === `exists`) {
          this.setState({existsErr: true});
        }
      });


    } else {
      if (firstName.length <= 0) {
        document.querySelector(`input[name="firstName"]`).classList.add(`empty-field`);
      }
      if (lastName.length <= 0) {
        document.querySelector(`input[name="lastName"]`).classList.add(`empty-field`);
      }
      if (email.length <= 0) {
        document.querySelector(`input[name="email"]`).classList.add(`empty-field`);
      }
      if (phone.length <= 0) {
        document.querySelector(`input[name="phone"]`).classList.add(`empty-field`);
      }
      if (company.length <= 0) {
        document.querySelector(`input[name="company"]`).classList.add(`empty-field`);
      }
      if (password.length <= 0) {
        document.querySelector(`input[name="password"]`).classList.add(`empty-field`);
      }
      this.setState({showErr: true});
    }
  }

  handleFirstNameChange = e => {
    this.setState({firstName: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="firstName"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="firstName"]`).classList.remove(`empty-field`);
    }
  }

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="lastName"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="lastName"]`).classList.remove(`empty-field`);
    }
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

  handlePhoneChange = e => {
    this.setState({phone: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="phone"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="phone"]`).classList.remove(`empty-field`);
    }
  }

  handleCompanyChange = e => {
    this.setState({company: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="company"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="company"]`).classList.remove(`empty-field`);
    }
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="password"]`).classList.add(`empty-field`);
    }
    if (e.target.value.length > 0) {
      document.querySelector(`input[name="password"]`).classList.remove(`empty-field`);
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
              <input type='text' placeholder='First Name' name='firstName' className='col-xl-12' value={this.state.firstName} onChange={this.handleFirstNameChange} onBlur={this.handleFirstNameChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Last Name*
              <input type='text' placeholder='Last Name' name='lastName' className='col-xl-12' value={this.state.lastName} onChange={this.handleLastNameChange} onBlur={this.handleLastNameChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Company*
              <input type='text' placeholder='Company' name='company' className='col-xl-12' value={this.state.company} onChange={this.handleCompanyChange} onBlur={this.handleCompanyChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Phone Number*
              <input type='number' placeholder='Phone Number' name='phone' className='col-xl-12' value={this.state.phone} onChange={this.handlePhoneChange} onBlur={this.handlePhoneChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              E-mail*
              <input type='email' placeholder='Email Address' name='email' className='col-xl-12' value={this.state.email} onChange={this.handleEmailChange} onBlur={this.handleEmailChange} />
            </div>
            <div className='col-sm-12 pb-4'>
              Password*
              <input type='password' placeholder='Password' name='password' className='col-xl-12' value={this.state.password} onChange={this.handlePasswordChange} onBlur={this.handlePasswordChange} />
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
