import { queryClient } from "@/components/containers/react-query";
import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useHome = () => {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const { isSuccess, data, isFetching, isError, refetch } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/active"),
  });

  const goToMusicPage = () => {
    if (isSuccess) {
      router.push(`/${data.data.slug}`);
      queryClient.setQueryData(["show-music-page"], true);
      setTimeout(() => {
        setHide(true);
      }, 300);
    }
  };

  return { goToMusicPage, hide, isFetching, isSuccess, isError, refetch, data };
};
export default useHome;
