'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', { className: 'd-flex container-fluid justify-content-center align-items-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 landing-section error-message justify-content-center align-items-center' }, _react2.default.createElement('div', { className: 'd-flex col-md-6 d-flex p-4 align-items-center justify-content-center mb-4' }, _react2.default.createElement('img', { src: 'static/img/search-certificates.gif', width: '300' })), _react2.default.createElement('div', { className: 'col-md-6 p-4' }, _react2.default.createElement('h2', { className: 'pl-3' }, 'Oops, we can\'t seem to find this page.'), _react2.default.createElement('p', { className: 'pl-3' }, 'We\'re really good at finding qualified, trained and verified job candidates though!'), _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('button', { className: 'cta-primary' }, 'Find out how we can help.')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;