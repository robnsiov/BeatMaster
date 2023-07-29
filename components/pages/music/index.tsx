"use client";
import "./index.css";
import HorizontalShadow from "./shadows/horizontal";
import Stars from "./stars";
import Artist from "./artist";
import Detail from "./detail";
import useMusic from "./use";
import Progress from "./indicator";
import Cover from "./cover";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "./loading";
import Subtitle from "./subtitle";

const Music = () => {
  const { music, show } = useMusic();

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        {show && music?.data && (
          <>
            <Progress
              cover={music.data.cover}
              musicName={music.data.name}
              musicSrc={music.data.src}
              artist={music.data.artist}
            />
            <Subtitle />
            <Loading />
            <div className="w-full h-full  flex justify-center items-center relative">
              <Stars />
              <HorizontalShadow />
              <div
                className="w-full h-full flex justify-between items-center max-w-7xl p-3
        xl:flex-col xl:justify-center"
              >
                <Artist
                  artist={music.data.artist}
                  musicName={music.data.name}
                />
                <Cover src={music.data.cover} />
                <Detail details={music.data.details} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Music;
