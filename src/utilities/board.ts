import Cell, { ICell } from "./cell";

interface coordinate {
    x: number;
    y: number;
}

interface boardSize {
    ROW: number;
    COLUMN: number;
}

export type IBoard = Array<Array<ICell>>;

export function createBoard(
    BOARD_SIZE: boardSize,
    START: coordinate,
    TARGET: coordinate
): IBoard {
    const tempBoard: Array<Array<ICell>> = [];
    for (let i = 0; i < BOARD_SIZE.ROW; i++) {
        const tempRow: Array<ICell> = [];
        for (let j = 0; j < BOARD_SIZE.COLUMN; j++) {
            tempRow.push(
                new Cell(
                    i,
                    j,
                    i === START.y && j === START.x,
                    i === TARGET.y && j === TARGET.x
                )
            );
        }
        tempBoard.push(tempRow);
    }
    return tempBoard;
}
