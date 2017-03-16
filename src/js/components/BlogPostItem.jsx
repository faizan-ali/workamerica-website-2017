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

BlogPostItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.object,
  date: PropTypes.timestamp
};

BlogPostItem.defaultProps = {
  link: `#`,
  title: {},
  date: ``
};

export default BlogPostItem;
