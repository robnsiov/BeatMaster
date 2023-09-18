import { queryClient } from "@/components/containers/react-query";
import api from "@/api";
import { MusicApiImpl } from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import isAuthenticatedState from "@/context/is-authenticated";

const useHome = () => {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const searchParams = useSearchParams();
  const musicParam = searchParams.get("name");
  const playlistParam = searchParams.get("playlist");
  const setAuthStatus = useSetRecoilState(isAuthenticatedState);
  const url = musicParam ? `${api.songs}${musicParam}/` : api.top;
  const { isSuccess, data, isFetching, isError, refetch } = useQuery({
    queryKey: ["music"],
    queryFn: () =>
      request<MusicApiImpl>({
        url,
      }),
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

  // const { data: isAuth, error: isNotAuth } = useQuery({
  //   queryKey: ["is-auth"],
  //   queryFn: () =>
  //     request({
  //       url: api.isAuth,
  //     }),
  // });

  // useEffect(() => {
  //   if (isAuth) setAuthStatus("isAuthenticated");
  //   else if (isNotAuth) {
  //     setAuthStatus("notAuthenticated");
  //     localStorage.removeItem("token");
  //   }
  // }, [isAuth, isNotAuth]);

  return {
    goToMusicPage,
    hide,
    isFetching,
    isSuccess,
    isError,
    refetch,
    data,
    imageLoaded,
    setImageLoaded,
  };
};
export default useHome;
