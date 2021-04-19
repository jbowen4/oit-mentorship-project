/// <reference types="react" />
import PropTypes from "prop-types";
declare const TextInputWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        value: PropTypes.Validator<string>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        helperText: PropTypes.Requireable<string>;
        error: PropTypes.Requireable<string | boolean>;
        multiline: PropTypes.Requireable<boolean>;
        rows: PropTypes.Requireable<number>;
        maxLength: PropTypes.Requireable<string>;
    };
};
export default TextInputWrapped;
