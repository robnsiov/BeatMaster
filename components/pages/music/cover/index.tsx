import Image from "next/image";
import VerticalShadow from "../shadows/vertical";
import { AnimatePresence, motion } from "framer-motion";

const Cover = () => {
  return (
    <>
      <div
        className="w-[40%] aspect-square mx-14 relative
           z-50 xl:mx-0 xl:mt-10
          xl:w-[450px] sm:w-[70%] 460px:w-[90%]"
      >
        <AnimatePresence>
          <motion.div
            initial={{ scale: 1.1, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            exit={{ scale: 1.1, filter: "blur(0px)" }}
            key={"cover"}
          >
            <VerticalShadow />
            <Image
              src={"/images/Amir Tataloo - Asheghi Nagaeidam.jpg"}
              width="600"
              height="600"
              alt="cover"
              className="w-full h-full object-cover rounded-[35px] relative z-50 heart"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Cover;
