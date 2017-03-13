import React from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';
import PageBlogPosts from '../components/PageBlogPosts';

import Loading from '../components/Loading';

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
    const {landing, benefits, blogPosts} = this.state;
    if (landing && benefits && blogPosts) {
      return (
        <main>
          <PageLanding
            source={landing}
          />
          <PageBlogPosts
            source={blogPosts}
          />
          <PageBenefits
            source={benefits}
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
