/// <reference types="react" />
import PropTypes from "prop-types";
declare function ValidationMessage(props: any): JSX.Element;
declare namespace ValidationMessage {
    var propTypes: {
        errorMessage: PropTypes.Requireable<string>;
    };
}
export default ValidationMessage;
