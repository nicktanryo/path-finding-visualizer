import React, { ReactElement } from "react";

import {
    AppBar,
    Toolbar,
    makeStyles,
    Theme,
    Grid,
    Button,
} from "@material-ui/core";
import Title from "./Title";
import AlgorithmMenu from "./AlgorithmMenu";
import SpeedMenu from "./SpeedMenu";
import MazeMenu from "./MazeMenu";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        backgroundColor: "#aa96da",
    },
    title: {
        flex: 1,
        display: "flex",
        alignItems: "center",
    },
    navigator: {
        "& div": {
            margin: "0 5px 0 5px",
        },
    },
    navigation: {
        color: "white",
    },
}));

interface Props {
    visualize: () => void;
    resetBoard: () => void;
    generateMaze: () => void;
}

function Index({ visualize, resetBoard, generateMaze }: Props): ReactElement {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid container justify="space-between">
                    <Grid item className={classes.title}>
                        <Title />
                    </Grid>

                    <Grid item className={classes.navigator}>
                        <MazeMenu generateMaze={generateMaze} />
                        <AlgorithmMenu />
                        <SpeedMenu />
                        <Button
                            color="primary"
                            className={classes.navigation}
                            onClick={visualize}
                        >
                            VISUALIZE
                        </Button>
                        <Button
                            color="primary"
                            className={classes.navigation}
                            onClick={resetBoard}
                        >
                            RESET
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Index;

export function Capitalized(str: string): string {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
