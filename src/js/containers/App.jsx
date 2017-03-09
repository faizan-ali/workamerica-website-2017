import React, {PropTypes} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const App = props => {
  const {children} = props;

  return (
    <main>
      <Navigation />
        <div className='wrapper'>
          {children}
        </div>
      <Footer />
    </main>
  );
};

App.defaultProps = {
  children: PropTypes.object
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
