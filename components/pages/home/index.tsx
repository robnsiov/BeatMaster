import Image from "next/image";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 z-20 opacity-0 scale-110 blur-md fade-scale-stars">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div
          className="absolute w-full h-[400px] 
        bg-[#0C254D] z-10 blur-[200px]"
        ></div>
        <div
          className="w-full h-full flex justify-between items-center max-w-7xl p-3
        xl:flex-col xl:justify-center"
        >
          <div
            className="flex justify-start items-start flex-col text-white
             max-w-[30%] relative z-[60] opacity-0 scale-110 blur-md
              fade-scale-artist xl:max-w-none rtl xl:ltr xl:text-center"
          >
            <h1
              className="uppercase text-3xl font-medium mb-1 
            whitespace-nowrap md:whitespace-normal md:w-full md:text-xl"
            >
              Asheghi Nagaeidam
            </h1>
            <h2
              className="uppercase tracking-[10px] w-full 
            text-left xl:text-center md:text-[13px]"
            >
              Amir Tataloo
            </h2>
          </div>

          <div
            className="w-[40%] aspect-square mx-14 relative blur-md 
          opacity-0 z-50 scale-110 fade-scale-cover xl:mx-0 xl:mt-10
          xl:w-[450px] sm:w-[70%] 460px:w-[90%]"
          >
            <div
              className="absolute inset-0 bg-[#0C254D] rounded-full
            scale-150 z-10 blur-3xl"
            ></div>
            <div
              className="absolute -inset-3 bg-[#0C254D] rounded-full
             z-30  heart-bg"
            ></div>
            <div
              className="absolute -inset-14 bg-[#0C254D] rounded-full
             z-20  heart-bg blur-2xl"
            ></div>
            <Image
              src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
              width="600"
              height="600"
              alt="cover"
              className="w-full h-full object-cover rounded-[35px] relative z-50 heart"
            />
          </div>
          <div
            className="uppercase flex justify-start items-start
           flex-col text-white text-sm space-y-1 w-[30%] z-50 opacity-0 scale-110 blur-md 
           fade-scale-detail xl:hidden"
          >
            <div>
              <span className="text-zinc-300 font-thin">
                Lirics & melody :{" "}
              </span>{" "}
              <h3 className="inline-block font-semibold">Amir Tataloo</h3>{" "}
            </div>
            <div>
              <span className="text-zinc-300 font-thin">Mix & Master : </span>{" "}
              <h3 className="inline-block font-semibold">Soheil Khodabandeh</h3>{" "}
            </div>
            <div>
              <span className="text-zinc-300 font-thin">Cover Art : </span>{" "}
              <h3 className="inline-block font-semibold">Damirchi</h3>{" "}
            </div>
            <div>
              <span className="text-zinc-300 font-thin">3D Artist : </span>{" "}
              <h3 className="inline-block font-semibold">Arman Shams</h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
