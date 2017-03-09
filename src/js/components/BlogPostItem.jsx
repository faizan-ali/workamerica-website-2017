import React, {PropTypes} from 'react';

const BlogPostItem = ({link, title}) => {
  return (
    <a href={link} target='_blank' className='d-flex col-md-4 blog-article-site justify-content-center align-items-center'>
      <article className='d-flex col-md-12 justify-content-center align-items-center'>
        <h2>{title.rendered}</h2>
      </article>
    </a>
  );
};

BlogPostItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.object
};

BlogPostItem.defaultProps = {
  link: `#`,
  title: {},
};

export default BlogPostItem;
