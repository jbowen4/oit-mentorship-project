import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Input, Slider, InputAdornment } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        width: 250
    },
    input: {
        width: 80
    }
});
function InputSlider(props) {
    const { label, name, value, setFieldValue, onChange, min, max, step, endAdornment, startAdornment } = props;
    const classes = useStyles(props);
    return (React.createElement("div", { className: classes.root },
        React.createElement(Typography, { id: "input-slider", gutterBottom: true }, label),
        React.createElement(Grid, { container: true, spacing: 2, alignItems: "center" },
            React.createElement(Grid, { item: true, xs: true },
                React.createElement(Slider, { marks: true, min: min, max: max, step: step, name: name, value: value, onChange: (_, value) => {
                        setFieldValue(name, value);
                    }, "aria-labelledby": "input-slider" })),
            React.createElement(Grid, { item: true },
                React.createElement(Input, { className: classes.input, name: name, value: value, margin: "dense", onChange: onChange, inputProps: {
                        step: step,
                        min: min,
                        max: max,
                        type: "number",
                        "aria-labelledby": "input-slider"
                    }, startAdornment: startAdornment ? (React.createElement(InputAdornment, { position: "start" }, startAdornment)) : null, endAdornment: endAdornment ? (React.createElement(InputAdornment, { position: "start" }, endAdornment)) : null })))));
}
const SliderWrapped = props => {
    return React.createElement(FastField, Object.assign({}, props, { as: InputSlider }));
};
SliderWrapped.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    startAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    endAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
SliderWrapped.defaultProps = {
    value: 0
};
export default SliderWrapped;
