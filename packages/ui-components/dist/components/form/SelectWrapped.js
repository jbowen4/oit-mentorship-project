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
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles({
    formControl: {
        minWidth: 120
    }
});
function SelectInternal(props) {
    var label = props.label, name = props.name, value = props.value, onChange = props.onChange, options = props.options, width = props.width;
    var classes = useStyles(props);
    return (react_1["default"].createElement(core_1.FormControl, { style: { width: width }, className: classes.formControl },
        react_1["default"].createElement(core_1.InputLabel, { id: name }, label),
        react_1["default"].createElement(core_1.Select, { autoWidth: true, labelId: name, id: name, name: name, value: value, onChange: onChange }, options.map(function (option) { return (react_1["default"].createElement(core_1.MenuItem, { key: option, value: option }, option)); }))));
}
var SelectWrapped = function (props) {
    return react_1["default"].createElement(formik_1.FastField, __assign({}, props, { as: SelectInternal }));
};
SelectWrapped.propTypes = {
    label: prop_types_1["default"].string,
    name: prop_types_1["default"].string.isRequired,
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].instanceOf(Array)])
        .isRequired,
    options: prop_types_1["default"].instanceOf(Array).isRequired,
    onChange: prop_types_1["default"].func.isRequired,
    width: prop_types_1["default"].number
};
exports["default"] = SelectWrapped;
