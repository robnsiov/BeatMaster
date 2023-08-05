"use client";

import { Heart } from "iconsax-react";
import { motion, AnimatePresence } from "framer-motion";
import cls from "classnames";
import LoadingIcon from "../../home/icons/loading";
import useAddToPlaylist from "./use";

const itemVariants = {
  hide: { scale: 0.9, opacity: 0, filter: "blur(30px)" },
  show: { scale: 1, opacity: 1, filter: "blur(0px)" },
};

const AddToPlaylist = () => {
  const {
    toPlaylist,
    changePlaylist,
    isLoading,
    isToPlaylistFetching,
    isNextMusic: next,
  } = useAddToPlaylist();

  return (
    <>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, scale: 0.9, fill: "blur(30px)" }}
        animate={next ? "hide" : "show"}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-6 right-6 z-[71] flex justify-center items-center text-white"
      >
        <div className="w-5 h-5 absolute z-10 scale-90">
          <LoadingIcon isFetching={isLoading || isToPlaylistFetching} />
        </div>
        <div className="w-5 h-5">
          <AnimatePresence>
            {!isLoading && !isToPlaylistFetching && (
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={changePlaylist}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="relative z-20"
              >
                <Heart
                  size="22"
                  className={cls(
                    `duration-200 transition-all cursor-pointer`,
                    toPlaylist?.added ? "fill-white" : "fill-transparent"
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};
export default AddToPlaylist;
