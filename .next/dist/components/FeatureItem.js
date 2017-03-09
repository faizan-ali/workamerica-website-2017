'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Link from 'next/link';

var FeatureItem = function FeatureItem(_ref) {
  var featureTitle = _ref.featureTitle,
      featureContent = _ref.featureContent,
      featureImage = _ref.featureImage;

  return _react2.default.createElement('article', { className: 'row col-md-4 p-4 mb-4 justify-content-center align-items-center' }, _react2.default.createElement('h2', { className: 'row col-md-12 justify-content-center' }, featureTitle), _react2.default.createElement('div', { className: 'row col-md-12 justify-content-center feature-image-container' }, _react2.default.createElement('img', { className: 'feature-image', src: featureImage, alt: featureTitle, width: '200', height: '200' })), _react2.default.createElement('p', { className: 'row col-md-12 justify-content-center' }, featureContent));
};

exports.default = FeatureItem;