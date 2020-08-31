import React, { ReactElement, useState, useRef, useEffect } from "react";

import Header from "./Header";
import Content from "./Content";

import { SPEED } from "../parameter/speed";
import { ALGORITHM, ALGORITHM_OPTIONS } from "../parameter/algorithm";
import { IBoard, createBoard } from "../utilities/board";
import {
    BOARD_SIZE,
    coordinate,
    START as start,
    TARGET as target,
    CELL_SIZE,
    IBoardSize,
} from "../parameter/board";
import {
    IAlgorithmFunction,
    getShortestPath,
    IAlgorithmResult,
    makeCopyBoard,
} from "../algorithms/path";
import { ICell } from "../utilities/cell";
import { makeStyles, Theme } from "@material-ui/core";
import { MAZE } from "../parameter/maze";

const useStyles = makeStyles((theme: Theme) => ({
    board: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

// context -----------------------------------------------------------------
export interface ISpeedContext {
    speed: number;
    setSpeed: React.Dispatch<React.SetStateAction<number>> | undefined;
}
export const SpeedContext = React.createContext<ISpeedContext>({
    speed: SPEED.NORMAL,
    setSpeed: undefined,
});

export interface IAlgorithmContext {
    algorithm: string;
    setAlgorithm: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const AlgorithmContext = React.createContext<IAlgorithmContext>({
    algorithm: ALGORITHM_OPTIONS.DIJKSTRA,
    setAlgorithm: undefined,
});

export interface IBoardContext {
    board: IBoard;
    setBoard: React.Dispatch<React.SetStateAction<IBoard>> | undefined;
    START: coordinate;
    setSTART: React.Dispatch<React.SetStateAction<coordinate>> | undefined;
    TARGET: coordinate;
    setTARGET: React.Dispatch<React.SetStateAction<coordinate>> | undefined;
    boardRef: React.MutableRefObject<null> | undefined;
}
export const BoardContext = React.createContext<IBoardContext>({
    board: createBoard(BOARD_SIZE, start, target),
    setBoard: undefined,
    START: start,
    setSTART: undefined,
    TARGET: target,
    setTARGET: undefined,
    boardRef: undefined,
});

// -------------------------------------------------------------------------

function Index(): ReactElement {
    const classes = useStyles();
    const boardRef = useRef(null);

    // visualization option
    const [speed, setSpeed] = useState<number>(SPEED.NORMAL);
    const [algorithm, setAlgorithm] = useState<string>(
        ALGORITHM_OPTIONS.DIJKSTRA
    );

    // board properties
    const [animated, setAnimated] = useState<boolean>(false);
    const [START, setSTART] = useState<coordinate>(start);
    const [TARGET, setTARGET] = useState<coordinate>(target);
    const [boardSize, setBoardSize] = useState<IBoardSize>(BOARD_SIZE);
    const [board, setBoard] = useState<IBoard>(
        createBoard(BOARD_SIZE, start, target)
    );

    function resetRefs(boardSize: IBoardSize) {
        for (let row = 0; row < boardSize.ROW; row++) {
            for (let column = 0; column < boardSize.COLUMN; column++) {
                try {
                    (boardRef as any).current.querySelector(
                        `#cell-${row}-${column}-content`
                    ).className = (boardRef as any).current
                        .querySelector(`#cell-${row}-${column}-content`)
                        .className.split(" ")
                        .filter(
                            (cname: string) =>
                                cname !== "visited" && cname !== "passed"
                        )
                        .join(" ");
                } catch (err) {}
            }
        }
    }

    function resetBoard(): void {
        const { newBoardSize, Start, Target } = getBoardSize();
        resetRefs(newBoardSize);
        setSTART(Start);
        setTARGET(Target);
        setAnimated(false);
        setBoardSize(newBoardSize);
        setBoard(createBoard(newBoardSize, Start, Target));
    }

    const boardContextInitValue = {
        board,
        setBoard,
        START,
        setSTART,
        TARGET,
        setTARGET,
        boardRef,
    };

    // algorithm visualization process --------------
    function cleanBoard(): IBoard {
        resetRefs(boardSize);
        const copyBoard = makeCopyBoard(board);
        const newBoard: IBoard = [];
        for (let row of copyBoard) {
            let tempRow: Array<ICell> = [];
            for (let cell of row) {
                let newCell: ICell = {
                    ...cell,
                    isPassed: false,
                    isVisited: false,
                    distance: Infinity,
                    previous: null,
                    f_astar: Infinity,
                };
                tempRow.push(newCell);
            }
            newBoard.push(tempRow);
        }
        return newBoard;
    }

    function analyzeBoard(): void {
        const newBoard = cleanBoard();
        setAnimated(true);
        const pathAlgorithm = ALGORITHM[algorithm];
        const value: IAlgorithmFunction = {
            board: newBoard,
            startCell: board[START.y][START.x],
            targetCell: board[TARGET.y][TARGET.x],
        };
        let { modifiedBoard, visualizedPath }: IAlgorithmResult = pathAlgorithm(
            value
        );
        setBoard(modifiedBoard);
        animateBoard(visualizedPath, modifiedBoard);
    }

    function animateBoard(path: Array<ICell>, modifiedBoard: IBoard): void {
        const pathLength = path.length;
        for (let i = 0; i < pathLength; i++) {
            const { row, column } = path[i];
            setTimeout(() => {
                (boardRef as any).current.querySelector(
                    `#cell-${row}-${column}-content`
                ).className += " visited";
            }, speed * i);
        }
        const finalPath = getShortestPath(modifiedBoard, TARGET);
        setTimeout(() => {
            animatePath(finalPath);
        }, speed * pathLength);
    }

    function animatePath(path: Array<ICell>): void {
        let pathLength = path.length;
        for (let i = 0; i < pathLength; i++) {
            const { row, column } = path[i];
            setTimeout(() => {
                (boardRef as any).current.querySelector(
                    `#cell-${row}-${column}-content`
                ).className = (boardRef as any).current
                    .querySelector(`#cell-${row}-${column}-content`)
                    .className.split(" ")
                    .map((cname: string) =>
                        cname === "visited" ? "passed" : cname
                    )
                    .join(" ");
            }, 2 * speed * i);
        }
    }

    // maze generation visualization ----------------
    function cleanWalls() {
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
        setBoard(newBoard);
    }

    function generateMaze(MAZE_OPTION: string) {
        if (animated) cleanBoard();
        cleanWalls();
        const mazeOption = MAZE[MAZE_OPTION];
        const { modifiedBoard, visualizedPath } = mazeOption({
            board,
            start: START,
            target: TARGET,
        });
        for (let i = 0; i < visualizedPath.length; i++) {
            const { row, column } = visualizedPath[i];
            setTimeout(() => {
                (boardRef as any).current.querySelector(
                    `#cell-${row}-${column}-content`
                ).className += " wall";
            }, (speed * i) / 20);
        }
        setTimeout(() => {
            setBoard(modifiedBoard);
        }, (speed * visualizedPath.length) / 20);
    }

    // detectinng window size
    function getBoardSize(): {
        newBoardSize: IBoardSize;
        Start: coordinate;
        Target: coordinate;
    } {
        var chrome = /Chrome/.test(navigator.userAgent);
        const newBoardSize: IBoardSize = {
            ROW: Math.floor(
                (document.documentElement.clientHeight - 120) /
                    (CELL_SIZE + (chrome ? 2 : 1))
            ),
            COLUMN: Math.floor(
                document.documentElement.clientWidth /
                    (CELL_SIZE + (chrome ? 2 : 1))
            ),
        };

        const Start: coordinate = {
            x: Math.floor(newBoardSize.COLUMN / 3),
            y: Math.floor(newBoardSize.ROW / 2),
        };
        const Target: coordinate = {
            x: newBoardSize.COLUMN - Start.x,
            y: Math.floor(newBoardSize.ROW / 2),
        };
        return { newBoardSize, Start, Target };
    }

    useEffect(() => {
        function resizeWindow(): void {
            const { newBoardSize, Start, Target } = getBoardSize();
            setBoardSize(newBoardSize);
            setSTART(Start);
            setTARGET(Target);
            setBoard(createBoard(newBoardSize, Start, Target));
        }
        resizeWindow();
    }, []);

    return (
        <SpeedContext.Provider value={{ speed, setSpeed }}>
            <AlgorithmContext.Provider value={{ algorithm, setAlgorithm }}>
                <BoardContext.Provider value={boardContextInitValue}>
                    <div>
                        <Header
                            visualize={analyzeBoard}
                            resetBoard={resetBoard}
                            generateMaze={generateMaze}
                        />
                        <div ref={boardRef} className={classes.board}>
                            <Content />
                        </div>
                    </div>
                </BoardContext.Provider>
            </AlgorithmContext.Provider>
        </SpeedContext.Provider>
    );
}

export default Index;
