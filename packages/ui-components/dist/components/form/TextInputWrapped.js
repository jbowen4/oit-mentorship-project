"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
var TextInputWrapped = function (props) {
    return react_1["default"].createElement(formik_1.FastField, __assign({}, props, { as: core_1.TextField }));
};
TextInputWrapped.propTypes = {
    name: prop_types_1["default"].string.isRequired,
    value: prop_types_1["default"].string.isRequired,
    onChange: prop_types_1["default"].func.isRequired,
    label: prop_types_1["default"].string,
    helperText: prop_types_1["default"].string,
    error: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].bool]),
    multiline: prop_types_1["default"].bool,
    rows: prop_types_1["default"].number,
    maxLength: prop_types_1["default"].string
};
exports["default"] = TextInputWrapped;
