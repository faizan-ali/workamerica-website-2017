/**
  * Creates the call to action section.
  * @exports PageCallToAction Renders the call to action section.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PageCallToAction = ({source}) => {
  return (
    <section className='container-fluid'>
      <div className='row cta-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <div className='row col-lg-12 justify-content-center'>
            <h1>{source.title}</h1>
            <p>
              {source.introduction}
            </p>
            <div className='row col-md-12 justify-content-center'>
            <Link to={source.mainCTALink}><button className='cta-primary'>{source.mainCTA}</button></Link>
            </div>
            <div className='row col-md-12 justify-content-center'>
            {source.secondCTA ? <Link to={source.secondCTALink}><button className='cta-secondary'>{source.secondCTA}</button></Link> : ``}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/**
  * PropTypes
  * @property {object} source Object with call to action copy from JSON static/content/ folder.
 */
PageCallToAction.propTypes = {
  source: PropTypes.object,
};

PageCallToAction.defaultProps = {
  source: {},
};

export default PageCallToAction;
