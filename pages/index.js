import React from 'react';
import PageLanding from '../components/PageLanding';

const Home = () => {
  return (
    <PageLanding
      title='Lorem ipsum dolor sit amet.'
      introduction='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.'
      mainCTA='Start your free trial!'
      mainCTALink='/signup'
      secondCTA='Learn more.'
      secondCTALink='#'
    />
  );
};

export default Home;
