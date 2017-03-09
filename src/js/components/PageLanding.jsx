import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PageLanding = ({source}) => {
  return (
    <section className='container-fluid'>
      <div className='row landing-section justify-content-center'>
        <figure className='header-image'>
          <img className='parallax' src={source.landingImage} />
        </figure>
        <div className='row col-sm-10 col-xl-9 align-items-center'>
          <div className='col-md-6 p-4 intro-message'>
            <h1>{source.title}</h1>
            <p>
              {source.introduction}
            </p>
            <div className='row col-xl-12'>
            <Link to={source.mainCTALink}><button className='cta-primary'>{source.mainCTA}</button></Link>
            </div>
            <div className='row col-xl-12'>
            {source.secondCTA ? <Link to={source.secondCTALink}><button className='cta-secondary'>{source.secondCTA}</button></Link> : ``}
            </div>

          </div>
          <div className='col-md-6 d-flex p-4 align-items-center justify-content-center'>
          </div>
        </div>
      </div>
    </section>
  );
};

PageLanding.propTypes = {
  source: PropTypes.object,
};

PageLanding.defaultProps = {
  source: {},
};

export default PageLanding;
