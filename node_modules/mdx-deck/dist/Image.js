'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _styledComponents2.default.div([], {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}, function (props) {
  return {
    backgroundImage: 'url(' + props.src + ')'
  };
}, _styledSystem.width, _styledSystem.height, function (props) {
  return props.css;
});

Image.defaultProps = {
  width: '100vw',
  height: '100vh'
};

exports.default = Image;