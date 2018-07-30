'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#0af';

exports.default = _extends({}, _base2.default, {
  font: '"Roboto Condensed", system-ui, sans-serif',
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: '#fff',
    background: '#000',
    link: blue,
    pre: blue,
    preBackground: '#111',
    code: blue
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
});