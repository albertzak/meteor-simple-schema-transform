'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildValidate = undefined;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _fromPairs2 = require('lodash/fromPairs');

var _fromPairs3 = _interopRequireDefault(_fromPairs2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * this is a validation function based on SimpleSchema,
 * passed into redux-form as `validate`
 * @param object mySchemaObject eg: new SimpleSchema({...})
 * @return object errors eg: {} = valid, or {field: "reason"} = invalid
 */
var buildValidate = exports.buildValidate = function buildValidate(mySchemaObject, contextName) {
  return function (values) {
    var context = mySchemaObject.namedContext(contextName ? contextName : 'myContext');
    var mutableValues = (0, _extends3.default)({}, values);
    if (context.validate(mySchemaObject.clean(mutableValues))) {
      // isValid
      return {};
    }
    return (0, _fromPairs3.default)((0, _map3.default)(context.invalidKeys(), function (o) {
      return [o.name, context.keyErrorMessage(o.name)];
    }));
  };
}; // A helper to turn a Meteor SimpleSchema
//     https://github.com/aldeed/meteor-simple-schema
// into a validate function for use with ReduxForm (et. al.)
//     http://redux-form.com/