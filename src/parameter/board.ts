export interface IBoardSize {
    ROW: number;
    COLUMN: number;
}

const BOARD_SIZE: IBoardSize = {
    ROW: 20,
    COLUMN: 37,
};

const CELL_SIZE: number = 30;

const OBJECT: { START: string; TARGET: string } = {
    START: "isStart",
    TARGET: "isTarget",
};

export interface coordinate {
    x: number;
    y: number;
}
const START: coordinate = {
    x: Math.floor(BOARD_SIZE.COLUMN / 3),
    y: Math.floor(BOARD_SIZE.ROW / 2),
};

const TARGET: coordinate = {
    x: BOARD_SIZE.COLUMN - START.x,
    y: Math.floor(BOARD_SIZE.ROW / 2),
};

export { BOARD_SIZE, CELL_SIZE, START, TARGET, OBJECT };
