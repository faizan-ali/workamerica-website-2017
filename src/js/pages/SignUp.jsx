import React from 'react';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      company: ``,
      showErr: false
    };
  }

  handleSendMessage = () => {
    const {firstName, lastName, email, phone, company, noRobot} = this.state;

    if (firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && company.length !== 0 && noRobot) {
      const form = new FormData();

      form.append(`firstName`, firstName);
      form.append(`lastName`, lastName);
      form.append(`email`, email);
      form.append(`phone`, phone);
      form.append(`company`, company);

      fetch(`/`, {
        method: `POST`,
        body: form
      });
      console.log(`send`);
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
      if (!noRobot) {
        this.setState({showErrCaptcha: true});
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

  render () {
    return (
      <section className='container-fluid'>
        <div className='row signup-section justify-content-center'>
          <div className='col-lg-4 col-sm-10 align-items-center m-2'>
            <h1 className='row col-xl-12'>Start your free trial</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.
            </p>
          </div>
          <div className='col-lg-4 col-sm-10 align-items-center m-2 contact-form'>
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
            <div className='row col-xl-12'>
              <div className='col-xl-12 pb-4'>
                <button className='cta-primary send' onClick={this.handleSendMessage}>Get started!</button>
              </div>
              <div className='col-xl-12 pb-4 error'>
                {this.state.showErr ? `Please fill in all required fields.` : ``}
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
