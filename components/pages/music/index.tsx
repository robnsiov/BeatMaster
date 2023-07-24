"use client";
import "./index.css";
import HorizontalShadow from "./shadows/horizontal";
import Stars from "./stars";
import Artist from "./artist";
import Detail from "./detail";
import useMusic from "./use";
import Progress from "./indicator";
import Cover from "./cover";

const Music = () => {
  const { music } = useMusic();

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        <Progress />
        <Stars />
        <HorizontalShadow />
        <div
          className="w-full h-full flex justify-between items-center max-w-7xl p-3
        xl:flex-col xl:justify-center"
        >
          <Artist />
          <Cover />
          <Detail />
        </div>
      </div>
    </>
  );
};
export default Music;
