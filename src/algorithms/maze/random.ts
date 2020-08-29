import { IAlgorithmResult, makeCopyBoard } from "../path";
import { IBoard } from "../../utilities/board";
import { ICell } from "../../utilities/cell";

export function Random(board: IBoard): IAlgorithmResult {
    const copyBoard: IBoard = makeCopyBoard(board);
    const path: Array<ICell> = [];
    for (let row of copyBoard) {
        for (let cell of row) {
            if (cell.isStart || cell.isTarget) continue;
            if (Math.random() < 0.3) {
                cell.isWall = true;
                path.push(cell);
            } else {
                cell.isWall = false;
            }
        }
    }
    return { visualizedPath: path, modifiedBoard: copyBoard };
}
