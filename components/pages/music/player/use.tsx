import isNextMusicState from "@/context/is-next-music";
import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/get-music";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { UsePlayerImpl } from "./types";
import { useTimeout } from "@mantine/hooks";

const usePlayer = (audio: UsePlayerImpl) => {
  const [_, setIsNextMusic] = useRecoilState(isNextMusicState);
  const [fetchNextMusic, setFetchNextMusic] = useState(false);
  const [fetchPrevMusic, setFetchPrevMusic] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const { start: startPause } = useTimeout(() => audio.pause(), 1000);

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

  let decInterval: NodeJS.Timer;
  let incInterval: NodeJS.Timer;

  const clearIntervals = () => {
    clearInterval(decInterval);
    clearInterval(incInterval);
  };

  const decreseVolume = () => {
    clearIntervals();
    decInterval = setInterval(() => {
      const volume = +audio.volume.toFixed(1);
      console.log(volume);
      if (volume >= 0.1) audio.volume = volume - 0.1;
      else clearInterval(decInterval);
    }, 100);
  };
  const increaseVolume = () => {
    clearIntervals();
    incInterval = setInterval(() => {
      const volume = +audio.volume.toFixed(1);
      console.log(volume);
      if (volume <= 0.9) audio.volume = volume + 0.1;
      else clearInterval(incInterval);
    }, 100);
  };

  const pause = () => {
    setIsPlay(false);
    decreseVolume();
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      audio.pause();
    }, 1000);
  };
  const play = () => {
    setIsPlay(true);
    increaseVolume();
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      audio.play();
    }, 1000);
  };

  return {
    next,
    prev,
    isPlay,
    setIsPlay,
    decreseVolume,
    pause,
    play,
  };
};

export default usePlayer;
