import React, {PropTypes} from 'react';

const PageSocial = ({source}) => {
  return (
    <section className='container-fluid'>
      <div className='row social-section justify-content-center align-items-center'>
        <figure className='social-image-container d-flex justify-content-center align-items-center'>
          <img className='social-image' src={source.picture} />
        </figure>
        <div className='row col-xl-3 offset-xl-3 col-md-4 offset-md-2 p-4 social-quote align-items-center'>
          <h1>{source.quote}</h1>
          <p>{source.quoteFrom}<br />
            <span>{source.quotePosition}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

PageSocial.propTypes = {
  source: PropTypes.object,
};

PageSocial.defaultProps = {
  source: {},
};

export default PageSocial;
