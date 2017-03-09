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

var _PageSocial = require('../components/PageSocial');

var _PageSocial2 = _interopRequireDefault(_PageSocial);

var _PageCallToAction = require('../components/PageCallToAction');

var _PageCallToAction2 = _interopRequireDefault(_PageCallToAction);

var _PageBlogPosts = require('../components/PageBlogPosts');

var _PageBlogPosts2 = _interopRequireDefault(_PageBlogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.querySelector('#employers-nav').classList.add('nav-active');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', null, _react2.default.createElement(_PageLanding2.default, {
        source: this.props.landing
      }), _react2.default.createElement(_PageBenefits2.default, {
        source: this.props.benefits
      }), _react2.default.createElement(_PageSocial2.default, {
        source: this.props.socialProof
      }), _react2.default.createElement(_PageCallToAction2.default, {
        source: this.props.callToAction
      }), _react2.default.createElement(_PageBlogPosts2.default, {
        source: this.props.blogPosts
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var employerRes, employerJson, randomEntry, blogRes, blogJson;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('http://localhost:3000/static/content/employer.json');

              case 2:
                employerRes = _context.sent;
                _context.next = 5;
                return employerRes.json();

              case 5:
                employerJson = _context.sent;
                randomEntry = Math.round(Math.random(employerJson.socialProof.length - 1));
                // Fetch posts from WorkAmerica blog

                _context.next = 9;
                return (0, _isomorphicFetch2.default)('https://blog.workamerica.co/wp-json/wp/v2/posts/?per_page=3');

              case 9:
                blogRes = _context.sent;
                _context.next = 12;
                return blogRes.json();

              case 12:
                blogJson = _context.sent;
                return _context.abrupt('return', {
                  landing: employerJson.landing,
                  benefits: employerJson.benefits,
                  socialProof: employerJson.socialProof[randomEntry],
                  callToAction: employerJson.callToAction,
                  blogPosts: blogJson
                });

              case 14:
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

  return Home;
}(_react2.default.Component);

exports.default = Home;