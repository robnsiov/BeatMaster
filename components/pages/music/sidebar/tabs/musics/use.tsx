import MusicsApiImpl from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { UseMusicsImpl } from "./types";
import api from "@/api";

const useMusics = ({ isPlaylist }: UseMusicsImpl) => {
  const { isFetching, data } = useQuery({
    queryKey: ["musics", { isPlaylist }],
    queryFn: () =>
      request<MusicsApiImpl>({
        url: isPlaylist ? api.liked : api.songs,
      }),
    staleTime: Infinity,
    enabled: true,
  });

  const musics = data?.data;

  return { isFetching, musics };
};

export default useMusics;
