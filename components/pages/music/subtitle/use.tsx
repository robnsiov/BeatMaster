import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";

const useSubtitle = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  return { isNextMusic };
};
export default useSubtitle;
