import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";

const useArtist = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  return { isNextMusic };
};
export default useArtist;
