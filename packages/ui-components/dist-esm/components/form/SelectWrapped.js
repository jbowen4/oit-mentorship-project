import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
const useStyles = makeStyles({
    formControl: {
        minWidth: 120
    }
});
function SelectInternal(props) {
    const { label, name, value, onChange, options, width } = props;
    const classes = useStyles(props);
    return (React.createElement(FormControl, { style: { width: width }, className: classes.formControl },
        React.createElement(InputLabel, { id: name }, label),
        React.createElement(Select, { autoWidth: true, labelId: name, id: name, name: name, value: value, onChange: onChange }, options.map(option => (React.createElement(MenuItem, { key: option, value: option }, option))))));
}
const SelectWrapped = props => {
    return React.createElement(FastField, Object.assign({}, props, { as: SelectInternal }));
};
SelectWrapped.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)])
        .isRequired,
    options: PropTypes.instanceOf(Array).isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.number
};
export default SelectWrapped;
