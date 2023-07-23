import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/get-music";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMusic = () => {
  const [enableApi, setEnableApi] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/active"),
    enabled: enableApi,
  });
  useEffect(() => {
    if (!data?.data) {
      setEnableApi(true);
    }
  }, []);

  return { music: data?.data };
};
export default useMusic;
