import { IDataNumber } from ".";

interface ISPEED extends IDataNumber {
    SLOW: number;
    NORMAL: number;
    FAST: number;
}

const SPEED: ISPEED = {
    SLOW: 50,
    NORMAL: 35,
    FAST: 20,
};

export { SPEED };
