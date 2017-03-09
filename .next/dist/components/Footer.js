'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', { className: 'd-flex container-fluid main-footer align-items-start justify-content-center' }, _react2.default.createElement('nav', { className: 'row col-sm-10 col-xl-9' }, _react2.default.createElement('div', { className: 'row col-lg-5 col-sm-12' }, _react2.default.createElement('div', { className: 'row col-lg-12 pb-2' }, _react2.default.createElement('img', { src: 'static/svg/logo.svg', alt: 'WorkAmerica', className: 'logo' })), _react2.default.createElement('div', { className: 'col-lg-6 col-sm-6 pt-4' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Employers'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/educators' }, _react2.default.createElement('a', null, 'Educators'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/jobseekers' }, _react2.default.createElement('a', null, 'Job Seekers'))))), _react2.default.createElement('div', { className: 'col-lg-6 col-sm-6 p-4' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'http://blog.workamerica.com/', target: '_blank' }, 'Blog')), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about-us' }, _react2.default.createElement('a', null, 'About us'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/contact-us' }, _react2.default.createElement('a', null, 'Contact us')))))), _react2.default.createElement('div', { className: 'row col-lg-4 newsletter-signup align-items-start justify-content-start' }, _react2.default.createElement('h2', { className: 'col-md-12 justify-content-md-center justify-content-lg-start pb-4' }, 'Stay up to date!'), _react2.default.createElement('p', { className: 'col-md-12 justify-content-md-center justify-content-lg-start pb-4' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'), _react2.default.createElement('div', { className: 'col-md-12 justify-content-md-center justify-content-lg-start pb-4' }, _react2.default.createElement('input', { type: 'text', placeholder: 'Email adress' }), _react2.default.createElement('button', { className: 'submit-newsletter' }, 'Go'))), _react2.default.createElement('div', { className: 'row col-lg-3 col-md-12 col-sm-12 social-icons align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center' }, _react2.default.createElement('a', { href: 'https://www.linkedin.com/company/workamerica', target: '_blank' }, _react2.default.createElement('i', { className: 'fa fa-linkedin-square', 'aria-hidden': 'true' })), _react2.default.createElement('a', { href: 'https://www.facebook.com/workamerica.co/', target: '_blank' }, _react2.default.createElement('i', { className: 'fa fa-facebook-square', 'aria-hidden': 'true' })), _react2.default.createElement('a', { href: 'https://twitter.com/work_america', target: '_blank' }, _react2.default.createElement('i', { className: 'fa fa-twitter-square', 'aria-hidden': 'true' })))));
};

exports.default = Footer;