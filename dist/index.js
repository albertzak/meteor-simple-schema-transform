'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleSchemaTransform = undefined;

var _buildClean = require('./build-clean.js');

var buildClean = _interopRequireWildcard(_buildClean);

var _forReduxForm = require('./for-redux-form.js');

var forReduxForm = _interopRequireWildcard(_forReduxForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SimpleSchemaTransform = exports.SimpleSchemaTransform = {
  buildClean: buildClean,
  forReduxForm: forReduxForm
};

exports.default = SimpleSchemaTransform;