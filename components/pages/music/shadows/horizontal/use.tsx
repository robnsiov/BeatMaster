import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";

const useHorizontal = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  return { isNextMusic };
};
export default useHorizontal;
