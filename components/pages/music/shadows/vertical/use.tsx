import isPlayedState from "@/context/is-played";
import { useRecoilValue } from "recoil";

const useVerticalShadow = () => {
  const isPlayed = useRecoilValue(isPlayedState);
  return { isPlayed };
};
export default useVerticalShadow;
