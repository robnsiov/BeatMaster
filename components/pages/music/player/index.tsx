"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";
import { Next, Pause, Play, Previous } from "iconsax-react";
import usePlayer from "./use";

const Player = ({ url }: { url: string }) => {
  const { next, prev } = usePlayer();
  return (
    <>
      <div className="w-full player relative bottom-1">
        <div
          className="text-white absolute 
        -bottom-1.5 left-0 right-0 flex justify-between items-center"
        >
          <Next
            className="active:scale-90 
          transition-all duration-200 cursor-pointer"
            size="20"
            onClick={next}
          />
          <Previous
            className="active:scale-90 
          transition-all duration-200 cursor-pointer"
            size="20"
            onClick={prev}
          />
        </div>
        <AudioPlayer
          src={url}
          autoPlay
          customIcons={{
            loop: <></>,
            forward: <></>,
            loopOff: <></>,
            next: <></>,
            volume: <></>,
            pause: (
              <Pause
                className="text-white active:scale-90 transition-all duration-200"
                size="20"
              />
            ),
            play: (
              <Play
                className="text-white active:scale-90 transition-all duration-200"
                size="20"
              />
            ),
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
