import React from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageSocial from '../components/PageSocial';
import PageCallToAction from '../components/PageCallToAction';
import PageBlogPosts from '../components/PageBlogPosts';

import Loading from '../components/Loading';

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount () {
    // fetch page content
    const dataUrl = `/static/content/employer.json`;
    fetch(dataUrl)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server`);
      }
      return res.json();
    })
    .then(data => {
      if (data.socialProof.length > 1) {
        const randomEntry = Math.round(Math.random(data.socialProof.length - 1));
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

    // fetch blog posts
    const blogUrl = `https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3`;
    fetch(blogUrl).then(res => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server`);
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        blogPosts: data
      });
    });
  }

  render() {
    const {landing, benefits, socialProof, callToAction, blogPosts} = this.state;
    if (landing && benefits && socialProof && callToAction && blogPosts) {
      return (
        <main>
          <PageLanding
            source={landing}
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
          <PageBlogPosts
            source={blogPosts}
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
