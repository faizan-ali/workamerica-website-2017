'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  return _react2.default.createElement('header', { className: 'container-fluid fixed-navigation' }, _react2.default.createElement('div', { className: 'row topnav justify-content-center' }, _react2.default.createElement('nav', { className: 'col-sm-10 col-xl-9 d-flex align-items-center' }, _react2.default.createElement('ul', { className: 'col d-flex justify-content-end align-items-center' }, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about-us' }, _react2.default.createElement('a', null, 'About us'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/contact-us' }, _react2.default.createElement('a', null, 'Contact us'))), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'http://blog.workamerica.co/' }, 'Blog')), _react2.default.createElement('li', { className: 'topnav-login' }, _react2.default.createElement('a', { href: 'https://secure.workamerica.co' }, 'Login'))))), _react2.default.createElement('div', { className: 'row mainnav justify-content-center' }, _react2.default.createElement('nav', { className: 'col-sm-10 col-xl-9 d-flex align-items-center justify-content-between justify-content-md-start' }, _react2.default.createElement('img', { src: 'static/svg/logo.svg', alt: 'WorkAmerica', className: 'logo' }), _react2.default.createElement('ul', { className: 'nav navbar-nav hidden-sm-down flex-row' }, _react2.default.createElement('li', { className: 'nav-item', id: 'employers-nav' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', { className: 'nav-link' }, 'Employers'))), _react2.default.createElement('li', { className: 'nav-item', id: 'educators-nav' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/educators' }, _react2.default.createElement('a', { className: 'nav-link' }, 'Educators'))), _react2.default.createElement('li', { className: 'nav-item', id: 'jobseekers-nav' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/jobseekers' }, _react2.default.createElement('a', { className: 'nav-link' }, 'Job Seekers')))), _react2.default.createElement('ul', { className: 'nav navbar-nav hidden-md-up' }, _react2.default.createElement('li', { className: 'nav-item dropdown' }, _react2.default.createElement('a', { 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' }, _react2.default.createElement('i', { 'aria-hidden': 'true', className: 'fa fa-bars' })), _react2.default.createElement('div', { className: 'dropdown-menu dropdown-menu-right' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', null, _react2.default.createElement('button', { className: 'dropdown-item', type: 'button' }, 'Employers'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/educators' }, _react2.default.createElement('a', null, _react2.default.createElement('button', { className: 'dropdown-item', type: 'button' }, 'Educators'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/jobseekers' }, _react2.default.createElement('a', null, _react2.default.createElement('button', { className: 'dropdown-item', type: 'button' }, 'Job Seekers')))))))));
};

exports.default = Navigation;