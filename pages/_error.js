import React, {PropTypes} from 'react';
import Link from 'next/link';

export default class Error extends React.Component {
  static getInitialProps ({res, xhr}) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null);
    return {statusCode};
  }

  render () {
    return (
      <section className='d-flex container-fluid justify-content-center align-items-center'>
        <div className='row col-sm-10 col-xl-7 landing-section error-message justify-content-center align-items-center'>
          <div className='d-flex col-md-6 d-flex p-4 align-items-center justify-content-center mb-4'>
            <img src='static/img/search-certificates.gif' width='300' />
          </div>
          <div className='col-md-6 p-4'>
            <h2 className='pl-3'>Oops, we can't seem to find this page.</h2>
            <p className='pl-3'>We're really good at finding qualified, trained and verified job candidates though!</p>
            <Link href='/'><button className='cta-primary'>Find out how we can help.</button></Link>
          </div>
        </div>
      </section>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
};
