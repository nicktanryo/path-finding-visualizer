import React, { ReactElement } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { MAZE_OPTIONS } from "../../parameter/maze";
import { Capitalized } from ".";

interface Props {
    generateMaze: (MAZE_OPTION: string) => void;
}

function MazeMenu({ generateMaze }: Props): ReactElement {
    return (
        <>
            <FormControl size="small">
                <Select
                    variant="outlined"
                    value={"DEFAULT"}
                    color="primary"
                    onChange={(event) => {
                        generateMaze(event.target.value as string);
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
