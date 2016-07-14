"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * this is a value-cleaup function based on SimpleSchema,
 * https://github.com/aldeed/meteor-simple-schema#cleaning-data
 *
 * @param object mySchemaObject eg: new SimpleSchema({...})
 * @return function clean(values) => values
 */
var buildClean = exports.buildClean = function buildClean(mySchemaObject) {
  return function (values) {
    return mySchemaObject.clean(values);
  };
};