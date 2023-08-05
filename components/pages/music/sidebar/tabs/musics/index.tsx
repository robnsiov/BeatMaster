import { AnimatePresence, motion } from "framer-motion";
import { MusicApiImpl } from "@/types/music";
import MusicItem from "./music";
import LoadingIcon from "@/components/pages/home/icons/loading";
import MusicsImpl from "./types";
import useMusics from "./use";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Musics = ({ toggleOpen, isPlaylist = false }: MusicsImpl) => {
  const { isFetching, musics } = useMusics({ isPlaylist });
  return (
    <>
      <motion.ul variants={variants} className="m-0">
        <AnimatePresence>
          {isFetching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full flex justify-center items-center mt-3 mb-5">
                <div className="relative">
                  <LoadingIcon isFetching={isFetching} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {musics && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {musics.map((music: MusicApiImpl) => (
                <MusicItem
                  isPlaylist={isPlaylist}
                  onClick={toggleOpen}
                  music={music}
                  key={music.slug}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.ul>
    </>
  );
};

export default Musics;
