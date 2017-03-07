import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';
import PageBlogPosts from '../components/PageBlogPosts';

export default class Home extends React.Component {
  static async getInitialProps () {
    // Fetch Employer Landing JSON layout
    const landingRes = await fetch(`http://localhost:3000/static/content/employerLanding.json`);
    const landingJson = await landingRes.json();
    // Fetch Employer Benefits JSON layout
    const benefitsRes = await fetch(`http://localhost:3000/static/content/employerBenefits.json`);
    const benefitsJson = await benefitsRes.json();
    // Fetch Social Proof JSON layout
    const socialProofRes = await fetch(`http://localhost:3000/static/content/employerSocialProof.json`);
    const socialProofJson = await socialProofRes.json();
    const randomEntry = Math.round(Math.random(socialProofJson.socialProof.length - 1));
    // Fetch Employer Landing JSON layout
    const callToActionRes = await fetch(`http://localhost:3000/static/content/employerCallToAction.json`);
    const callToActionJson = await callToActionRes.json();
    // Fetch posts from WorkAmerica blog
    const blogRes = await fetch(`https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3`);
    const blogJson = await blogRes.json();
    // Add fetched data to props
    return {
      landing: landingJson,
      benefits: benefitsJson.benefits,
      socialProof: socialProofJson.socialProof[randomEntry],
      callToAction: callToActionJson,
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
