/// <reference types="react" />
import PropTypes from "prop-types";
declare const SliderWrapped: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        value: PropTypes.Requireable<string | number>;
        min: PropTypes.Validator<number>;
        max: PropTypes.Validator<number>;
        step: PropTypes.Requireable<number>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        setFieldValue: PropTypes.Validator<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        startAdornment: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        endAdornment: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        value: number;
    };
};
export default SliderWrapped;
