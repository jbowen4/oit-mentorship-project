import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));
export const Navigation = (props) => {
    const classes = useStyles(props);
    return (React.createElement("div", null,
        React.createElement(AppBar, { position: 'static' },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { edge: 'start', className: classes.menuButton, color: 'inherit', "aria-label": 'menu' }),
                React.createElement(Typography, { variant: 'h6', className: classes.title }, "Best friend"),
                React.createElement(Button, { color: 'inherit' }, "Login")))));
};
export default Navigation;
