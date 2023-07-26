import isNextMusicState from "@/context/is-next-music";
import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/get-music";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { queryClient } from "@/components/containers/react-query";

const usePlayer = () => {
  const [_, setIsNextMusic] = useRecoilState(isNextMusicState);
  const [fetchNextMusic, setFetchNextMusic] = useState(false);
  const [fetchPrevMusic, setFetchPrevMusic] = useState(false);
  const { isFetching: nextFetching } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/next"),
    enabled: fetchNextMusic,
  });

  const { isFetching: prevFetching } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/prev"),
    enabled: fetchPrevMusic,
  });

  useEffect(() => {
    if (!nextFetching || !prevFetching) {
      setIsNextMusic(false);
      setFetchNextMusic(false);
      setFetchPrevMusic(false);
    }
  }, [nextFetching, prevFetching]);

  const getNextMusic = () => {
    setTimeout(() => {
      setFetchNextMusic(true);
    }, 3000);
    setIsNextMusic(true);
  };

  const getPrevMusic = () => {
    setTimeout(() => {
      setFetchPrevMusic(true);
    }, 3000);
    setIsNextMusic(true);
  };

  const next = () => {
    getNextMusic();
  };
  const prev = () => {
    getPrevMusic();
  };
  return { next, prev };
};

export default usePlayer;
