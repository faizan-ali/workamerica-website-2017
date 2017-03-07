import React, {PropTypes} from 'react';
import Link from 'next/link';

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
            <Link href={source.mainCTALink}><button className='cta-primary'>{source.mainCTA}</button></Link>
            {source.secondCTA ? <Link href={source.secondCTALink}><button className='cta-secondary'>{source.secondCTA}</button></Link> : ``}
          </div>
        </div>
      </div>
    </section>
  );
};

PageCallToAction.propTypes = {
  source: PropTypes.object,
};

export default PageCallToAction;
