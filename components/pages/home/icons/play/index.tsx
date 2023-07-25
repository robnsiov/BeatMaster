import { AnimatePresence, motion } from "framer-motion";
import { PlayCircle } from "iconsax-react";
import PlayIconImpl from "./types";

const PlayIcon = ({ goToMusicPage, isFetching, isSuccess }: PlayIconImpl) => {
  return (
    <>
      <AnimatePresence>
        {!isFetching && isSuccess && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={"play"}
          >
            <div onClick={goToMusicPage}>
              <PlayCircle
                className="text-white cursor-pointer md:hidden"
                size="206"
              />
              <PlayCircle
                className="text-white cursor-pointer hidden md:inline-block"
                size="106"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlayIcon;
