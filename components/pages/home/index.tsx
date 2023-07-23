"use client";
import { PlayCircle } from "iconsax-react";
import Image from "next/image";
import useHome from "./use";

const Home = () => {
  const { goToMusicPage } = useHome();
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div onClick={goToMusicPage}>
            <PlayCircle
              className="text-white cursor-pointer md:hidden"
              size="206"
            />
            <PlayCircle
              className="text-white cursor-pointer hidden md:inline-block"
              size="106"
            />
          </div>
        </div>
        <div className="w-full h-full relative blur-sm scale-110">
          <Image
            src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
            width="2000"
            height="2000"
            alt="cover"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
