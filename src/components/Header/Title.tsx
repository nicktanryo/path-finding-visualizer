import React, { ReactElement } from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";

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
                src="logo512.png"
                variant="square"
                className={classes.logo}
            />

            <Typography variant="h6">Path Finding Visualizer</Typography>
        </>
    );
}

export default Title;
