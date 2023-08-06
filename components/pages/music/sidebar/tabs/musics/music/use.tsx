import { useSearchParams } from "next/navigation";

const useMusicItem = () => {
  const searchParams = useSearchParams();
  const musicNameParam = searchParams.get("name");
  console.log(musicNameParam);
  return { musicNameParam };
};
export default useMusicItem;
