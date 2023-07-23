const Detail = () => {
  return (
    <>
      <div
        className="uppercase flex justify-start items-start
           flex-col text-white text-sm space-y-1 w-[30%] z-50 opacity-0 scale-110 blur-md 
           fade-scale-detail xl:hidden"
      >
        <div>
          <span className="text-zinc-300 font-thin">Lirics & melody : </span>{" "}
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
    </>
  );
};
export default Detail;
