import isNextMusicState from "@/context/is-next-music";
import isPlayedState from "@/context/is-played";
import { useRecoilValue } from "recoil";

const useCover = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  const isPlayed = useRecoilValue(isPlayedState);
  return { isNextMusic, isPlayed };
};
export default useCover;
