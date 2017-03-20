import React, {PropTypes} from 'react';
import Navigation from '../components/Navigation';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

const App = props => {

  const {children} = props;

  let userKeys = [];
  const loveYourIntern = `38,38,40,40,37,39,37,39,66,65`;

  document.onkeydown = function(e) {
    userKeys.push(e.keyCode);

    if (userKeys.toString().indexOf(loveYourIntern) >= 0) {
      alert(`🌹 are red, violets are 💙, love your intern, he loves you too! 😘 xoxo Kevin, Spring 2017`);
      userKeys = [];
    }
  };

  return (
    <div className='container-fluid p-0'>
      <div className='col-xl-2 col-md-3 hidden-sm-down p-0'>
        <Navigation />
      </div>
      <div className='col-md-12 hidden-md-up p-0'>
        <MobileNav />
      </div>
      <div className='col-xl-12 p-0'>
        {children}
      </div>
      <div className='col-xl-12 p-0'>
        <Footer />
      </div>
    </div>
  );
};

App.defaultProps = {
  children: PropTypes.object
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
