import { IBoard } from "../../utilities/board";
import { ICell } from "../../utilities/cell";
import { coordinate } from "../../parameter/board";

export interface IAlgorithmFunction {
    board: IBoard;
    startCell: ICell;
    targetCell: ICell;
}

export interface IAlgorithmResult {
    modifiedBoard: IBoard;
    visualizedPath: Array<ICell>;
}

export function makeCopyBoard(board: IBoard): IBoard {
    const copyBoard: IBoard = [];
    for (let row of board) {
        const tempRow: ICell[] = [];
        for (let cell of row) {
            tempRow.push({
                ...cell,
            });
        }
        copyBoard.push(tempRow);
    }
    return copyBoard;
}

export function getShortestPath(
    board: IBoard,
    TARGET: coordinate
): Array<ICell> {
    let copyBoard = makeCopyBoard(board);
    let start: ICell = copyBoard[TARGET.y][TARGET.x];
    if (!start.previous) return [];
    start.isPassed = true;
    let shortestPath = [start];
    while (!!start.previous) {
        start.previous.isPassed = true;
        shortestPath.unshift(start.previous);
        start = start.previous;
    }
    return shortestPath;
}
