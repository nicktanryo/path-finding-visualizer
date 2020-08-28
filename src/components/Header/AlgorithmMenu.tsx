import React, { ReactElement, useContext } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { AlgorithmContext, IAlgorithmContext } from "../index";
import { ALGORITHM_OPTIONS } from "../../parameter/algorithm";

function AlgorithmMenu(): ReactElement {
    const algorithmContext = useContext<IAlgorithmContext>(AlgorithmContext);
    return (
        <>
            <FormControl size="small">
                <Select
                    variant="outlined"
                    value={algorithmContext.algorithm}
                    color="primary"
                    onChange={(event) =>
                        algorithmContext.setAlgorithm &&
                        algorithmContext.setAlgorithm(
                            event.target.value as string
                        )
                    }
                >
                    {Object.keys(ALGORITHM_OPTIONS).map((key) => {
                        return (
                            <MenuItem
                                key={`algo-${key}`}
                                value={ALGORITHM_OPTIONS[key]}
                            >
                                {ALGORITHM_OPTIONS[key]}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
}

export default AlgorithmMenu;
