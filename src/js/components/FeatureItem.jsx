import React, {PropTypes} from 'react';

const FeatureItem = ({featureTitle, featureContent, featureImage}) => {
  return (
    <article className='row col-md-4 p-4 mb-4 justify-content-center align-items-center'>
      <h2 className='row col-md-12 justify-content-start'>{featureTitle}</h2>
      <div className='row col-md-12 justify-content-center feature-image-container'>
        {featureImage === `` ? `` :
          <img className='feature-image' src={featureImage} alt={featureTitle} width='200' height='200' />
        }
      </div>
      <p className='row col-md-12 justify-content-center'>{featureContent}</p>
    </article>
  );
};

FeatureItem.propTypes = {
  featureTitle: PropTypes.string,
  featureContent: PropTypes.string,
  featureImage: PropTypes.string
};

FeatureItem.defaultProps = {
  featureTitle: `Empty Feature Title`,
  featureContent: `Empty Feature Content`,
  featureImage: `Empty Feature Image`
};

export default FeatureItem;
