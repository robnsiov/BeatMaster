import { atom } from "recoil";
import { SubtitleStateImpl } from "./types";

const subtitleState = atom<SubtitleStateImpl>({
  key: "subtitle",
  default: "",
});

export default subtitleState;
