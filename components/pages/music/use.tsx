import { queryClient } from "@/components/containers/react-query";
import api from "@/api";
import { MusicApiImpl } from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import validateColor from "@/utils/validate-color";

const useMusic = () => {
  const [show, setShow] = useState(false);
  const { data } = useQuery({
    queryKey: ["music"],
    queryFn: () => request<MusicApiImpl>({ url: api.top }),
    enabled: false,
  });

  const { data: showMusicPage } = useQuery({
    queryKey: ["show-music-page"],
    queryFn: () => {},
    enabled: false,
  });

  useEffect(() => {
    if (data?.data.color)
      document.documentElement.style.setProperty(
        "--primary",
        validateColor(data?.data.color)
      );
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
