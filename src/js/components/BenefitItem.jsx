import React, {PropTypes} from 'react';
//import Link from 'next/link';

import FeatureItem from './FeatureItem';

export default class BenefitItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      displayFeatures: false
    };
  }

  handleLearnMoreClick = () => {
    if (this.state.displayFeatures) {
      this.setState({displayFeatures: false});
    } else {
      this.setState({displayFeatures: true});
    }
  }

  render() {
    return (
      <article className='row benefit-item justify-content-center'>
        <div className='col-md-5 d-flex p-4 align-items-center justify-content-center mb-4'>
          <img src={this.props.image} alt='certified candidates' width='250' />
        </div>
        <div className='col-md-5 p-4 mb-4'>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.description}
          </p>
          <span className='learn-more' onClick={this.handleLearnMoreClick}>
            {!this.state.displayFeatures ?
            <span><i className='fa fa-plus-square-o' aria-hidden='true'></i> learn more</span>
            :
            <span><i className='fa fa-minus-square-o' aria-hidden='true'></i> see less</span>}
          </span>
        </div>
        {this.state.displayFeatures ?
          <div className='row col-md-12 p-4 mb-4 align-items-start justify-content-start enter features'>
            {this.props.features.map(f => <FeatureItem {...f}  key={Math.random(1000)} />)}
          </div> :
        ``}
      </article>
    );
  }
}

BenefitItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  features: PropTypes.array,
};

BenefitItem.defaultProps = {
  title: `Empty Benefit Title`,
  description: `Empty Benefit Description`,
  image: `No Image Provided`,
  features: [`No Features Provided`],
};
