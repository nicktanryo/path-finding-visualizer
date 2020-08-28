export default function newCell(
    row: number,
    column: number,
    start: boolean,
    target: boolean
): ICell {
    return {
        isStart: start,
        isTarget: target,
        row,
        column,
        isVisited: false,
        isWall: false,
        isPassed: false,
        distance: Infinity,
        previous: null,
    };
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
    previous: ICell | null;
}
