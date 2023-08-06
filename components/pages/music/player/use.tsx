import isNextMusicState from "@/context/is-next-music";
import MusicsApiImpl, { MusicApiImpl } from "@/types/music";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { UsePlayerImpl } from "./types";
import isPlayedState from "@/context/is-played";
import subtitleState from "@/context/subtitle";
import { useRouter, useSearchParams } from "next/navigation";
import { useDidUpdate } from "@mantine/hooks";
import { queryClient } from "@/components/containers/react-query";

const usePlayer = (audio: UsePlayerImpl) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const musicParam = searchParams.get("name");
  const playlistParam = searchParams.get("playlist");
  const [_, setIsNextMusic] = useRecoilState(isNextMusicState);
  const [isPlayed, setIsPlayed] = useRecoilState(isPlayedState);
  const [decInterval, setDec] = useState<NodeJS.Timer>();
  const [incInterval, setInc] = useState<NodeJS.Timer>();
  const [subtitleInterval, setSubtitleIntervaln] = useState<NodeJS.Timer>();

  const setSubtitle = useSetRecoilState(subtitleState);

  const { data } = useQuery({
    queryKey: ["music"],
    queryFn: () => ({} as { data: MusicApiImpl } | undefined),
    enabled: false,
  });

  const setTimer = () => {
    clearInterval(subtitleInterval);
    setSubtitle("");
    if (audio && data?.data && data.data?.subtitles) {
      const subTitles = data.data.subtitles;
      const timer = setInterval(() => {
        const currentTime = +audio.currentTime.toFixed(1);
        for (const subtitle of subTitles) {
          if (currentTime >= subtitle.start && currentTime <= subtitle.end) {
            setSubtitle(subtitle.subtitle);
            return;
          }
        }
        setSubtitle("");
      }, 100);
      setSubtitleIntervaln(timer);
    }
  };

  useEffect(() => {
    setTimer();
  }, [audio, data]);

  // useEffect(() => {
  //   if (!nextFetching || !prevFetching) {
  //     setIsNextMusic(false);
  //     setFetchNextMusic(false);
  //     setFetchPrevMusic(false);
  //     router.push(`/musics?name=${data?.data.slug}`);
  //     increaseVolume();
  //   }
  // }, [nextFetching, prevFetching]);
  const { data: musicsArray } = useQuery({
    queryKey: ["musics", { isPlaylist: false }],
    queryFn: () => ({} as { data: MusicsApiImpl } | undefined),
    enabled: false,
  });

  const { data: plasylistArray } = useQuery({
    queryKey: ["musics", { isPlaylist: true }],
    queryFn: () => ({} as { data: MusicsApiImpl } | undefined),
    enabled: false,
  });

  const nextMusic = (songs: MusicsApiImpl, music: MusicApiImpl) => {
    let musics = songs;
    if (musics.length === 0 && musicsArray?.data) {
      musics = musicsArray?.data;
    }
    let index = musics.findIndex(({ slug }) => slug === music.slug);
    if (index !== undefined) {
      index += 1;
      if (index <= musics.length - 1) {
        queryClient.setQueryData(["music"], { data: musics[index] });
      } else {
        queryClient.setQueryData(["music"], { data: musics[0] });
      }
      setIsNextMusic(false);
      router.push(`/musics?name=${data?.data.slug}&playlist=${playlistParam}`);
      increaseVolume();
    }
  };
  const prevMusic = (songs: MusicsApiImpl, music: MusicApiImpl) => {
    let musics = songs;
    if (musics.length === 0 && musicsArray?.data) {
      musics = musicsArray?.data;
    }
    let index = musics.findIndex(({ slug }) => slug === music.slug);
    if (index !== undefined) {
      index -= 1;
      if (index >= 0) {
        queryClient.setQueryData(["music"], { data: musics[index] });
      } else {
        queryClient.setQueryData(["music"], { data: musics[0] });
      }
      setIsNextMusic(false);
      router.push(`/musics?name=${data?.data.slug}&playlist=${playlistParam}`);
      increaseVolume();
    }
  };

  const findNextMusic = () => {
    const musics = musicsArray?.data;
    const playlist = plasylistArray?.data;
    const music = data?.data;
    if (!music) return;
    if (playlistParam === "false" && musics) nextMusic(musics, music);
    else if (playlistParam === "true" && playlist) nextMusic(playlist, music);
  };
  const findPrevMusic = () => {
    const musics = musicsArray?.data;
    const playlist = plasylistArray?.data;
    const music = data?.data;
    if (!music) return;
    if (playlistParam === "false" && musics) prevMusic(musics, music);
    else if (playlistParam === "true" && playlist) prevMusic(playlist, music);
  };

  const getNextMusic = () => {
    setTimeout(() => {
      findNextMusic();
    }, 3000);
    decreseVolume();
    queryClient.setQueryData(["from-sidebar"], false);
    setIsNextMusic(true);
  };

  const getPrevMusic = () => {
    setTimeout(() => {
      findPrevMusic();
    }, 3000);
    queryClient.setQueryData(["from-sidebar"], false);
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

  useDidUpdate(() => {
    const fromSidebar = queryClient.getQueryData(["from-sidebar"]);
    if (fromSidebar) getNextMusic();
  }, [musicParam]);

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
