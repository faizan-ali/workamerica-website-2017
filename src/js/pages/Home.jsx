/**
  * Creates the Home/Employers page.
  * @exports Home Renders the Home/Employers page.
 */

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

  /**
    * Lifecycle method when component has rendered.
    * Scroll To Top of page & set active nav.
   */
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector(`#employers-nav`).classList.add(`nav-active`);
  }

  /**
    * Lifecycle method when component is going to unmount.
    * Unset active nav.
   */
  componentWillUnmount() {
    document.querySelector(`#employers-nav`).classList.remove(`nav-active`);
  }

  /**
    * Lifecycle method before component has rendered.
    * Fetch Page content and blog content.
   */
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
        const randomEntry = Math.round(Math.random() * (data.socialProof.length - 1));
        console.log(randomEntry);
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
    const blogUrl = `https://blog.workamerica.co/wp-json/wp/v2/posts/?filter[category_name]=for-employers&per_page=3`;
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
            end={true}
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
