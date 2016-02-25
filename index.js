'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentList = require('@economist/component-list');

var _economistComponentList2 = _interopRequireDefault(_economistComponentList);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentBalloon = require('@economist/component-balloon');

var _economistComponentBalloon2 = _interopRequireDefault(_economistComponentBalloon);

var Accordion = (function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    _React$Component.apply(this, arguments);
  }

  Accordion.prototype.renderListContent = function renderListContent(array, level) {
    var _this = this;

    level++;

    return array.map(function (item, i) {
      var listItem = '';
      var classNameList = ['accordion__link'];
      var commonProps = {
        href: item.href,
        key: '' + i
      };
      // Spread icon props.
      if (item.icon || item.children && item.children.length > 0) {
        commonProps.icon = _extends({}, item.icon, {
          size: '28px'
        });
      }
      // Add the arrow down for expandable links
      if (item.children && item.children.length > 0) {
        commonProps.icon.icon = "down";
      }

      if (item.i13nModel) {
        commonProps.i13nModel = item.i13nModel;
      }

      if (item.target) {
        commonProps.target = item.target;
      }

      if (item.target === "_blank") {
        classNameList.push('accordion__link--external');
      }
      // By default we want the component unstyled.
      // But overridable via prop.
      commonProps.unstyled = item.unstyled !== false;

      if (item.className) {
        var list = item.className.split(" ");
        classNameList = classNameList.concat(list);
      }
      commonProps.className = '' + classNameList.join(' ');

      listItem = _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        commonProps,
        item.title
      );
      // Recursive part
      if (item.children && item.children.length > 0) {
        listItem = _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            prefix: 'accordionExpander',
            className: 'accordion__level' + level,
            unstyled: true,
            key: 'level' + level + '-' + i,
            trigger: listItem
          },
          _react2['default'].createElement(
            _economistComponentList2['default'],
            null,
            _this.renderListContent(item.children, level)
          )
        );
      }
      return listItem;
    });
  };

  Accordion.prototype.render = function render() {
    var context = this.props.list;
    var level = 0;
    return _react2['default'].createElement(
      _economistComponentList2['default'],
      { className: 'accordion' },
      this.renderListContent(context, level)
    );
  };

  _createClass(Accordion, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        list: _react2['default'].PropTypes.array.isRequired
      };
    }
  }]);

  return Accordion;
})(_react2['default'].Component);

exports['default'] = Accordion;
module.exports = exports['default'];