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
import Sidebar from "./sidebar";
import Auth from "./auth";
import { useRecoilState } from "recoil";
import showAuthFormState from "@/context/show-auth-form";
import AddToPlaylist from "./add-to-playlist";

const Music = () => {
  const { music, show } = useMusic();
  const [, setD] = useRecoilState(showAuthFormState);
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        {show && music?.data && (
          <>
            <Progress
              cover={music.data.cover}
              musicName={music.data.name}
              musicSrc={music.data.src}
              artists={music.data.artists}
            />
            {/* <div className="absolute z-[71] blur-sm bg-primary inset-0 opacity-90  scale-125"></div> */}
            <Sidebar />
            <AddToPlaylist />
            <Subtitle />
            <Loading />
            <Auth />
            <div
              // onClick={() => setD(true)}

              className="w-full h-full  flex justify-center items-center relative"
            >
              <Stars />
              <HorizontalShadow />
              <div
                className="w-full h-full flex justify-between items-center max-w-7xl p-3
        xl:flex-col xl:justify-center"
              >
                <Artist
                  artists={music.data.artists}
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
