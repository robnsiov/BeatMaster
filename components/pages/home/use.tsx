import { MusicApiImpl } from "@/types/music";
import getMusic from "@/utils/get-music";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useHome = () => {
  const router = useRouter();
  const { isSuccess, data } = useQuery({
    queryKey: ["music"],
    queryFn: () => getMusic<MusicApiImpl>("http://localhost:5000/active"),
  });

  const goToMusicPage = () => {
    if (isSuccess) router.push(`/${data.data.slug}`);
  };

  return { goToMusicPage };
};
export default useHome;
