'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentSectionsCardContext = require('@economist/component-sections-card/context');

var _economistComponentSectionsCardContext2 = _interopRequireDefault(_economistComponentSectionsCardContext);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

// Force media links to use icon as background.
_economistComponentSectionsCardContext2['default'].media.map(function (mediaLink) {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta
  };
  return mediaLink;
});

var accordionContext = [{
  title: 'Sections',
  href: 'http://www.economist.com/sections',
  children: _economistComponentSectionsCardContext2['default'].sections
}, {
  title: 'Blogs',
  href: 'http://www.economist.com/blogs',
  children: _economistComponentSectionsCardContext2['default'].blogs
}].concat(_economistComponentSectionsCardContext2['default'].media, [{
  title: 'Print Edition',
  href: 'http://www.economist.com/printedition/'
}, {
  title: 'Products',
  href: 'http://www.economist.com/digital'
}, {
  title: 'Subscribe',
  href: 'https://subscriptions.economist.com/',
  target: '_blank',
  unstyled: false
}]);

exports['default'] = _react2['default'].createElement(_index2['default'], { list: accordionContext });
module.exports = exports['default'];