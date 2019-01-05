export * from './uuid';

export const withZeroBase = (price: number) => price >= 0 ? price : 0

export const toNumber = (str: string) => parseInt(str, 10);