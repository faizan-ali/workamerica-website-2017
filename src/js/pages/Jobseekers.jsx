import React from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageBlogPosts from '../components/PageBlogPosts';

export default class Jobseekers extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentWillMount () {
    // fetch page content
    const dataUrl = `/static/content/jobseekers.json`;
    fetch(dataUrl)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server`);
      }
      return res.json();
    })
    .then(data => {
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
    return (
      <main>
        <PageLanding
          source={this.state.landing}
        />
        <PageBlogPosts
          source={this.state.blogPosts}
        />
        <PageBenefits
          source={this.state.benefits}
        />
      </main>
    );
  }
}
