import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";

const useDetail = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  return { isNextMusic };
};
export default useDetail;
