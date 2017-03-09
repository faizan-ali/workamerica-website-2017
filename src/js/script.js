import {render} from 'react-dom';
import router from './router/';

const init = () => {

  render(
    router,
    document.querySelector(`.wrapper`)
  );

};

init();
