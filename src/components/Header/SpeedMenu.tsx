import React, { ReactElement, useContext } from "react";
import { SpeedContext, ISpeedContext } from "..";
import { SPEED } from "../../parameter/speed";
import { MenuItem, Select, FormControl } from "@material-ui/core";

function SpeedMenu(): ReactElement {
    const speedContext = useContext<ISpeedContext>(SpeedContext);
    return (
        <>
            <FormControl size="small">
                <Select
                    variant="outlined"
                    value={speedContext.speed}
                    color="primary"
                    onChange={(event) => {
                        speedContext.setSpeed &&
                            speedContext.setSpeed(event.target.value as number);
                    }}
                >
                    {Object.keys(SPEED).map((key) => {
                        return (
                            <MenuItem key={`algo-${key}`} value={SPEED[key]}>
                                {key}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
}

export default SpeedMenu;
