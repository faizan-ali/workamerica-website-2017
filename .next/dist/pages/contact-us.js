'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRecaptcha = require('react-recaptcha');

var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Link from 'next/link';

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  (0, _createClass3.default)(Error, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);

  function Error(props) {
    (0, _classCallCheck3.default)(this, Error);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).call(this, props));

    _this.handleSendMessage = function () {
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          email = _this$state.email,
          phone = _this$state.phone,
          message = _this$state.message,
          noRobot = _this$state.noRobot;

      if (firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && message.length !== 0 && noRobot) {
        var form = new FormData();

        form.append('firstName', firstName);
        form.append('lastName', lastName);
        form.append('email', email);
        form.append('phone', phone);
        form.append('message', message);

        fetch('https://www.api.workamerica.co/contact/footer', {
          method: 'POST',
          body: form
        });
        console.log('send');
      } else {
        if (firstName.length <= 0) {
          document.querySelector('input[name="firstName"]').classList.add('empty-field');
        }
        if (lastName.length <= 0) {
          document.querySelector('input[name="lastName"]').classList.add('empty-field');
        }
        if (email.length <= 0) {
          document.querySelector('input[name="email"]').classList.add('empty-field');
        }
        if (message.length <= 0) {
          document.querySelector('textarea[name="message"]').classList.add('empty-field');
        }
        if (!noRobot) {
          _this.setState({ showErrCaptcha: true });
        }
        _this.setState({ showErr: true });
      }
    };

    _this.handleFirstNameChange = function (e) {
      _this.setState({ firstName: e.target.value });
      if (e.target.value.length <= 0) {
        document.querySelector('input[name="firstName"]').classList.add('empty-field');
      }
    };

    _this.handleLastNameChange = function (e) {
      _this.setState({ lastName: e.target.value });
      if (e.target.value.length <= 0) {
        document.querySelector('input[name="lastName"]').classList.add('empty-field');
      }
    };

    _this.handleEmailChange = function (e) {
      _this.setState({ email: e.target.value });
      if (e.target.value.length <= 0) {
        document.querySelector('input[name="email"]').classList.add('empty-field');
      }
    };

    _this.handlePhoneChange = function (e) {
      _this.setState({ phone: e.target.value });
    };

    _this.handleMessageChange = function (e) {
      _this.setState({ message: e.target.value });
      if (e.target.value.length <= 0) {
        document.querySelector('textarea[name="message"]').classList.add('empty-field');
      }
    };

    _this.handleRecaptcha = function () {
      console.log('Recaptcha loaded.');
    };

    _this.handleVerify = function () {
      console.log('I am not a robot.');
      _this.setState({ noRobot: true });
    };

    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      showErr: false,
      showErrCaptcha: false,
      noRobot: false
    };
    return _this;
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row contact-us-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center about-message' }, _react2.default.createElement('h1', { className: 'row col-xl-12' }, 'Contact us'), _react2.default.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat leo. Suspendisse posuere elit augue, ut iaculis enim elementum sed. Phasellus ligula diam, fringilla non molestie sed, vulputate et odio.'))), _react2.default.createElement('div', { className: 'row blog-section justify-content-center' }, _react2.default.createElement('div', { className: 'row col-sm-10 col-xl-7 align-items-center justify-content-center contact-form' }, _react2.default.createElement('div', { className: 'row col-xl-12' }, _react2.default.createElement('div', { className: 'col-md-6 col-sm-12 pb-4' }, 'First Name*', _react2.default.createElement('input', { type: 'text', placeholder: 'First Name', name: 'firstName', className: 'col-xl-12', value: this.state.firstName, onChange: this.handleFirstNameChange, onBlur: this.handleFirstNameChange })), _react2.default.createElement('div', { className: 'col-md-6 col-sm-12 pb-4' }, 'Last Name*', _react2.default.createElement('input', { type: 'text', placeholder: 'Last Name', name: 'lastName', className: 'col-xl-12', value: this.state.lastName, onChange: this.handleLastNameChange, onBlur: this.handleLastNameChange }))), _react2.default.createElement('div', { className: 'row col-xl-12' }, _react2.default.createElement('div', { className: 'col-md-6 col-sm-12 pb-4' }, 'E-mail*', _react2.default.createElement('input', { type: 'email', placeholder: 'Email Address', name: 'email', className: 'col-xl-12', value: this.state.email, onChange: this.handleEmailChange, onBlur: this.handleEmailChange })), _react2.default.createElement('div', { className: 'col-md-6 col-sm-12 pb-4' }, 'Phone Number', _react2.default.createElement('input', { type: 'number', placeholder: 'Phone Number', name: 'phone', className: 'col-xl-12', value: this.state.phone, onChange: this.handlePhoneChange }))), _react2.default.createElement('div', { className: 'row col-xl-12' }, _react2.default.createElement('div', { className: 'col-xl-12 pb-4' }, 'Message*', _react2.default.createElement('textarea', { placeholder: 'Message', name: 'message', className: 'col-xl-12 message', value: this.state.message, onChange: this.handleMessageChange, onBlur: this.handleMessageChange }))), _react2.default.createElement('div', { className: 'row col-xl-12' }, _react2.default.createElement('div', { className: 'col-xl-12 pb-4' }, _react2.default.createElement(_reactRecaptcha2.default, {
        sitekey: '6Ld7QBgUAAAAAGbG7koI5ZKmNT6UFLg9DE5BR_tB',
        render: 'explicit',
        verifyCallback: this.handleVerify,
        onloadCallback: this.handleRecaptcha
      })), _react2.default.createElement('div', { className: 'col-xl-12 pb-4' }, _react2.default.createElement('button', { className: 'cta-primary send', onClick: this.handleSendMessage }, 'Send message')), _react2.default.createElement('div', { className: 'col-xl-12 pb-4 error' }, this.state.showErrCaptcha ? 'Please check the reCAPTCHA field.' : ''), _react2.default.createElement('div', { className: 'col-xl-12 pb-4 error' }, this.state.showErr ? 'Please fill in all required fields.' : ''), _react2.default.createElement('div', { className: 'col-xl-12 pb-4' }, '* fields are required.')))));
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;