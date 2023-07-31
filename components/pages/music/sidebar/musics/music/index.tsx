import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full mb-3 flex items-center cursor-pointer p-1 relative"
    >
      <div className="absolute inset-0 rounded-md bg-primary opacity-70"></div>
      <div className="flex justify-start items-center w-full relative z-10">
        <div className="min-w-[55px] max-w-[55px] aspect-square">
          <Image
            src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
            width="100"
            height="100"
            alt="cover"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          className="flex justify-center items-start flex-col uppercase 
                  text-white text-sm whitespace-nowrap
                    tracking-widest ml-3  max-w-[160px]"
        >
          <span className="w-full truncate">Asheghi Nagaeidam</span>
          <span className="w-full truncate">Amir Tataloo</span>
        </div>
      </div>
    </motion.li>
  );
};
