import MusicsApiImpl from "@/types/music";
import { atom } from "recoil";

const MusicsState = atom<MusicsApiImpl>({
  key: "musics",
  default: [],
});

export default MusicsState;
