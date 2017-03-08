import React from 'react';
//import Link from 'next/link';

export default class Error extends React.Component {
  static getInitialProps ({res, xhr}) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null);
    return {statusCode};
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      message: ``,
      showErr: false
    };
  }

  handleSendMessage = () => {
    const {firstName, lastName, email, phone, message} = this.state;

    if (firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && message.length !== 0) {
      const form = new FormData();

      form.append(`firstName`, firstName);
      form.append(`lastName`, lastName);
      form.append(`email`, email);
      form.append(`phone`, phone);
      form.append(`message`, message);

      fetch(`/login`, {
        method: `POST`,
        body: form
      });
      console.log(`send`);
    } else {
      this.setState({showErr: true});
    }
  }

  handleFirstNameChange = e => {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value});
  }

  handlePhoneChange = e => {
    this.setState({phone: e.target.value});
  }

  handleMessageChange = e => {
    this.setState({message: e.target.value});
  }

  render () {
    return (
      <section className='container-fluid'>

        <div className='row contact-us-section justify-content-center'>
          <div className='row col-sm-10 col-xl-7 align-items-center about-message'>
            <h1 className='row col-xl-12'>Contact us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.
            </p>
          </div>
        </div>

        <div className='row blog-section justify-content-center'>
          <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form'>

            {/* https://www.api.workamerica.co/contact/footer */}

              <div className='row col-xl-12'>
                <div className='col-md-6 col-sm-12 pb-4'>
                  First Name*
                  <input type='text' placeholder='First Name' name='firstName' className='col-xl-12' value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </div>
                <div className='col-md-6 col-sm-12 pb-4'>
                  Last Name*
                  <input type='text' placeholder='Last Name' name='lastName' className='col-xl-12' value={this.state.lastName} onChange={this.handleLastNameChange} />
                </div>
              </div>

              <div className='row col-xl-12'>
                <div className='col-md-6 col-sm-12 pb-4'>
                  E-mail*
                  <input type='email' placeholder='Email Address' name='email' className='col-xl-12' value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div className='col-md-6 col-sm-12 pb-4'>
                  Phone Number
                  <input type='number' placeholder='Phone Number' name='phone' className='col-xl-12' value={this.state.phone} onChange={this.handlePhoneChange} />
                </div>
              </div>

              <div className='row col-xl-12'>
                <div className='col-xl-12 pb-4'>
                  Message*
                  <textarea placeholder='Message' name='message' className='col-xl-12 message' value={this.state.message} onChange={this.handleMessageChange} />
                </div>
              </div>

              <div className='row col-xl-12'>
                <div className='col-xl-12 pb-4'>
              <button className='cta-primary send' onClick={this.handleSendMessage}>Send message</button>
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
