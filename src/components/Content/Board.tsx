import React, { ReactElement, useState, useContext } from "react";
import classname from "classname";
import "./Board.css";

// MUI --------------------------------------------------------------
import { Theme, makeStyles } from "@material-ui/core";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// parameters -------------------------------------------------------
import { CELL_SIZE } from "../../parameter/board";

// utilities --------------------------------------------------------
import { IBoard } from "../../utilities/board";
import { ICell } from "../../utilities/cell";
import {
    mouseEvent,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
} from "../../utilities/mouseEvents";

//context -----------------------------------------------------------
import { BoardContext, IBoardContext } from "../index";

const useStyles = makeStyles((theme: Theme) => ({
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    cell: {
        width: `${CELL_SIZE}px`,
        height: `${CELL_SIZE}px`,
        border: ".5px solid lightblue",
    },
    svg: {
        width: "100%",
        height: "100%",
    },
}));

function Board(): ReactElement {
    const classes = useStyles();

    const boardContext = useContext<IBoardContext>(BoardContext);
    const { board, setBoard: SetBoard, setSTART, setTARGET } = boardContext;

    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [holdingPiece, setHoldingPiece] = useState<string | null>(null);
    const [prevPiece, setPrevPiece] = useState<Array<number>>([-1, -1]);

    return (
        <>
            {board.map((row: Array<ICell>, indexI: number) => {
                return (
                    <div
                        key={`row-${indexI}`}
                        id={`row-${indexI}`}
                        className={classes.row}
                    >
                        {row.map((cell: ICell, indexJ: number) => {
                            let setBoard = SetBoard as React.Dispatch<
                                React.SetStateAction<IBoard>
                            >;
                            let params: mouseEvent = {
                                i: indexI,
                                j: indexJ,
                                board,
                                setBoard,
                                mouseDown,
                                setMouseDown,
                                holdingPiece,
                                setHoldingPiece,
                                prevPiece,
                                setPrevPiece,
                                setSTART,
                                setTARGET,
                            };
                            return (
                                <div
                                    key={`cell-${indexI}-${indexJ}`}
                                    id={`cell-${indexI}-${indexJ}`}
                                    className={classname(
                                        classes.cell,
                                        cell.isWall
                                            ? "background wall"
                                            : "background"
                                    )}
                                    onMouseDown={() => handleMouseDown(params)}
                                    onMouseUp={() => handleMouseUp(params)}
                                    onMouseEnter={() =>
                                        handleMouseEnter(params)
                                    }
                                >
                                    {cell.isStart ? (
                                        <KeyboardArrowRightIcon
                                            className={classes.svg}
                                        />
                                    ) : cell.isTarget ? (
                                        <ControlCameraIcon
                                            className={classes.svg}
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}

export default Board;
