import { IAlgorithmFunction, IAlgorithmResult, makeCopyBoard } from ".";
import { ICell } from "../../utilities/cell";
import { IBoard } from "../../utilities/board";

export function Astar({
    board,
    startCell,
    targetCell,
}: IAlgorithmFunction): IAlgorithmResult {
    console.log(board, startCell, targetCell);
    const copyBoard = makeCopyBoard(board);
    copyBoard[startCell.row][startCell.column].distance = 0;
    copyBoard[startCell.row][startCell.column].f_astar = manhattanDistance(
        startCell,
        targetCell
    );

    let openSet: Array<ICell> = [];
    openSet.push(copyBoard[startCell.row][startCell.column]);

    let path: Array<ICell> = [];

    while (!!openSet.length) {
        sort(openSet);
        let currentCell: ICell = openSet.shift() as ICell;

        if (currentCell.isWall) continue;
        if (currentCell.distance === Infinity)
            return { modifiedBoard: copyBoard, visualizedPath: path };

        path.push(currentCell);
        currentCell.isVisited = true;
        if (
            currentCell.row === targetCell.row &&
            currentCell.column === targetCell.column
        )
            return { modifiedBoard: copyBoard, visualizedPath: path };

        let neighbors: Array<ICell> = getNeighbors(copyBoard, currentCell);
        for (let neighbor of neighbors) {
            let tempG: number = currentCell.distance + 1;
            if (tempG < neighbor.distance) {
                neighbor.distance = tempG;
                neighbor.f_astar =
                    tempG + manhattanDistance(targetCell, neighbor);
                neighbor.previous = currentCell;
                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }
    return { modifiedBoard: copyBoard, visualizedPath: path };
}

function sort(set: Array<ICell>) {
    set.sort((a: ICell, b: ICell) => (a.f_astar > b.f_astar ? 1 : -1));
}

function getNeighbors(board: IBoard, currentCell: ICell) {
    const { row, column } = currentCell;
    let neighbors = [];
    if (row > 0) neighbors.push(board[row - 1][column]);
    if (row < board.length - 1) neighbors.push(board[row + 1][column]);
    if (column > 0) neighbors.push(board[row][column - 1]);
    if (column < board[0].length - 1) neighbors.push(board[row][column + 1]);
    return neighbors;
}

function manhattanDistance(target: ICell, cell: ICell) {
    return (
        Math.abs(target.row - cell.row) + Math.abs(target.column - cell.column)
    );
}
