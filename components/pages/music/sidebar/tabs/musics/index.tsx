import { AnimatePresence, motion } from "framer-motion";
import { MusicApiImpl } from "@/types/music";
import MusicItem from "./music";
import LoadingIcon from "@/components/pages/home/icons/loading";
import MusicsImpl from "./types";
import useMusics from "./use";
import { Scrollbars } from "react-custom-scrollbars-2";

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
      <motion.ul
        variants={variants}
        className="m-0 flex justify-center items-center w-full relative"
      >
        <AnimatePresence>
          {isFetching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4"
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
          <Scrollbars
            style={{ width: 290, height: 600 }}
            renderThumbVertical={() => (
              <div className="w-1.5 cursor-pointer rounded-lg h-full bg-primary"></div>
            )}
          >
            {musics && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mr-7 relative -right-3"
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
          </Scrollbars>
        </AnimatePresence>
      </motion.ul>
    </>
  );
};

export default Musics;
