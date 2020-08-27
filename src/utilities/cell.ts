export default class Cell {
    isStart: boolean = false;
    isTarget: boolean = false;

    isVisited: boolean = false;
    isWall: boolean = false;
    isPassed: boolean = false;

    row: number;
    column: number;

    distance: number = Infinity;
    previous: Cell | null = null;

    constructor(row = 0, column = 0, start = false, target = false) {
        this.row = row;
        this.column = column;
        this.isStart = start;
        this.isTarget = target;
    }
}

export interface ICell {
    isStart: boolean;
    isTarget: boolean;
    isVisited: boolean;
    isWall: boolean;
    isPassed: boolean;
    row: number;
    column: number;
    distance: number;
    previous: Cell | null;
}
