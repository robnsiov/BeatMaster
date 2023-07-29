import isNextMusicState from "@/context/is-next-music";
import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/get-music";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { UsePlayerImpl } from "./types";
import isPlayedState from "@/context/is-played";
import subtitleState from "@/context/subtitle";

const usePlayer = (audio: UsePlayerImpl) => {
  const [_, setIsNextMusic] = useRecoilState(isNextMusicState);
  const [fetchNextMusic, setFetchNextMusic] = useState(false);
  const [fetchPrevMusic, setFetchPrevMusic] = useState(false);
  const [isPlayed, setIsPlayed] = useRecoilState(isPlayedState);
  const [decInterval, setDec] = useState<NodeJS.Timer>();
  const [incInterval, setInc] = useState<NodeJS.Timer>();
  const setSubtitle = useSetRecoilState(subtitleState);

  const subTitles = [
    { start: 1, end: 7, subtitle: "1 to 7" },
    { start: 7, end: 10, subtitle: "7 to 10" },
    { start: 10.1, end: 14, subtitle: "10.1 to 14" },
    { start: 16, end: 18, subtitle: "16 to 18" },
  ];

  const setTimer = () => {
    if (audio) {
      setInterval(() => {
        const currentTime = +audio.currentTime.toFixed(1);
        for (const subtitle of subTitles) {
          if (currentTime >= subtitle.start && currentTime <= subtitle.end) {
            setSubtitle(subtitle.subtitle);
            return;
          }
        }
        setSubtitle("");
        console.log(currentTime);
      }, 100);
    }
  };

  useEffect(() => {
    // setTimer();
  }, [audio]);

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

  useEffect(() => {}, []);

  useEffect(() => {
    if (!nextFetching || !prevFetching) {
      setIsNextMusic(false);
      setFetchNextMusic(false);
      setFetchPrevMusic(false);
      increaseVolume();
    }
  }, [nextFetching, prevFetching]);

  const getNextMusic = () => {
    setTimeout(() => {
      setFetchNextMusic(true);
    }, 3000);
    decreseVolume();
    setIsNextMusic(true);
  };

  const getPrevMusic = () => {
    setTimeout(() => {
      setFetchPrevMusic(true);
    }, 3000);
    decreseVolume();
    setIsNextMusic(true);
  };

  const next = () => {
    getNextMusic();
  };
  const prev = () => {
    getPrevMusic();
  };

  const clearIntervals = () => {
    clearInterval(decInterval);
    clearInterval(incInterval);
  };

  const decreseVolume = () => {
    if (!audio) return;
    clearIntervals();
    const decInterval = setInterval(() => {
      clearInterval(incInterval);
      const volume = +audio.volume.toFixed(1);
      console.log(volume);
      if (volume >= 0.1) audio.volume = volume - 0.1;
      else clearInterval(decInterval);
    }, 100);
    setDec(decInterval);
  };
  const increaseVolume = () => {
    if (!audio) return;
    clearIntervals();
    const incInterval = setInterval(() => {
      clearInterval(decInterval);
      const volume = +audio.volume.toFixed(1);
      console.log(volume);
      if (volume <= 0.9) audio.volume = volume + 0.1;
      else clearInterval(incInterval);
    }, 100);
    setInc(incInterval);
  };

  const pause = () => {
    setIsPlayed(false);
    decreseVolume();
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      audio.pause();
    }, 1000);
  };
  const play = () => {
    setIsPlayed(true);
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
    isPlayed,
    setIsPlayed,
    decreseVolume,
    pause,
    play,
  };
};

export default usePlayer;
