const BOARD_SIZE: { ROW: number; COLUMN: number } = {
    ROW: 25,
    COLUMN: 51,
};

const CELL_SIZE: number = 20;

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
