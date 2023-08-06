import MusicsApiImpl from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { UseMusicsImpl } from "./types";

const useMusics = ({ isPlaylist }: UseMusicsImpl) => {
  const { isFetching, data } = useQuery({
    queryKey: ["musics", { isPlaylist }],
    queryFn: () =>
      request<MusicsApiImpl>({
        url: isPlaylist
          ? "http://localhost:5000/musics"
          : "http://localhost:5000/musics",
      }),
    staleTime: Infinity,
    enabled: true,
  });

  const musics = data?.data;

  return { isFetching, musics };
};

export default useMusics;
