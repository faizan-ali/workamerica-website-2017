import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';

import PageLanding from '../components/PageLanding';
import PageBenefits from '../components/PageBenefits';

export default class Home extends React.Component {
  static async getInitialProps () {
    const res = await fetch(`http://localhost:3000/static/content/employerBenefits.json`);
    const benefitsJson = await res.json();
    return {benefits: benefitsJson.benefits};
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
    </main>
    );
  }
}

Home.propTypes = {
  benefits: PropTypes.array,
};
