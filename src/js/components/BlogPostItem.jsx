/**
  * Creates a single Blog Post item
  * @exports BlogPostItem Renders the Blog Post item.
 */

import React, {PropTypes} from 'react';
import moment from 'moment';

const BlogPostItem = ({link, title, date}) => {
  const a = moment(date);
  const b = moment();
  const c = a.from(b);
  return (
    <a href={link} target='_blank' className='d-flex col-md-4 blog-article-site justify-content-center align-items-center'>
      <article className='flex-column col-md-12 justify-content-center align-items-center blogitem'>
        <h2>{title.rendered}</h2>
        <span>{c}</span>
      </article>
    </a>
  );
};

/**
  * PropTypes
  * @property {string} link The link to the Blog Post.
  * @property {object} title The title Object from the Wordpress API.
  * @property {string} date The timestamp from the Blog Post.
 */
BlogPostItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.object,
  date: PropTypes.string
};

BlogPostItem.defaultProps = {
  link: `#`,
  title: {},
  date: ``
};

export default BlogPostItem;
