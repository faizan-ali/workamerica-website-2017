import React, {PropTypes} from 'react';

import BlogPostItem from './BlogPostItem';

const PageBlogPosts = ({source, end}) => {
  return (
    <section className='container-fluid'>
      {end ?
        <div className='row blog-section justify-content-center section-end'>
          <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
            <h1>From the WorkAmerica Blog</h1>
          </div>
          <div className='row col-lg-12 justify-content-center p-0'>
            {source.map(s => <BlogPostItem {...s}  key={Math.random(1000)} />)}
          </div>
        </div>
        :
        <div className='row blog-section justify-content-center'>
          <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
            <h1>From the WorkAmerica Blog</h1>
          </div>
          <div className='row col-lg-12 justify-content-center p-0'>
            {source.map(s => <BlogPostItem {...s}  key={Math.random(1000)} />)}
          </div>
        </div>
      }
    </section>
  );
};

PageBlogPosts.propTypes = {
  source: PropTypes.array,
  end: PropTypes.bool,
};

PageBlogPosts.defaultProps = {
  source: [`No Blogposts Specified`],
  end: false
};

export default PageBlogPosts;
