import { IDataString } from ".";
import { Random } from "../algorithms/maze/random";
import { IAlgorithmResult } from "../algorithms/path";
import { IBoard } from "../utilities/board";

interface IMAZE_OPTIONS extends IDataString {
    RANDOM: string;
}

const MAZE_OPTIONS: IMAZE_OPTIONS = {
    RANDOM: "RANDOM",
};
interface IDataFunctionEmpty {
    [key: string]: (board: IBoard) => IAlgorithmResult;
}
interface IMAZE extends IDataFunctionEmpty {
    RANDOM: (board: IBoard) => IAlgorithmResult;
}

const MAZE: IMAZE = {
    RANDOM: Random,
};

export { MAZE, MAZE_OPTIONS };
