import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";

const useLoading = () => {
  const [showLoading, setShowLoading] = useState(false);
  const isNextMusic = useRecoilValue(isNextMusicState);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (isNextMusic) {
      timeOut = setTimeout(() => {
        setShowLoading(true);
      }, 2000);
    } else {
      setShowLoading(false);
    }
    return () => clearTimeout(timeOut);
  }, [isNextMusic]);

  return { showLoading };
};
export default useLoading;
