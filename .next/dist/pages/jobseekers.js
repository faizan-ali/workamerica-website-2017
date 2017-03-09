'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _PageLanding = require('../components/PageLanding');

var _PageLanding2 = _interopRequireDefault(_PageLanding);

var _PageBenefits = require('../components/PageBenefits');

var _PageBenefits2 = _interopRequireDefault(_PageBenefits);

var _PageBlogPosts = require('../components/PageBlogPosts');

var _PageBlogPosts2 = _interopRequireDefault(_PageBlogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jobseekers = function (_React$Component) {
  (0, _inherits3.default)(Jobseekers, _React$Component);

  function Jobseekers() {
    (0, _classCallCheck3.default)(this, Jobseekers);

    return (0, _possibleConstructorReturn3.default)(this, (Jobseekers.__proto__ || (0, _getPrototypeOf2.default)(Jobseekers)).apply(this, arguments));
  }

  (0, _createClass3.default)(Jobseekers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.querySelector('#jobseekers-nav').classList.add('nav-active');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', null, _react2.default.createElement(_PageLanding2.default, {
        source: this.props.landing
      }), _react2.default.createElement(_PageBlogPosts2.default, {
        source: this.props.blogPosts
      }), _react2.default.createElement(_PageBenefits2.default, {
        source: this.props.benefits
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var jobseekersRes, jobseekersJson, blogRes, blogJson;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('http://localhost:3000/static/content/jobseekers.json');

              case 2:
                jobseekersRes = _context.sent;
                _context.next = 5;
                return jobseekersRes.json();

              case 5:
                jobseekersJson = _context.sent;
                _context.next = 8;
                return (0, _isomorphicFetch2.default)('https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3');

              case 8:
                blogRes = _context.sent;
                _context.next = 11;
                return blogRes.json();

              case 11:
                blogJson = _context.sent;
                return _context.abrupt('return', {
                  landing: jobseekersJson.landing,
                  benefits: jobseekersJson.benefits,
                  blogPosts: blogJson
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Jobseekers;
}(_react2.default.Component);

exports.default = Jobseekers;