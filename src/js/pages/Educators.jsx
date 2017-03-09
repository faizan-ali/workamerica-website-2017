import React from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';

export default class Educators extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentWillMount () {
    // fetch page content
    const dataUrl = `/static/content/educators.json`;
    fetch(dataUrl)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server`);
      }
      return res.json();
    })
    .then(data => {
      const randomEntry = Math.round(Math.random(data.socialProof.length - 1));
      this.setState({
        landing: data.landing,
        benefits: data.benefits,
        socialProof: data.socialProof[randomEntry],
        callToAction: data.callToAction,
      });
    });
  }

  render() {
    return (
      <main>
        <PageLanding
          source={this.state.landing}
        />
        <PageBenefits
          source={this.state.benefits}
        />
        <PageSocial
          source={this.state.socialProof}
        />
        <PageCallToAction
          source={this.state.callToAction}
        />
    </main>
    );
  }
}
