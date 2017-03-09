'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlogPostItem = require('../components/BlogPostItem');

var _BlogPostItem2 = _interopRequireDefault(_BlogPostItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBlogPosts = function PageBlogPosts(_ref) {
  var source = _ref.source;

  return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row blog-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center justify-content-center' }, _react2.default.createElement('h1', null, 'Blog lorem ipsum dolor sit amet.')), _react2.default.createElement('div', { className: 'row col-lg-12 justify-content-center p-0' }, source.map(function (s) {
    return _react2.default.createElement(_BlogPostItem2.default, (0, _extends3.default)({}, s, { key: Math.random(1000) }));
  }))));
};

exports.default = PageBlogPosts;