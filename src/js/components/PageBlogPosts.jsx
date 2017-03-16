import React, {PropTypes} from 'react';

import BlogPostItem from './BlogPostItem';

const PageBlogPosts = ({source}) => {
  return (
    <section className='container-fluid'>
      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>From the WorkAmerica Blog</h1>
        </div>
        <div className='row col-lg-12 justify-content-center p-0'>
          {source.map(s => <BlogPostItem {...s}  key={Math.random(1000)} />)}
        </div>
      </div>
    </section>
  );
};

PageBlogPosts.propTypes = {
  source: PropTypes.array,
};

PageBlogPosts.defaultProps = {
  source: [`No Blogposts Specified`],
};

export default PageBlogPosts;
