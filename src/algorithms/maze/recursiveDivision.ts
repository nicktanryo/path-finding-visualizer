import { IBoard } from "../../utilities/board";
import { IAlgorithmResult, makeCopyBoard } from "../path";
import { ICell } from "../../utilities/cell";
import { IMazeInput } from "../../parameter/maze";

const ORIENTATION = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
};

var restrictedPoints: string[] = [];

export function RecursiveDivision({
    board,
    start,
    target,
}: IMazeInput): IAlgorithmResult {
    const copyBoard: IBoard = cleanWalls(makeCopyBoard(board));
    const height: number = board.length;
    const width: number = board[0].length;
    const orientation: string = getOrientation(width, height);
    const path: ICell[] = [];
    restrictedPoints = [`${start.y} ${start.x}`, `${target.y} ${target.x}`];

    divide(copyBoard, path, 0, 0, height, width, orientation);

    return { modifiedBoard: copyBoard, visualizedPath: path };
}

function cleanWalls(board: IBoard) {
    const newBoard: IBoard = [];
    for (let row of board) {
        let tempRow: Array<ICell> = [];
        for (let cell of row) {
            let newCell: ICell = {
                ...cell,
                isWall: false,
            };
            tempRow.push(newCell);
        }
        newBoard.push(tempRow);
    }
    return newBoard;
}

function getOrientation(width: number, height: number) {
    return width > height ? ORIENTATION.VERTICAL : ORIENTATION.HORIZONTAL;
}

function divide(
    board: IBoard,
    visualizedPath: ICell[],
    i: number,
    j: number,
    height: number,
    width: number,
    orientation: string
): void {
    if (width < 2 || height < 2 || (height <= 2 && width <= 2)) return;
    const horizontal = orientation === ORIENTATION.HORIZONTAL;

    // start coordinate
    let start_i = i + (horizontal ? 1 + randomInt(height - 2) : 0);
    let start_j = j + (horizontal ? 0 : 1 + randomInt(width - 2));

    // passage coordinate
    let passage_i = start_i + (horizontal ? 0 : randomInt(height - 1));
    let passage_j = start_j + (horizontal ? randomInt(width - 1) : 0);

    // direction
    const dx = horizontal ? 1 : 0;
    const dy = horizontal ? 0 : 1;

    // wall length
    const length = horizontal ? width : height;

    // set wall
    for (let i = 0; i < length; i++) {
        if (
            (start_i !== passage_i || start_j !== passage_j) &&
            !restrictedPoints.includes(`${start_i} ${start_j}`)
        ) {
            board[start_i][start_j].isWall = true;
            visualizedPath.push(board[start_i][start_j]);
        }

        // make sure wall does not block the start and target point
        if (
            board[start_i][start_j].isStart ||
            board[start_i][start_j].isTarget
        ) {
            restrictedPoints.push(`${start_i + 1} ${start_j}`);
            restrictedPoints.push(`${start_i} ${start_j + 1}`);
            restrictedPoints.push(`${start_i - 1} ${start_j}`);
            restrictedPoints.push(`${start_i} ${start_j - 1}`);
        }

        start_i += dy;
        start_j += dx;
    }

    // create restricted points to keep passage way open
    let restrictedPoint1 = horizontal
        ? `${passage_i + 1} ${passage_j}`
        : `${passage_i} ${passage_j + 1}`;
    let restrictedPoint2 = horizontal
        ? `${passage_i - 1} ${passage_j}`
        : `${passage_i} ${passage_j - 1}`;

    restrictedPoints.push(restrictedPoint1);
    restrictedPoints.push(restrictedPoint2);

    // recurse first half of the board
    let w = horizontal ? width : start_j - j;
    let h = horizontal ? start_i - i : height;
    divide(board, visualizedPath, i, j, h, w, getOrientation(w, h));

    // recurse second half of the board
    let nj = horizontal ? j : start_j + 1;
    let ni = horizontal ? start_i + 1 : i;
    w = horizontal ? width : j + width - start_j - 1;
    h = horizontal ? i + height - start_i - 1 : height;
    divide(board, visualizedPath, ni, nj, h, w, getOrientation(w, h));
}

function randomInt(num: number) {
    return Math.floor(Math.random() * num);
}
