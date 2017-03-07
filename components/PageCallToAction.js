import React, {PropTypes} from 'react';
import Link from 'next/link';

const PageCallToAction = ({title, introduction, mainCTA, mainCTALink, secondCTA, secondCTALink}) => {
  return (
    <section className='container-fluid'>
      <div className='row cta-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <div className='row col-lg-12 justify-content-center'>
            <h1>{title}</h1>
            <p>
              {introduction}
            </p>
            <Link href={mainCTALink}><button className='cta-primary'>{mainCTA}</button></Link>
            {secondCTA ? <Link href={secondCTALink}><button className='cta-secondary'>{secondCTA}</button></Link> : ``}
          </div>
        </div>
      </div>
    </section>
  );
};

PageCallToAction.propTypes = {
  title: PropTypes.string,
  introduction: PropTypes.string,
  mainCTA: PropTypes.string,
  mainCTALink: PropTypes.string,
  secondCTA: PropTypes.string,
  secondCTALink: PropTypes.string,
};

export default PageCallToAction;
