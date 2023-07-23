const Artist = () => {
  return (
    <>
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
    </>
  );
};
export default Artist;
