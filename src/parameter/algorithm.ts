import { Dijkstra } from "../algorithms/path/dijkstra";
import { IDataString, IDataFunction, func } from ".";

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
    ASTAR: Dijkstra as func,
};

export { ALGORITHM_OPTIONS, ALGORITHM };
