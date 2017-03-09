'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageSocial = function PageSocial(_ref) {
  var source = _ref.source;

  return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row social-section' }, _react2.default.createElement('figure', { className: 'social-image-container' }, _react2.default.createElement('img', { className: 'social-image', src: source.picture })), _react2.default.createElement('div', { className: 'row col-xl-3 offset-xl-3 col-md-4 offset-md-2 p-4 social-quote align-items-center' }, _react2.default.createElement('h1', null, source.quote), _react2.default.createElement('p', null, source.quoteFrom, _react2.default.createElement('br', null), _react2.default.createElement('span', null, source.quotePosition)))));
};

exports.default = PageSocial;