import Image from "next/image";
import CoverImpl from "./types";

const Cover = ({ src }: CoverImpl) => {
  return (
    <>
      <div className="w-full h-full relative blur-sm scale-110">
        <Image
          src={src}
          width="2000"
          height="2000"
          alt="cover"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default Cover;
