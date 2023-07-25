import Image from "next/image";

const Cover = () => {
  return (
    <>
      <div className="w-full h-full relative blur-sm scale-110">
        <Image
          src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
          width="2000"
          height="2000"
          alt="cover"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </>
  );
};

export default Cover;
