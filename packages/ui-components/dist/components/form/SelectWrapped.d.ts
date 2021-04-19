/// <reference types="react" />
import PropTypes from "prop-types";
declare const SelectWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        name: PropTypes.Validator<string>;
        value: PropTypes.Validator<string | unknown[]>;
        options: PropTypes.Validator<unknown[]>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        width: PropTypes.Requireable<number>;
    };
};
export default SelectWrapped;
