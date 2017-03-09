'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FeatureItem = require('../components/FeatureItem');

var _FeatureItem2 = _interopRequireDefault(_FeatureItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BenefitItem = function (_React$Component) {
  (0, _inherits3.default)(BenefitItem, _React$Component);

  function BenefitItem(props, context) {
    (0, _classCallCheck3.default)(this, BenefitItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BenefitItem.__proto__ || (0, _getPrototypeOf2.default)(BenefitItem)).call(this, props, context));

    _this.handleLearnMoreClick = function () {
      if (_this.state.displayFeatures) {
        _this.setState({ displayFeatures: false });
      } else {
        _this.setState({ displayFeatures: true });
      }
    };

    _this.state = {
      displayFeatures: false
    };
    return _this;
  }

  (0, _createClass3.default)(BenefitItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('article', { className: 'row benefit-item' }, _react2.default.createElement('div', { className: 'col-md-6 d-flex p-4 align-items-center justify-content-center mb-4' }, _react2.default.createElement('img', { src: this.props.image, alt: 'certified candidates', width: '250' })), _react2.default.createElement('div', { className: 'col-md-6 p-4 mb-4' }, _react2.default.createElement('h2', null, this.props.title), _react2.default.createElement('p', null, this.props.description), _react2.default.createElement('span', { className: 'learn-more', onClick: this.handleLearnMoreClick }, !this.state.displayFeatures ? _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'fa fa-plus-square-o', 'aria-hidden': 'true' }), ' learn more') : _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'fa fa-minus-square-o', 'aria-hidden': 'true' }), ' see less'))), this.state.displayFeatures ? _react2.default.createElement('div', { className: 'row col-md-12 p-4 mb-4 align-items-center justify-content-center enter' }, this.props.features.map(function (f) {
        return _react2.default.createElement(_FeatureItem2.default, (0, _extends3.default)({}, f, { key: Math.random(1000) }));
      })) : '');
    }
  }]);

  return BenefitItem;
}(_react2.default.Component);
//import Link from 'next/link';

exports.default = BenefitItem;