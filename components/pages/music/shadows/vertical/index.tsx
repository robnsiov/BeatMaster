const VerticalShadow = () => {
  return (
    <>
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
    </>
  );
};
export default VerticalShadow;
