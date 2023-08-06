import isPlayedState from "@/context/is-played";
import { useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";

const useMusicItem = () => {
  const searchParams = useSearchParams();
  const isPlayed = useRecoilValue(isPlayedState);
  const musicNameParam = searchParams.get("name");
  return { musicNameParam, isPlayed };
};
export default useMusicItem;
