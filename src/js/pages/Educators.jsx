import React from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';

import Loading from '../components/Loading';

export default class Educators extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector(`#educators-nav`).classList.add(`nav-active`);
  }

  componentWillUnmount() {
    document.querySelector(`#educators-nav`).classList.remove(`nav-active`);
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
      if (data.socialProof.length > 1) {
        const randomEntry = Math.round(Math.random() * (data.socialProof.length - 1));
        this.setState({socialProof: data.socialProof[randomEntry]});
      } else {
        this.setState({socialProof: data.socialProof[0]});
      }
      this.setState({
        landing: data.landing,
        benefits: data.benefits,
        callToAction: data.callToAction,
      });
    });
  }

  render() {
    const {landing, benefits, socialProof, callToAction} = this.state;
    if (landing && benefits && socialProof && callToAction) {
      return (
        <main>
          <PageLanding
            source={landing}
            center={true}
          />
          <PageBenefits
            source={benefits}
          />
          <PageSocial
            source={socialProof}
          />
          <PageCallToAction
            source={callToAction}
          />
      </main>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}
