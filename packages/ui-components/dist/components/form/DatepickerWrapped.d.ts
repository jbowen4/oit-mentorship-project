/// <reference types="react" />
import PropTypes from "prop-types";
declare const DatepickerWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        value: PropTypes.Requireable<any>;
        keyboard: PropTypes.Requireable<boolean>;
        clearable: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        helperText: PropTypes.Requireable<string>;
        error: PropTypes.Requireable<string | boolean>;
    };
    defaultProps: {
        value: any;
    };
};
export default DatepickerWrapped;
