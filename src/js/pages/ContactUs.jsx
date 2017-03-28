import React from 'react';
import Recaptcha from 'react-recaptcha';
import fetch from 'isomorphic-fetch';
import MaskedInput from 'react-maskedinput';

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
      this.validate();
    }
  }

  handleRecaptcha = () => {
    console.log(`Recaptcha loaded.`);
  };

  handleVerify = () => {
    console.log(`I am not a robot.`);
    this.setState({noRobot: true});
  };

  validate = () => {
    const {title, firstName, lastName, email, phone, message, noRobot} = this.state;
    const fields = [title, firstName, lastName, email, phone, message];
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
    // exclude phone from required
    this.setState({err4: false});
    //check the Recaptcha
    if (!noRobot) {
      this.setState({showErrCaptcha: true});
    } else {
      this.setState({showErrCaptcha: false});
    }
  }

  handleChange = e => this.setState({[e.currentTarget.name]: e.currentTarget.value});

  renderForm() {
    return (
      <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form'>
        <div className='row col-xl-12'>
          <div className='col-md-6 col-sm-12 pb-4'>
            I am a*
            <select name='title' className={this.state.err0 ? `col-xl-12 empty-field` : `col-xl-12`} value={this.state.title} onChange={this.handleChange} >
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
            <input type='text' placeholder='First Name' name='firstName' className={this.state.err1 ? `empty-field` : ``} value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div className='col-md-6 col-sm-12 pb-4'>
            Last Name*
            <input type='text' placeholder='Last Name' name='lastName' className={this.state.err2 ? `empty-field` : ``} value={this.state.lastName} onChange={this.handleChange} />
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-md-6 col-sm-12 pb-4'>
            E-mail*
            <input type='email' placeholder='Email Address' name='email' className={this.state.err3 ? `empty-field` : ``} value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className='col-md-6 col-sm-12 pb-4'>
            Phone Number
            <MaskedInput mask='(111) 111-1111' name='phone' size='10' value={this.state.phone} onChange={this.handleChange} className={this.state.err4 ? `empty-field` : ``} />
          </div>
        </div>

        <div className='row col-xl-12'>
          <div className='col-xl-12 pb-4'>
            Message*
            <textarea placeholder='Message' name='message' className={this.state.err5 ? `col-xl-12 message empty-field` : `col-xl-12 message`} value={this.state.message} onChange={this.handleChange}  />
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
              We&#39;re excited to hear from you! Want to speak with us right away? Give us a call at 877-750-2968.
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
