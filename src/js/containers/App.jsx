import React, {PropTypes} from 'react';
import Navigation from '../components/Navigation';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

const App = props => {
  const {children} = props;

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
