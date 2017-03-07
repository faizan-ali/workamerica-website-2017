import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';
import PageBlogPosts from '../components/PageBlogPosts';

export default class Home extends React.Component {
  static async getInitialProps () {
    // Fetch Employer Benefits JSON layout
    const benefitsRes = await fetch(`http://localhost:3000/static/content/employerBenefits.json`);
    const benefitsJson = await benefitsRes.json();
    // Fetch Social Proof JSON layout
    const socialProofRes = await fetch(`http://localhost:3000/static/content/employerSocialProof.json`);
    const socialProofJson = await socialProofRes.json();
    const randomEntry = Math.round(Math.random(socialProofJson.socialProof.length - 1));
    // Fetch posts from WorkAmerica blog
    const blogRes = await fetch(`https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3`);
    const blogJson = await blogRes.json();
    // Add fetched data to props
    return {
      benefits: benefitsJson.benefits,
      socialProof: socialProofJson.socialProof[randomEntry],
      blogPosts: blogJson
    };
  }

  render() {
    return (
      <main>
        <PageLanding
          title='Lorem ipsum dolor sit amet.'
          introduction='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.'
          mainCTA='Start your free trial!'
          mainCTALink='/signup'
          secondCTA='Learn more.'
          secondCTALink='#'
          landingImage='static/img/header.jpg'
        />
        <PageBenefits
          source={this.props.benefits}
        />
        <PageSocial
          source={this.props.socialProof}
        />
        <PageCallToAction
          title='Lorem ipsum dolor sit amet.'
          introduction='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.'
          mainCTA='Start your free trial!'
          mainCTALink='/signup'
          secondCTA='Contact us.'
          secondCTALink='/contact-us'
        />
        <PageBlogPosts
          source={this.props.blogPosts}
        />
    </main>
    );
  }
}

Home.propTypes = {
  benefits: PropTypes.array,
  socialProof: PropTypes.object,
  blogPosts: PropTypes.array
};
