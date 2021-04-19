/// <reference types="react" />
import PropTypes from "prop-types";
declare const CheckboxWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        value: PropTypes.Validator<string>;
        label: PropTypes.Requireable<string>;
        helperText: PropTypes.Requireable<string>;
        error: PropTypes.Requireable<string>;
    };
};
export default CheckboxWrapped;
