import { atom } from "recoil";
import { IsPlayedStateImpl } from "./types";

const isPlayedState = atom<IsPlayedStateImpl>({
  key: "isPlayed",
  default: false,
});

export default isPlayedState;
