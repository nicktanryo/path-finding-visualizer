import { IDataNumber } from ".";

interface ISPEED extends IDataNumber {
    SLOW: number;
    NORMAL: number;
    FAST: number;
}

const SPEED: ISPEED = {
    SLOW: 25,
    NORMAL: 15,
    FAST: 10,
};

export { SPEED };
