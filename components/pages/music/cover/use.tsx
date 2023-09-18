import isNextMusicState from "@/context/is-next-music";
import isPlayedState from "@/context/is-played";
import { useDidUpdate } from "@mantine/hooks";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const useCover = (src: string) => {
  const [init, setInit] = useState(true);

  useDidUpdate(() => {
    setInit(false);
  }, [src]);

  const isNextMusic = useRecoilValue(isNextMusicState);
  const isPlayed = useRecoilValue(isPlayedState);
  return { isNextMusic, isPlayed, init };
};
export default useCover;
