import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageBlogPosts from '../components/PageBlogPosts';

export default class Jobseekers extends React.Component {
  static async getInitialProps () {
    // Fetch Employer Page JSON layout
    const jobseekersRes = await fetch(`http://localhost:3000/static/content/jobseekers.json`);
    const jobseekersJson = await jobseekersRes.json();
    // Fetch posts from WorkAmerica blog
    const blogRes = await fetch(`https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3`);
    const blogJson = await blogRes.json();
    // Add fetched data to props
    return {
      landing: jobseekersJson.landing,
      benefits: jobseekersJson.benefits,
      blogPosts: blogJson
    };
  }

  componentDidMount() {
    document.querySelector(`#jobseekers-nav`).classList.add(`nav-active`);
  }

  render() {
    return (
      <main>
        <PageLanding
          source={this.props.landing}
        />
        <PageBlogPosts
          source={this.props.blogPosts}
        />
        <PageBenefits
          source={this.props.benefits}
        />
    </main>
    );
  }
}

Jobseekers.propTypes = {
  landing: PropTypes.object,
  benefits: PropTypes.array,
  blogPosts: PropTypes.array
};
