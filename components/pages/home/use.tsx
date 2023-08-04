import { queryClient } from "@/components/containers/react-query";
import { MusicApiImpl } from "@/types/music";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useHome = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [hide, setHide] = useState(false);
  const noSlashMusicSlug = pathName.slice(1);
  const url = noSlashMusicSlug
    ? `http://localhost:5000/musics/${noSlashMusicSlug}`
    : "http://localhost:5000/active";
  const { isSuccess, data, isFetching, isError, refetch } = useQuery({
    queryKey: ["music"],
    queryFn: () => request<MusicApiImpl>({ url: url }),
  });

  useEffect(() => {
    if (noSlashMusicSlug && isError) {
      router.push("/not-found/404");
    }
  }, [isError, noSlashMusicSlug]);

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
