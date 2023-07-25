import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";

const useCover = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  return { isNextMusic };
};
export default useCover;
