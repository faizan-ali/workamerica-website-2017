import React, {PropTypes} from 'react';

import BenefitItem from './BenefitItem';

const PageBenefits = ({source}) => {
  return (
    <section className='container-fluid' id='benefits'>
      <div className='row benefit-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <div className='row col-lg-12 justify-content-center'>
            <h1>What can WorkAmerica do for you?</h1>
          </div>
          {source.map(s => <BenefitItem {...s}  key={Math.random(1000)} />)}
        </div>
      </div>
    </section>
  );
};

PageBenefits.propTypes = {
  source: PropTypes.array,
};

PageBenefits.defaultProps = {
  source: [`No Benefits Specified`],
};

export default PageBenefits;
