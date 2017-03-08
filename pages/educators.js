import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';

export default class Educators extends React.Component {
  static async getInitialProps () {
    // Fetch Employer Page JSON layout
    const educatorsRes = await fetch(`http://localhost:3000/static/content/educators.json`);
    const educatorsJson = await educatorsRes.json();
    const randomEntry = Math.round(Math.random(educatorsJson.socialProof.length - 1));
    // Add fetched data to props
    return {
      landing: educatorsJson.landing,
      benefits: educatorsJson.benefits,
      socialProof: educatorsJson.socialProof[randomEntry],
      callToAction: educatorsJson.callToAction
    };
  }

  componentDidMount() {
    document.querySelector(`#educators-nav`).classList.add(`nav-active`);
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
    </main>
    );
  }
}

Educators.propTypes = {
  landing: PropTypes.object,
  benefits: PropTypes.array,
  socialProof: PropTypes.object,
  callToAction: PropTypes.object
};
