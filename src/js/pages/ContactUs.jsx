import React from 'react';
import Recaptcha from 'react-recaptcha';
import fetch from 'isomorphic-fetch';

export default class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      message: ``,
      title: ``,
      showErr: false,
      showErrCaptcha: false,
      noRobot: false,
      doingRequest: false,
      complete: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSendMessage = () => {
    const {title, firstName, lastName, email, phone, message, noRobot} = this.state;

    if (title.length !== 0 && firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && message.length !== 0 && noRobot) {
      const form = new FormData();

      form.append(`title`, title);
      form.append(`firstName`, firstName);
      form.append(`lastName`, lastName);
      form.append(`email`, email);
      form.append(`phone`, phone);
      form.append(`message`, message);

      this.setState({doingRequest: true});

      fetch(`http://api-stage.workamerica.co/website/contact`, {
        method: `POST`,
        body: form
      })
      .then(res => {
        if (res.ok) {
          this.setState({doingRequest: false, complete: true});
        }
      });
      console.log(`send`);
    } else {
      if (title.length <= 0) {
        document.querySelector(`select[name="title"]`).classList.add(`empty-field`);
      }
      if (firstName.length <= 0) {
        document.querySelector(`input[name="firstName"]`).classList.add(`empty-field`);
      }
      if (lastName.length <= 0) {
        document.querySelector(`input[name="lastName"]`).classList.add(`empty-field`);
      }
      if (email.length <= 0) {
        document.querySelector(`input[name="email"]`).classList.add(`empty-field`);
      }
      if (message.length <= 0) {
        document.querySelector(`textarea[name="message"]`).classList.add(`empty-field`);
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
  }

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="lastName"]`).classList.add(`empty-field`);
    }
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="email"]`).classList.add(`empty-field`);
    }
  }

  handleTitleChange = e => {
    this.setState({title: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`input[name="title"]`).classList.add(`empty-field`);
    }
  }

  handlePhoneChange = e => {
    this.setState({phone: e.target.value});
  }

  handleMessageChange = e => {
    this.setState({message: e.target.value});
    if (e.target.value.length <= 0) {
      document.querySelector(`textarea[name="message"]`).classList.add(`empty-field`);
    }
  }

  handleRecaptcha = () => {
    console.log(`Recaptcha loaded.`);
  };

  handleVerify = () => {
    console.log(`I am not a robot.`);
    this.setState({noRobot: true});
  };

  renderForm() {
    return (
      <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form'>
        <div className='row col-xl-12'>
          <div className='col-md-6 col-sm-12 pb-4'>
            I am a*
            <select name='title' className='col-xl-12' value={this.state.title} onChange={this.handleTitleChange} onBlur={this.handleTitleChange}>
              <option value='Employer'>Employer</option>
              <option value='Educator'>Educator</option>
              <option value='Job Seeker'>Job Seeker</option>
              <option value='Other'>Other</option>
            </select>
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-md-6 col-sm-12 pb-4'>
            First Name*
            <input type='text' placeholder='First Name' name='firstName' className='col-xl-12' value={this.state.firstName} onChange={this.handleFirstNameChange} onBlur={this.handleFirstNameChange} />
          </div>
          <div className='col-md-6 col-sm-12 pb-4'>
            Last Name*
            <input type='text' placeholder='Last Name' name='lastName' className='col-xl-12' value={this.state.lastName} onChange={this.handleLastNameChange} onBlur={this.handleLastNameChange} />
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-md-6 col-sm-12 pb-4'>
            E-mail*
            <input type='email' placeholder='Email Address' name='email' className='col-xl-12' value={this.state.email} onChange={this.handleEmailChange} onBlur={this.handleEmailChange} />
          </div>
          <div className='col-md-6 col-sm-12 pb-4'>
            Phone Number
            <input type='number' placeholder='Phone Number' name='phone' className='col-xl-12' value={this.state.phone} onChange={this.handlePhoneChange} />
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-xl-12 pb-4'>
            Message*
            <textarea placeholder='Message' name='message' className='col-xl-12 message' value={this.state.message} onChange={this.handleMessageChange} onBlur={this.handleMessageChange} />
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-xl-12 pb-4'>
            <Recaptcha
              sitekey='6Ld7QBgUAAAAAGbG7koI5ZKmNT6UFLg9DE5BR_tB'
              render='explicit'
              verifyCallback={this.handleVerify}
              onloadCallback={this.handleRecaptcha}
            />
          </div>
          <div className='col-xl-12 pb-4'>
        <button className='cta-primary send' onClick={this.handleSendMessage}>Send message</button>
          </div>
          <div className='col-xl-12 pb-4 error'>
            {this.state.showErrCaptcha ? `Please check the reCAPTCHA field.` : ``}
          </div>
          <div className='col-xl-12 pb-4 error'>
            {this.state.showErr ? `Please fill in all required fields.` : ``}
          </div>
          <div className='col-xl-12 pb-4'>
            * fields are required.
          </div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <section className='container-fluid'>
        <div className='row contact-us-section justify-content-center'>
          <div className='row col-sm-10 col-xl-7 align-items-center about-message'>
            <h1 className='row col-xl-12'>Contact us</h1>
            <p>
              We&#39;re excited to hear from you! Want to speak with us righ away? Give us a call at 877-750-2968.
            </p>
          </div>
        </div>

        <div className='row blog-section justify-content-center'>
          {
            !this.state.complete && !this.state.doingRequest ?
              this.renderForm()
            :
              ``
          }
          {
            !this.state.complete && this.state.doingRequest ?
              <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form'>
                <p>Hang on {this.state.firstName}, We are sending your message.</p>
              </div>
            :
              ``
          }
          {
            this.state.complete && !this.state.doingRequest ?
              <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form'>
                <p className='green'>Thanks {this.state.firstName}, We have received your message and will get back to you soon!</p>
              </div>
            :
              ``
          }
        </div>

      </section>
    );
  }
}
