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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles({
    root: {
        width: 250
    },
    input: {
        width: 80
    }
});
function InputSlider(props) {
    var label = props.label, name = props.name, value = props.value, setFieldValue = props.setFieldValue, onChange = props.onChange, min = props.min, max = props.max, step = props.step, endAdornment = props.endAdornment, startAdornment = props.startAdornment;
    var classes = useStyles(props);
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(Typography_1["default"], { id: "input-slider", gutterBottom: true }, label),
        react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2, alignItems: "center" },
            react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                react_1["default"].createElement(core_1.Slider, { marks: true, min: min, max: max, step: step, name: name, value: value, onChange: function (_, value) {
                        setFieldValue(name, value);
                    }, "aria-labelledby": "input-slider" })),
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(core_1.Input, { className: classes.input, name: name, value: value, margin: "dense", onChange: onChange, inputProps: {
                        step: step,
                        min: min,
                        max: max,
                        type: "number",
                        "aria-labelledby": "input-slider"
                    }, startAdornment: startAdornment ? (react_1["default"].createElement(core_1.InputAdornment, { position: "start" }, startAdornment)) : null, endAdornment: endAdornment ? (react_1["default"].createElement(core_1.InputAdornment, { position: "start" }, endAdornment)) : null })))));
}
var SliderWrapped = function (props) {
    return react_1["default"].createElement(formik_1.FastField, __assign({}, props, { as: InputSlider }));
};
SliderWrapped.propTypes = {
    name: prop_types_1["default"].string.isRequired,
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    min: prop_types_1["default"].number.isRequired,
    max: prop_types_1["default"].number.isRequired,
    step: prop_types_1["default"].number,
    onChange: prop_types_1["default"].func.isRequired,
    setFieldValue: prop_types_1["default"].func.isRequired,
    label: prop_types_1["default"].string,
    startAdornment: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].node]),
    endAdornment: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].node])
};
SliderWrapped.defaultProps = {
    value: 0
};
exports["default"] = SliderWrapped;
