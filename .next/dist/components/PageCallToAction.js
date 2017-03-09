'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageCallToAction = function PageCallToAction(_ref) {
  var source = _ref.source;

  return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row cta-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center justify-content-center' }, _react2.default.createElement('div', { className: 'row col-lg-12 justify-content-center' }, _react2.default.createElement('h1', null, source.title), _react2.default.createElement('p', null, source.introduction), _react2.default.createElement(_link2.default, { href: source.mainCTALink }, _react2.default.createElement('button', { className: 'cta-primary' }, source.mainCTA)), source.secondCTA ? _react2.default.createElement(_link2.default, { href: source.secondCTALink }, _react2.default.createElement('button', { className: 'cta-secondary' }, source.secondCTA)) : ''))));
};

exports.default = PageCallToAction;