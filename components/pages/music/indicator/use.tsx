import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";
import useStars from "../stars/use";
import { useEffect, useState } from "react";

const useIndicator = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  const [initMount, setInitMount] = useState(false);

  useEffect(() => {
    setInitMount(true);
  }, []);

  return { isNextMusic, initMount };
};
export default useIndicator;
