"use client";
import useHome from "./use";
import cls from "classnames";
import ErrorIcon from "./icons/error";
import PlayIcon from "./icons/play";
import LoadingIcon from "./icons/loading";
import Cover from "./cover";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const {
    goToMusicPage,
    hide,
    isFetching,
    isSuccess,
    isError,
    refetch,
    data,
    imageLoaded,
    setImageLoaded,
  } = useHome();
  return (
    <>
      <div
        className={cls(
          `w-full min-h-screen overflow-hidden fixed
           inset-0 z-[100] duration-700 transition-all`,
          hide
            ? "opacity-0 invisible scale-125"
            : "opacity-100 visible scale-100"
        )}
      >
        <LoadingIcon isFetching={isFetching || !imageLoaded} />
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <PlayIcon
            goToMusicPage={goToMusicPage}
            isFetching={isFetching || !imageLoaded}
            isSuccess={isSuccess}
          />
          <ErrorIcon refetch={refetch} isError={isError} />
        </div>
        <AnimatePresence>
          {data?.data && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full h-full"
            >
              <Cover
                imageLoaded={() => setImageLoaded(true)}
                src={data.data.cover}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Home;
