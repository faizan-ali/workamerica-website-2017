'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLanding = function PageLanding(_ref) {
  var source = _ref.source;

  return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row landing-section justify-content-center' }, _react2.default.createElement('figure', { className: 'header-image' }, _react2.default.createElement('img', { className: 'parallax', src: source.landingImage })), _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-9 align-items-center' }, _react2.default.createElement('div', { className: 'col-md-6 p-4 intro-message' }, _react2.default.createElement('h1', null, source.title), _react2.default.createElement('p', null, source.introduction), _react2.default.createElement(_link2.default, { href: source.mainCTALink }, _react2.default.createElement('button', { className: 'cta-primary' }, source.mainCTA)), source.secondCTA ? _react2.default.createElement(_link2.default, { href: source.secondCTALink }, _react2.default.createElement('button', { className: 'cta-secondary' }, source.secondCTA)) : ''), _react2.default.createElement('div', { className: 'col-md-6 d-flex p-4 align-items-center justify-content-center' }))));
};

exports.default = PageLanding;