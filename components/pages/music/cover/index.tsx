import Image from "next/image";

const Cover = () => {
  return (
    <>
      <Image
        src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
        width="600"
        height="600"
        alt="cover"
        className="w-full h-full object-cover rounded-[35px] relative z-50 heart"
      />
    </>
  );
};

export default Cover;
