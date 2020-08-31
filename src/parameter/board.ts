export interface IBoardSize {
    ROW: number;
    COLUMN: number;
}

const lg = {
    ROW: 30,
    COLUMN: 65,
};

// const md = {
//     ROW: 20,
//     COLUMN: 37,
// };

const BOARD_SIZE: IBoardSize = lg;

const CELL_SIZE: number = BOARD_SIZE === lg ? 20 : 30;

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
