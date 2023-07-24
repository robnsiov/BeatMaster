"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";
import { Next, Pause, Play, Previous } from "iconsax-react";

const Player = ({ url }: { url: string }) => {
  return (
    <>
      <div className="w-full player relative 460px:bottom-1">
        <div
          className="text-white absolute 
        -bottom-1 left-0 right-0 flex justify-between items-center"
        >
          <Next
            className="text-white active:scale-90 
          transition-all duration-200 cursor-pointer"
          />
          <Previous
            className="text-white active:scale-90 
          transition-all duration-200 cursor-pointer"
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
              <Pause className="text-white active:scale-90 transition-all duration-200" />
            ),
            play: (
              <Play className="text-white active:scale-90 transition-all duration-200" />
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
