/**
  * Creates the social proof section.
  * @exports PageSocial Renders the social proof section.
 */

import React, {PropTypes} from 'react';

const PageSocial = ({source}) => {
  return (
    <section className='container-fluid'>
      <div className='row social-section justify-content-center align-items-center'>
        <figure className='social-image-container d-flex justify-content-center align-items-center'>
          <img className='social-image' src={`static/img/${source.picture}`}
            srcSet={`static/img/sm-${source.picture} 400w,
                    static/img/md-${source.picture} 800w,
                    static/img/lg-${source.picture} 1200w`} />
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

/**
  * PropTypes
  * @property {object} source Object with social proof copy from JSON static/content/ folder.
 */
PageSocial.propTypes = {
  source: PropTypes.object,
};

PageSocial.defaultProps = {
  source: {},
};

export default PageSocial;
