import { queryClient } from "@/components/containers/react-query";
import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMusic = () => {
  const [show, setShow] = useState(false);
  const { data } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/active"),
    enabled: false,
  });

  const { data: showMusicPage } = useQuery({
    queryKey: ["show-music-page"],
    queryFn: () => {},
    enabled: false,
  });

  useEffect(() => {
    if (data?.data.color)
      document.documentElement.style.setProperty("--primary", data?.data.color);
  }, [data?.data]);

  useEffect(() => {
    let timerout: NodeJS.Timeout;
    if (showMusicPage)
      timerout = setTimeout(() => {
        setShow(true);
      }, 1000);
    return () => clearTimeout(timerout);
  }, [showMusicPage]);

  return { music: data, show };
};
export default useMusic;
