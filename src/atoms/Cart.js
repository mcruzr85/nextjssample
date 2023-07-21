import { atom } from "recoil"; //esto es como el store

export const cartState = atom({
    key: 'cartState',
    default: [],
});