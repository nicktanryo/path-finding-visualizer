import { IDataString } from ".";
import { Random } from "../algorithms/maze/random";
import { IAlgorithmResult } from "../algorithms/path";
import { IBoard } from "../utilities/board";
import { RecursiveDivision } from "../algorithms/maze/recursiveDivision";
import { coordinate } from "./board";

interface IMAZE_OPTIONS extends IDataString {
    RANDOM: string;
}

const MAZE_OPTIONS: IMAZE_OPTIONS = {
    RECURSIVE_DIVISION: "RECURSIVE_DIVISION",
    RANDOM: "RANDOM",
};
interface IDataFunctionEmpty {
    [key: string]: (value: IMazeInput) => IAlgorithmResult;
}
export interface IMazeInput {
    board: IBoard;
    start: coordinate;
    target: coordinate;
}
interface IMAZE extends IDataFunctionEmpty {
    RECURSIVE_DIVISION: (value: IMazeInput) => IAlgorithmResult;
    RANDOM: (value: IMazeInput) => IAlgorithmResult;
}

const MAZE: IMAZE = {
    RECURSIVE_DIVISION: RecursiveDivision,
    RANDOM: Random,
};

export { MAZE, MAZE_OPTIONS };
