import { queryClient } from "@/components/containers/react-query";
import { MusicApiImpl } from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHome = () => {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const searchParams = useSearchParams();
  const musicParam = searchParams.get("name");
  const playlistParam = searchParams.get("playlist");
  const url = musicParam
    ? `http://localhost:5000/musics/${musicParam}`
    : "http://localhost:5000/active";
  const { isSuccess, data, isFetching, isError, refetch } = useQuery({
    queryKey: ["music"],
    queryFn: () => request<MusicApiImpl>({ url: url }),
  });

  useEffect(() => {
    if (musicParam && isError) {
      // isn't any notFond Api for client side
      // not work error.js or global-error.js
      // i forced to push page to /not-found
      router.push("/not-found");
    }
  }, [isError, musicParam]);

  const goToMusicPage = () => {
    if (isSuccess) {
      router.push(
        `/musics?name=${data.data.slug}&playlist=${playlistParam ?? false}`
      );
      queryClient.setQueryData(["show-music-page"], true);
      setTimeout(() => {
        setHide(true);
      }, 300);
    }
  };

  return { goToMusicPage, hide, isFetching, isSuccess, isError, refetch, data };
};
export default useHome;
