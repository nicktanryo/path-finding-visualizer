import React, { ReactElement } from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import logo from "../../img/logo512.png";

const useStyles = makeStyles(() => ({
    logo: {
        display: "inline",
    },
}));

function Title(): ReactElement {
    const classes = useStyles();
    return (
        <>
            <Avatar
                alt="path-finding-visualizer"
                src={logo}
                variant="square"
                className={classes.logo}
            />

            <Typography variant="h6" style={{ marginLeft: "5px" }}>
                Path Finding Visualizer
            </Typography>
        </>
    );
}

export default Title;
