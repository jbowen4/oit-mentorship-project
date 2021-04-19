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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var prop_types_1 = __importDefault(require("prop-types"));
var pickers_1 = require("@material-ui/pickers");
var DatepickerInternal = function (props) {
    var field = props.field, form = props.form, other = __rest(props, ["field", "form"]);
    var currentError = form.errors[field.name];
    return (react_1["default"].createElement(pickers_1.KeyboardDatePicker, __assign({ name: field.name, value: field.value, format: "MM/DD/YYYY", helperText: currentError, error: Boolean(currentError), onError: function (error) {
            // handle as a side effect
            if (error !== currentError) {
                form.setFieldError(field.name, error);
            }
        }, 
        // if you are using custom validation schema you probably want to pass `true` as third argument
        onChange: function (date) { return form.setFieldValue(field.name, date, false); } }, other)));
};
var DatepickerWrapped = function (props) { return (react_1["default"].createElement(formik_1.FastField, __assign({}, props, { component: DatepickerInternal }))); };
DatepickerWrapped.propTypes = {
    name: prop_types_1["default"].string.isRequired,
    value: prop_types_1["default"].oneOfType([
        prop_types_1["default"].string,
        prop_types_1["default"].oneOf([null]),
        prop_types_1["default"].instanceOf(Date)
    ]),
    keyboard: prop_types_1["default"].bool,
    clearable: prop_types_1["default"].bool,
    label: prop_types_1["default"].string,
    helperText: prop_types_1["default"].string,
    error: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].bool])
};
DatepickerWrapped.defaultProps = {
    value: null
};
exports["default"] = DatepickerWrapped;
