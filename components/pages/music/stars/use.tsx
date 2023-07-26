import isPlayedState from "@/context/is-played";
import { useRecoilValue } from "recoil";

const useStars = () => {
  const isPlayed = useRecoilValue(isPlayedState);
  return { isPlayed };
};
export default useStars;
