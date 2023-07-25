import { atom } from "recoil";
import { IsNextMusicStateImpl } from "./types";

const isNextMusicState = atom<IsNextMusicStateImpl>({
  key: "isNextMusic",
  default: false,
});

export default isNextMusicState;
