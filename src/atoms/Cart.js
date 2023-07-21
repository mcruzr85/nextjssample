import { atom } from "recoil"; //esto es como el store

export const carState = atom({
    key: 'cartState',
    default: [],
});