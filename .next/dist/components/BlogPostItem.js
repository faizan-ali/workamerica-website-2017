'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureItem = function FeatureItem(_ref) {
  var link = _ref.link,
      title = _ref.title;

  return _react2.default.createElement('a', { href: link, target: '_blank', className: 'd-flex col-md-4 blog-article-site justify-content-center align-items-center' }, _react2.default.createElement('article', { className: 'd-flex col-md-12 justify-content-center align-items-center' }, _react2.default.createElement('h2', null, title.rendered)));
};

exports.default = FeatureItem;