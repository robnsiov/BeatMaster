import isNextMusicState from "@/context/is-next-music";
import { useRecoilState } from "recoil";

const usePlayer = () => {
  const [isNextMusic, setIsNextMusic] = useRecoilState(isNextMusicState);
  const next = () => {
    setIsNextMusic(true);
  };
  const prev = () => {
    setIsNextMusic(true);
  };
  return { next, prev };
};

export default usePlayer;
