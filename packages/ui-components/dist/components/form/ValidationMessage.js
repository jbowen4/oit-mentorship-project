"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
function ValidationMessage(props) {
    var errorMessage = props.errorMessage;
    return react_1["default"].createElement(core_1.FormHelperText, { error: true }, errorMessage);
}
ValidationMessage.propTypes = {
    errorMessage: prop_types_1["default"].string
};
exports["default"] = ValidationMessage;
