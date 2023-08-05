import MusicsState from "@/context/musics";
import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
export const useDimensions = () => {
  const musics = useRecoilValue(MusicsState);
  const dimensions = useRef({ width: 0, height: 0 });
  const [isOpen, toggleOpenCycle] = useCycle(false, true);
  const toggleOpen = () => {
    toggleOpenCycle();
  };
  const musicsLen = musics.length || 5;
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: musicsLen * 0.045,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return { dimensions, isOpen, toggleOpen, variants, musicsLen };
};
