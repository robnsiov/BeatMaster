import isAuthenticatedState from "@/context/is-authenticated";
import MusicsApiImpl, { MusicApiImpl } from "@/types/music";
import request from "@/utils/request";
import makeToast from "@/utils/request/make-taost";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import showAuthFormState from "@/context/show-auth-form";
import { UseAddToPlaylistImpl } from "./types";
import isNextMusicState from "@/context/is-next-music";
import { queryClient } from "@/components/containers/react-query";
import api from "@/api";

const useAddToPlaylist = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const setShowAuthForm = useSetRecoilState(showAuthFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [toPlaylist, setToPlaylist] = useState<UseAddToPlaylistImpl | null>();
  const isNextMusic = useRecoilValue(isNextMusicState);

  const { data: music } = useQuery({
    queryKey: ["music"],
    queryFn: () => ({} as { data: MusicApiImpl } | undefined),
    enabled: false,
  });

  const getUserAction = () => {
    return request<UseAddToPlaylistImpl>({
      method: "GET",
      url: api.isLiked(music?.data.slug ?? ""),
    });
  };

  const {
    refetch,
    data: toPlaylistApi,
    isFetching: isToPlaylistFetching,
  } = useQuery({
    queryKey: ["to-playlist"],
    queryFn: getUserAction,
  });

  const addedToPlaylistData = toPlaylistApi?.data;

  useEffect(() => {
    refetch();
  }, [music?.data]);

  useEffect(() => {
    if (addedToPlaylistData) {
      setToPlaylist(addedToPlaylistData);
    }
  }, [addedToPlaylistData]);

  const setLikeAction = (data: UseAddToPlaylistImpl) => {
    return request<UseAddToPlaylistImpl>({
      url: `${api.songs}${music?.data.slug}${api.liked}`,
      data,
    });
  };

  const { refetch: refetchPlaylist } = useQuery({
    queryKey: ["musics", { isPlaylist: true }],
    queryFn: () =>
      request<MusicsApiImpl>({
        url: api.songs,
      }),
    enabled: false,
  });

  const likeMutation = useMutation({
    mutationFn: (data: UseAddToPlaylistImpl) => setLikeAction(data),
    onMutate() {
      setIsLoading(true);
    },
    onSettled() {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },
    onSuccess() {
      setTimeout(() => {
        const added = !toPlaylist?.added;
        setToPlaylist({ added });
      }, 2000);
      refetchPlaylist();
    },
    onError() {
      makeToast({ msg: "an error accured!", type: "error" });
    },
  });

  const isNotAuthenticated = () => {
    // makeToast({
    //   msg: "you are'nt authenticated!",
    //   type: "error",
    //   options: { duration: 2000 },
    // });
    setShowAuthForm(true);
  };

  const changePlaylist = () => {
    if (isAuthenticated === "notAuthenticated") isNotAuthenticated();
    else {
      const added = !toPlaylist?.added;
      likeMutation.mutate({ added });
    }
  };
  return {
    toPlaylist,
    changePlaylist,
    isLoading,
    isToPlaylistFetching,
    isNextMusic,
    isAuthenticated,
  };
};
export default useAddToPlaylist;
