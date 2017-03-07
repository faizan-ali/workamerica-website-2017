import React, {PropTypes} from 'react';

const FeatureItem = ({link, title}) => {
  return (
    <a href={link} target='_blank' className='d-flex col-md-4 blog-article-site justify-content-center align-items-center'>
      <article className='d-flex col-md-12 justify-content-center align-items-center'>
        <h2>{title.rendered}</h2>
      </article>
    </a>
  );
};

FeatureItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.object
};

export default FeatureItem;
