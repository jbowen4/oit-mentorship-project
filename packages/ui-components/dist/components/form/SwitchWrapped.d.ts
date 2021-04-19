/// <reference types="react" />
import PropTypes from "prop-types";
declare const SwitchWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        value: PropTypes.Validator<string | boolean>;
        label: PropTypes.Requireable<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default SwitchWrapped;
