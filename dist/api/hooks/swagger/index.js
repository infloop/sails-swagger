'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _marlinspike = require('marlinspike');

var _marlinspike2 = _interopRequireDefault(_marlinspike);

var _libXfmr = require('../../../lib/xfmr');

var _libXfmr2 = _interopRequireDefault(_libXfmr);

var Swagger = (function (_Marlinspike) {
  _inherits(Swagger, _Marlinspike);

  _createClass(Swagger, [{
    key: 'defaults',
    value: function defaults(overrides) {
      return {
        'swagger': {
          pkg: {
            name: 'No package information',
            description: 'You should set sails.config.swagger.pkg to retrieve the content of the package.json file',
            version: '0.0.0'
          },
          ui: {
            url: 'http://localhost:8080/'
          }
        },
        'routes': {
          '/swagger/doc': {
            cors: {
              origin: 'http://localhost:8080',
              methods: 'GET,OPTIONS,HEAD'
            },
            controller: 'SwaggerController',
            action: 'doc'
          }
        }
      };
    }
  }]);

  function Swagger(sails) {
    _classCallCheck(this, Swagger);

    _get(Object.getPrototypeOf(Swagger.prototype), 'constructor', this).call(this, sails, module);
  }

  _createClass(Swagger, [{
    key: 'initialize',
    value: function initialize(next) {
      var _this = this;

      var hook = this.sails.hooks.swagger;
      this.sails.after('lifted', function () {
        hook.doc = _libXfmr2['default'].getSwagger(_this.sails, _this.sails.config.swagger.pkg);
      });

      next();
    }
  }]);

  return Swagger;
})(_marlinspike2['default']);

exports['default'] = _marlinspike2['default'].createSailsHook(Swagger);
module.exports = exports['default'];