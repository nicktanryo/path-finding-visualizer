import { Dijkstra } from "../algorithms/path/dijkstra";
import { IDataString, IDataFunction, func } from ".";
import { Astar } from "../algorithms/path/astar";

interface IALGORITHM_OPTIONS extends IDataString {
    DIJKSTRA: string;
    ASTAR: string;
}

interface IALGORITHM extends IDataFunction {
    DIJKSTRA: func;
    ASTAR: func;
}

const ALGORITHM_OPTIONS: IALGORITHM_OPTIONS = {
    DIJKSTRA: "DIJKSTRA",
    ASTAR: "ASTAR",
};
const ALGORITHM: IALGORITHM = {
    DIJKSTRA: Dijkstra as func,
    ASTAR: Astar as func,
};

export { ALGORITHM_OPTIONS, ALGORITHM };
