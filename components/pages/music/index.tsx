"use client";
import "./index.css";
import VerticalShadow from "./shadows/vertical";
import HorizontalShadow from "./shadows/horizontal";
import Stars from "./stars";
import Artist from "./artist";
import Cover from "./cover";
import Detail from "./detail";
import useMusic from "./use";
import Player from "./player";
import Progress from "./indicator";

const Music = () => {
  const { music } = useMusic();

  return (
    <>
      {/* {music?.src && <Player url={music.src} />} */}

      <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        <Progress />
        <Stars />
        <HorizontalShadow />
        <div
          className="w-full h-full flex justify-between items-center max-w-7xl p-3
        xl:flex-col xl:justify-center"
        >
          <Artist />

          <div
            className="w-[40%] aspect-square mx-14 relative blur-md 
          opacity-0 z-50 scale-110 fade-scale-cover xl:mx-0 xl:mt-10
          xl:w-[450px] sm:w-[70%] 460px:w-[90%]"
          >
            <VerticalShadow />
            <Cover />
          </div>
          <Detail />
        </div>
      </div>
    </>
  );
};
export default Music;
