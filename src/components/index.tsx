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
import { MAZE_OPTIONS, MAZE } from "../parameter/maze";

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

export interface IMazeContext {
    maze: string;
    setMaze: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const MazeContext = React.createContext<IMazeContext>({
    maze: MAZE_OPTIONS.RANDOM,
    setMaze: undefined,
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
}
export const BoardContext = React.createContext<IBoardContext>({
    board: createBoard(BOARD_SIZE, start, target),
    setBoard: undefined,
    START: start,
    setSTART: undefined,
    TARGET: target,
    setTARGET: undefined,
});

// -------------------------------------------------------------------------

function Index(): ReactElement {
    const classes = useStyles();
    const boardRef = useRef(null);

    // visualization option
    const [speed, setSpeed] = useState<number>(SPEED.NORMAL);
    const [maze, setMaze] = useState<string>(MAZE_OPTIONS.RANDOM);
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
        console.log(boardSize.ROW, boardSize.COLUMN);
        for (let row = 0; row < boardSize.ROW; row++) {
            for (let column = 0; column < boardSize.COLUMN; column++) {
                try {
                    (boardRef as any).current.querySelector(
                        `#cell-${row}-${column}`
                    ).className = (boardRef as any).current
                        .querySelector(`#cell-${row}-${column}`)
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
    };

    // algorithm visualization process --------------
    function cleanBoard(): IBoard {
        console.log(boardSize, board.length, board[0].length);
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
                    `#cell-${row}-${column}`
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
                    `#cell-${row}-${column}`
                ).className = (boardRef as any).current
                    .querySelector(`#cell-${row}-${column}`)
                    .className.split(" ")
                    .map((cname: string) =>
                        cname === "visited" ? "passed" : cname
                    )
                    .join(" ");
            }, 2 * speed * i);
        }
    }

    // maze generation visualization ----------------
    function generateMaze() {
        if (animated) cleanBoard();
        const mazeOption = MAZE[maze];
        const { modifiedBoard } = mazeOption(board);
        setBoard(modifiedBoard);
    }

    // detectinng window size
    function getBoardSize(): {
        newBoardSize: IBoardSize;
        Start: coordinate;
        Target: coordinate;
    } {
        const newBoardSize: IBoardSize = {
            ROW: Math.floor((window.innerHeight - 120) / (CELL_SIZE + 2)),
            COLUMN: Math.floor(window.innerWidth / (CELL_SIZE + 2)),
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
                        <MazeContext.Provider value={{ maze, setMaze }}>
                            <Header
                                visualize={analyzeBoard}
                                resetBoard={resetBoard}
                                generateMaze={generateMaze}
                            />
                        </MazeContext.Provider>
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