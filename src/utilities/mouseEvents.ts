import produce from "immer";
import React from "react";
import { IBoard } from "./board";
import { OBJECT, coordinate } from "../parameter/board";

export interface mouseEvent {
    i: number;
    j: number;
    board: IBoard;
    setBoard: React.Dispatch<React.SetStateAction<IBoard>>;
    mouseDown: boolean;
    setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
    holdingPiece: string | null;
    setHoldingPiece: React.Dispatch<React.SetStateAction<string | null>>;
    prevPiece: Array<number>;
    setPrevPiece: React.Dispatch<React.SetStateAction<Array<number>>>;
    SetSTART?: React.Dispatch<React.SetStateAction<coordinate>>;
    SetTARGET?: React.Dispatch<React.SetStateAction<coordinate>>;
}

function toggleWall(board: IBoard, i: number, j: number): IBoard {
    return produce(board, (tempBoard) => {
        let cell = tempBoard[i][j];
        let wallCell = {
            ...cell,
            isWall: !cell.isWall,
        };
        tempBoard[i][j] = wallCell;
        return tempBoard;
    });
}
function movePiece(
    board: IBoard,
    i: number,
    j: number,
    prevI: number,
    prevJ: number,
    holdingPiece: string
): IBoard {
    return produce(board, (tempBoard) => {
        tempBoard[prevI][prevJ] = {
            ...tempBoard[prevI][prevJ],
            isStart: false,
            isTarget: false,
        };
        tempBoard[i][j] = { ...tempBoard[i][j], [holdingPiece]: true };
        return tempBoard;
    });
}

export function handleMouseDown({
    i,
    j,
    board,
    setBoard,
    mouseDown,
    setMouseDown,
    holdingPiece,
    setHoldingPiece,
    prevPiece,
    setPrevPiece,
    SetSTART,
    SetTARGET,
}: mouseEvent): void {
    setMouseDown(true);
    const { isStart, isTarget } = board[i][j];
    if (isStart || isTarget) {
        setHoldingPiece(isStart ? OBJECT.START : OBJECT.TARGET);
        setPrevPiece([i, j]);
    } else {
        setBoard(toggleWall(board, i, j));
    }
}

export function handleMouseEnter({
    i,
    j,
    board,
    setBoard,
    mouseDown,
    setMouseDown,
    holdingPiece,
    setHoldingPiece,
    prevPiece,
    setPrevPiece,
    SetSTART,
    SetTARGET,
}: mouseEvent) {
    if (!mouseDown) return;
    if (holdingPiece) {
        if (
            !board[i][j].isWall &&
            ((holdingPiece === OBJECT.START && !board[i][j].isTarget) ||
                (holdingPiece === OBJECT.TARGET && !board[i][j].isStart))
        ) {
            setBoard(
                movePiece(board, i, j, prevPiece[0], prevPiece[1], holdingPiece)
            );
            setPrevPiece([i, j]);
        }
    } else {
        if (board[i][j].isStart || board[i][j].isTarget) return;
        setBoard(toggleWall(board, i, j));
    }
}

export function handleMouseUp({
    i,
    j,
    board,
    setBoard,
    mouseDown,
    setMouseDown,
    holdingPiece,
    setHoldingPiece,
    prevPiece,
    setPrevPiece,
    SetSTART,
    SetTARGET,
}: mouseEvent): void {
    setMouseDown(false);
    if (holdingPiece) {
        const spot: coordinate = {
            x: j,
            y: i,
        };
        if (holdingPiece === OBJECT.START) {
            if (SetSTART) SetSTART(spot);
        } else if (holdingPiece === OBJECT.TARGET) {
            if (SetTARGET) SetTARGET(spot);
        }
        setHoldingPiece(null);
        setPrevPiece([-1, -1]);
    }
}
