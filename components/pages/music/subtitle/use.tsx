import isNextMusicState from "@/context/is-next-music";
import subtitleState from "@/context/subtitle";
import { useRecoilValue } from "recoil";

const useSubtitle = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  const subtitle = useRecoilValue(subtitleState);
  return { isNextMusic, subtitle };
};
export default useSubtitle;
