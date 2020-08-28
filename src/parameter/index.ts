import { IAlgorithmFunction, IAlgorithmResult } from "../algorithms/path";

export interface IDataString {
    [key: string]: string;
}

export type func = (value: IAlgorithmFunction) => IAlgorithmResult;
export interface IDataFunction {
    [key: string]: func;
}
export interface IDataNumber {
    [key: string]: number;
}
