import { ICell } from "../../utilities/cell";
import { IBoard } from "../../utilities/board";
import { IAlgorithmFunction, IAlgorithmResult } from ".";

export function Dijkstra({
    board,
    startCell,
    targetCell,
}: IAlgorithmFunction): IAlgorithmResult {
    const copyBoard: IBoard = makeCopyBoard(board);

    copyBoard[startCell.row][startCell.column].distance = 0;

    const pathInOrder: Array<ICell> = [];

    const unvisitedCells: Array<ICell> = getBoardCells(copyBoard);

    while (!!unvisitedCells.length) {
        sortCellsByDistance(unvisitedCells);

        const closestCell: ICell = unvisitedCells.shift() as ICell;
        if (closestCell.isWall) continue;
        if (closestCell.distance === Infinity)
            return { modifiedBoard: copyBoard, visualizedPath: pathInOrder };

        closestCell.isVisited = true;
        pathInOrder.push(closestCell);
        if (
            closestCell.column === targetCell.column &&
            closestCell.row === targetCell.row
        )
            return { modifiedBoard: copyBoard, visualizedPath: pathInOrder };

        updateUnvisitedNeighbors(closestCell, copyBoard);
    }
    return { modifiedBoard: copyBoard, visualizedPath: pathInOrder };
}

function makeCopyBoard(board: IBoard): IBoard {
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

function updateUnvisitedNeighbors(cell: ICell, board: IBoard): void {
    const unvisitedNeighbors: Array<ICell> = getUnvisitedNeighbors(cell, board);
    for (const neighborCell of unvisitedNeighbors) {
        neighborCell.distance = cell.distance + 1;
        neighborCell.previous = cell;
    }
}

function getUnvisitedNeighbors(cell: ICell, board: IBoard): Array<ICell> {
    const { row, column } = cell;
    let neighbors: Array<ICell> = [];

    if (row > 0) neighbors.push(board[row - 1][column]);
    if (row < board.length - 1) neighbors.push(board[row + 1][column]);
    if (column > 0) neighbors.push(board[row][column - 1]);
    if (column < board[0].length - 1) neighbors.push(board[row][column + 1]);

    return neighbors.filter((cell) => !cell.isVisited);
}

function sortCellsByDistance(cells: Array<ICell>): void {
    cells.sort((cellA, cellB) => cellA.distance - cellB.distance);
}

function getBoardCells(board: IBoard): Array<ICell> {
    let cells: Array<ICell> = [];
    for (const row of board) {
        for (const cell of row) {
            cells.push(cell);
        }
    }
    return cells;
}
