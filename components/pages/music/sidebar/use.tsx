import { useMediaQuery } from "@mantine/hooks";
import { useCycle } from "framer-motion";
import { useEffect, useRef } from "react";
export const useDimensions = () => {
  const dimensions = useRef({ width: 0, height: 0 });
  const [isOpen, toggleOpen] = useCycle(false, true);
  const matches = useMediaQuery("(max-width: 460px)");
  console;
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
        delay: 20 * 0.045,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return { dimensions, isOpen, toggleOpen, variants };
};
