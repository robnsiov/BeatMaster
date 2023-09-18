import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useViewportSize } from "@mantine/hooks";
import isNextMusicState from "@/context/is-next-music";
import { useRecoilValue } from "recoil";
export const useDimensions = () => {
  const isNextMusic = useRecoilValue(isNextMusicState);
  const { width } = useViewportSize();
  const dimensions = useRef({ width: 0, height: 0 });
  const [isOpen, toggleOpenCycle] = useCycle(false, true);
  const toggleOpen = () => {
    toggleOpenCycle();
  };
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
        delay: 0.08,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return { dimensions, isOpen, toggleOpen, variants, width, isNextMusic };
};
