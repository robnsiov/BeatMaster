"use client";

import { AnimatePresence, motion } from "framer-motion";
import useStars from "./use";
import cls from "classnames";

const Stars = () => {
  const { isPlayed } = useStars();
  return (
    <>
      <div className="absolute inset-0 z-20">
        <AnimatePresence>
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            exit={{ scale: 1.1, filter: "blur(0px)", opacity: 0 }}
            key={"stars"}
          >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            {/* <div
              className={cls(isPlayed ? "run-anim" : "pause-anim")}
              id="stars"
            ></div>
            <div
              className={cls(isPlayed ? "run-anim" : "pause-anim")}
              id="stars2"
            ></div>
            <div
              className={cls(isPlayed ? "run-anim" : "pause-anim")}
              id="stars3"
            ></div> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Stars;
