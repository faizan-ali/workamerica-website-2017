/**
  * Creates a single benefit item
  * @exports BenefitItem Renders the benefit item.
 */

import React, {PropTypes} from 'react';
import FeatureItem from './FeatureItem';

export default class BenefitItem extends React.Component {

  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {boolean} displayFeatures Boolean to show/hide features
     */
    this.state = {
      displayFeatures: false
    };
  }

  /**
    * Handle learn more click event
   */
  handleLearnMoreClick = () => {
    if (this.state.displayFeatures) {
      this.setState({displayFeatures: false});
    } else {
      this.setState({displayFeatures: true});
    }
  }

  render() {
    return (
      <article className='col-md-12 d-flex flex-wrap benefit-item justify-content-center'>
        <div className='row col-md-5 p-4 align-items-center justify-content-center mb-4'>
          <video autoPlay loop height='150'>
            <source src={`static/img/${this.props.image}.mp4`} type='video/mp4' />
          </video>
        </div>
        <div className='row col-md-5 p-4 mb-4'>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.description}
          </p>
          {this.props.features.length > 0 ?
            <span className='learn-more' onClick={this.handleLearnMoreClick}>
              {!this.state.displayFeatures ?
              <span><i className='fa fa-plus-square-o' aria-hidden='true'></i> learn more</span>
              :
              <span><i className='fa fa-minus-square-o' aria-hidden='true'></i> see less</span>}
            </span>
          :
            ``
          }

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

/**
  * PropTypes
  * @property {string} title The title of the benefit item.
  * @property {string} description The discription of the benefit item.
  * @property {string} image The path to the image/animation for the benefit item.
  * @property {array} features An array of features for the benefit item (can be an empty array).
 */
BenefitItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  features: PropTypes.array,
};

BenefitItem.defaultProps = {
  title: ``,
  description: ``,
  image: ``,
  features: [],
};
