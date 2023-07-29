"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";
import { Next, Pause, Play, Previous } from "iconsax-react";
import usePlayer from "./use";
import { useRef } from "react";

const Player = ({ url }: { url: string }) => {
  const playerRef = useRef(null);

  // @ts-ignore
  const audio: HTMLAudioElement = playerRef.current?.audio?.current;

  const { next, prev, isPlayed, setIsPlayed, pause, play } = usePlayer(audio);

  return (
    <>
      {/* <div
        className="w-full h-full bg-red-200 z-[200] fixed inset-0 
      flex justify-center items-center"
      >
        <div className="absolute">
          <AnimatePresence>
            {subTitle && (
              <motion.div
                initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
                animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 1.1, filter: "blur(0px)", opacity: 0 }}
              >
                {subTitle}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div> */}
      <div className="w-full player relative bottom-1">
        <div
          className="text-white absolute 
        -bottom-1.5 left-0 right-0 flex justify-between items-center"
        >
          <Previous
            className="active:scale-90 
            transition-all duration-200 cursor-pointer"
            size="20"
            onClick={prev}
          />
          <div className="text-white cursor-pointer">
            {isPlayed ? (
              <Pause
                className="active:scale-90 transition-all duration-200"
                size="20"
                onClick={pause}
              />
            ) : (
              <Play
                className="active:scale-90 transition-all duration-200"
                size="20"
                onClick={play}
              />
            )}
          </div>
          <Next
            className="active:scale-90 
          transition-all duration-200 cursor-pointer"
            size="20"
            onClick={next}
          />
        </div>
        <AudioPlayer
          src={url}
          autoPlay
          ref={playerRef}
          onPause={() => setIsPlayed(false)}
          onPlay={() => setIsPlayed(true)}
          customIcons={{
            loop: <></>,
            forward: <></>,
            loopOff: <></>,
            next: <></>,
            volume: <></>,
            pause: <></>,
            play: <></>,
            previous: <></>,
            rewind: <></>,
            volumeMute: <></>,
          }}
          className="w-full"
        />
      </div>
    </>
  );
};
export default Player;
