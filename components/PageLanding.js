import React, {PropTypes} from 'react';
import Link from 'next/link';

const PageLanding = ({title, introduction, mainCTA, mainCTALink, secondCTA, secondCTALink, landingImage}) => {
  return (
    <section className='container-fluid'>
      <div className='row landing-section justify-content-center'>
        <figure className='header-image'>
          <img className='parallax' src={landingImage} />
        </figure>
        <div className='row col-sm-10 col-xl-9 align-items-center'>
          <div className='col-md-6 p-4 intro-message'>
            <h1>{title}</h1>
            <p>
              {introduction}
            </p>
            <Link href={mainCTALink}><button className='cta-primary'>{mainCTA}</button></Link>
            {secondCTA ? <Link href={secondCTALink}><button className='cta-secondary'>{secondCTA}</button></Link> : ``}
          </div>
          <div className='col-md-6 d-flex p-4 align-items-center justify-content-center'>
          </div>
        </div>
      </div>
    </section>
  );
};

PageLanding.propTypes = {
  title: PropTypes.string,
  introduction: PropTypes.string,
  mainCTA: PropTypes.string,
  mainCTALink: PropTypes.string,
  secondCTA: PropTypes.string,
  secondCTALink: PropTypes.string,
  landingImage: PropTypes.string
};

export default PageLanding;