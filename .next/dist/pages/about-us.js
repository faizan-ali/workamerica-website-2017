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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Link from 'next/link';

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row about-us-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center about-message' }, _react2.default.createElement('h1', { className: 'row col-xl-12' }, 'About us'), _react2.default.createElement('h2', null, 'Welcome to WorkAmerica, the exclusive home for professionals in the trades.'), _react2.default.createElement('p', null, 'We are on a mission to employ each and every American that holds a credential in the trades, by bridging the skills gap. When you join WorkAmerica, you connect to employers, job opportunities, candidates, training institutions and insights that help you excel in your career.'))), _react2.default.createElement('div', { className: 'row blog-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center justify-content-center' }, _react2.default.createElement('h1', null, 'We are flipping recruiting on its head'), _react2.default.createElement('p', null, 'We have employers search for candidates, instead of having candidates wade through hundreds of job applications, guessing if they are a good fit for the position. And since we only allow trained and credentialed talent to join WorkAmerica, employers no longer have to dig through thousands of unqualified resumes to find that right employee.'))), _react2.default.createElement('div', { className: 'row blog-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center justify-content-center' }, _react2.default.createElement('h1', null, 'We are empowering workers'), _react2.default.createElement('p', null, 'By bringing transparency and fluidity to recruiting in the skilled trades, we empower workers to find the best job for them. Receiving more job opportunities from more companies allows workers to maximize their earning potential, find a company culture they fit in with, and take full advantage of their training and credentials.            '))));
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