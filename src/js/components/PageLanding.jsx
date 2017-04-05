/**
  * Creates the page landing section.
  * @exports PageLanding Renders the page landing section.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PageLanding = ({source, center}) => {
  return (
    <section className='container-fluid'>
      <div className='row landing-section justify-content-center'>
        {center ?
          <figure className='header-image-center d-flex justify-content-center align-items-center'>
            <img className='parallax' src={`static/img/${source.landingImage}`}
              srcSet={`static/img/sm-${source.landingImage} 90w,
                      static/img/md-${source.landingImage} 570w,
                      static/img/lg-${source.landingImage} 931w,
                      static/img/xl-${source.landingImage} 2292w`} />
          </figure>
          :
          <figure className='header-image'>
            <img className='parallax' src={`static/img/${source.landingImage}`}
              srcSet={`static/img/sm-${source.landingImage} 400w,
                      static/img/md-${source.landingImage} 800w,
                      static/img/lg-${source.landingImage} 1200w,
                      static/img/xl-${source.landingImage} 2292w`} />
          </figure>
        }
        <div className='row col-sm-10 col-xl-9 align-items-center'>
          <div className='col-md-6 intro-message'>
            <h1>{source.title}</h1>
            <p>
              {source.introduction}
            </p>
            <div className='row col-xl-12'>
            <Link to={source.mainCTALink}><button className='cta-primary'>{source.mainCTA}</button></Link>
            </div>
            <div className='row col-xl-12'>
            {source.secondCTA ? <button className='cta-secondary' onClick={() => {document.querySelector(`#benefits`).scrollIntoView({block: `start`, behavior: `smooth`});}}>{source.secondCTA}</button> : ``}
            </div>

          </div>
          <div className='col-md-6 d-flex p-4 align-items-center justify-content-center'>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
  * PropTypes
  * @property {object} source Object with page landing copy from JSON static/content/ folder.
  * @property {boolean} center If true, hero image will be centered.
 */
PageLanding.propTypes = {
  source: PropTypes.object,
  center: PropTypes.bool
};

PageLanding.defaultProps = {
  source: {},
  center: false
};

export default PageLanding;
