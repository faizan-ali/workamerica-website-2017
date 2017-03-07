import React, {PropTypes} from 'react';
//import Link from 'next/link';

const FeatureItem = ({featureTitle, featureContent, featureImage}) => {
  return (
    <article className='row col-md-4 p-4 mb-4 justify-content-center align-items-center'>
      <h2 className='row col-md-12 justify-content-center'>{featureTitle}</h2>
      <img className='row col-md-12 justify-content-center' src={featureImage} alt={featureTitle} />
      <p className='row col-md-12 justify-content-center'>{featureContent}</p>
    </article>
  );
};

FeatureItem.propTypes = {
  featureTitle: PropTypes.string,
  featureContent: PropTypes.string,
  featureImage: PropTypes.string
};

export default FeatureItem;
