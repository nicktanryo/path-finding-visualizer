import React from "react";
import { Typography, Link, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    copyright: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function Copyright(): JSX.Element {
    const classes = useStyles();
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            className={classes.copyright}
        >
            {/* {"Copyright © "} */}
            {"Created By : "}
            <Link color="inherit" href="https://www.github.com/nicktanryo">
                Nicholas Tanryo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
