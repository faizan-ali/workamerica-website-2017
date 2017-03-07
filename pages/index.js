import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';
import PageBlogPosts from '../components/PageBlogPosts';

export default class Home extends React.Component {
  static async getInitialProps () {
    // Fetch Employer Page JSON layout
    const employerRes = await fetch(`http://localhost:3000/static/content/employer.json`);
    const employerJson = await employerRes.json();
    const randomEntry = Math.round(Math.random(employerJson.socialProof.length - 1));
    // Fetch posts from WorkAmerica blog
    const blogRes = await fetch(`https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3`);
    const blogJson = await blogRes.json();
    // Add fetched data to props
    return {
      landing: employerJson.landing,
      benefits: employerJson.benefits,
      socialProof: employerJson.socialProof[randomEntry],
      callToAction: employerJson.callToAction,
      blogPosts: blogJson
    };
  }

  render() {
    return (
      <main>
        <PageLanding
          source={this.props.landing}
        />
        <PageBenefits
          source={this.props.benefits}
        />
        <PageSocial
          source={this.props.socialProof}
        />
        <PageCallToAction
          source={this.props.callToAction}
        />
        <PageBlogPosts
          source={this.props.blogPosts}
        />
    </main>
    );
  }
}

Home.propTypes = {
  landing: PropTypes.object,
  benefits: PropTypes.array,
  socialProof: PropTypes.object,
  callToAction: PropTypes.object,
  blogPosts: PropTypes.array
};
