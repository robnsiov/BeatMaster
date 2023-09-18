"use client";

import NextImage from "next/image";

import ImageImpl from "./types";
import errorImage from "../../../public/images/404.jpg";
import useImage from "./use";
import { AnimatePresence, motion } from "framer-motion";
import LoadingIcon from "@/components/pages/home/icons/loading";

const Image = ({
  className,
  height,
  src,
  width,
  alt,
  showLoading = true,
  loaded = () => {},
}: ImageImpl) => {
  const { error, loading, endLoading, activationError } = useImage(loaded);
  return (
    <>
      <div className="w-full h-full flex justify-center items-center relative">
        <AnimatePresence>
          {loading && showLoading && (
            <motion.div
              className="w-full h-full flex justify-center items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ scale: 0 }}
            >
              <div className="absolute flex justify-center items-center inset-0">
                <LoadingIcon isFetching={true} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {error && (
            <motion.div
              className="w-full h-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <NextImage className={className} src={errorImage} alt="404" />
            </motion.div>
          )}
        </AnimatePresence>

        <NextImage
          onLoad={endLoading}
          onError={activationError}
          alt={alt}
          className={`${className} ${
            !loading && !error ? "opacity-100" : "opacity-0"
          } transition-all duration-200`}
          src={src}
          priority
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Image;
