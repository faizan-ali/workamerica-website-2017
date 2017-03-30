/**
  * Creates the benefits section.
  * @exports PageBenefits Renders the benefits section.
 */

import React, {PropTypes} from 'react';

import BenefitItem from './BenefitItem';

const PageBenefits = ({source}) => {
  return (
    <section className='container-fluid' id='benefits'>
      <div className='row benefit-section justify-content-center'>
        <div className='col-sm-10 col-xl-9 align-items-center justify-content-center'>
          <div className='row col-lg-12 justify-content-center'>
            <h1>What can WorkAmerica do for you?</h1>
          </div>
          {source.map(s => <BenefitItem {...s}  key={Math.random(1000)} />)}
        </div>
      </div>
    </section>
  );
};

/**
  * PropTypes
  * @property {array} source Array with single benefit items.
 */
PageBenefits.propTypes = {
  source: PropTypes.array,
};

PageBenefits.defaultProps = {
  source: [],
};

export default PageBenefits;
