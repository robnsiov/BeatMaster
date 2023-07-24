import Image from "next/image";
import Player from "../player";

const Progress = () => {
  return (
    <>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2
        z-[60] overflow-hidden rounded-lg xl:bottom-3 460px:bottom-10"
      >
        <div className="absolute inset-0 bg-[#0C254D] opacity-70"></div>
        <div className="relative z-10 p-2 flex justify-center items-center">
          <div className="w-[55px] aspect-square">
            <Image
              src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
              width="100"
              height="100"
              alt="cover"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="flex justify-center items-start flex-col uppercase text-white text-sm
          tracking-widest ml-3 460px:hidden"
          >
            <span>Asheghi nagaeidam</span>
            <span>Amir tataloo</span>
          </div>
          <div className="w-[130px] ml-3">
            <Player url="https://dl.musicguitars.ir/Music/Amir%20Tataloo/128/Amir%20Tataloo%20-%20Asheghi%20Nagaeidam%20[128].mp3" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Progress;
