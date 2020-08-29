import React, { ReactElement, useContext } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { IMazeContext, MazeContext } from "..";
import { MAZE_OPTIONS } from "../../parameter/maze";
import { Capitalized } from ".";

interface Props {
    generateMaze: () => void;
}

function MazeMenu({ generateMaze }: Props): ReactElement {
    const mazeContext = useContext<IMazeContext>(MazeContext);
    return (
        <>
            <FormControl size="small">
                <Select
                    variant="outlined"
                    value={"DEFAULT"}
                    color="primary"
                    onChange={(event) => {
                        if (mazeContext.setMaze)
                            mazeContext.setMaze(
                                MAZE_OPTIONS[event.target.value as string]
                            );
                        generateMaze();
                    }}
                >
                    <MenuItem value="DEFAULT">Generate Maze</MenuItem>
                    {Object.keys(MAZE_OPTIONS).map((key) => {
                        return (
                            <MenuItem
                                key={`algo-${key}`}
                                value={MAZE_OPTIONS[key]}
                            >
                                {Capitalized(MAZE_OPTIONS[key] as string)}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
}

export default MazeMenu;
