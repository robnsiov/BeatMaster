import { atom } from "recoil";
import ActiveMusicStateImpl from "./types";
const activeMusicState = atom<ActiveMusicStateImpl>({
  key: "homeMusic",
  default: undefined,
});

export default activeMusicState;
