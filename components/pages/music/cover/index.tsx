import Image from "next/image";
import VerticalShadow from "../shadows/vertical";
import { AnimatePresence, motion } from "framer-motion";
import useCover from "./use";
import CoverImpl from "./types";

const itemVariants = {
  translate: { translateY: "-150%", filter: "blur(30px)" },
  hide: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const Cover = ({ src }: CoverImpl) => {
  const { isNextMusic: next } = useCover();
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
            className="w-full h-full"
          >
            <AnimatePresence>
              <motion.div
                variants={itemVariants}
                animate={next ? "hide" : "show"}
                transition={{ duration: 1.5, delay: 1 }}
                className="w-full h-full"
              >
                <VerticalShadow />
              </motion.div>
            </AnimatePresence>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 1.5, delay: 1 }}
              animate={next ? "translate" : ""}
              className="absolute inset-0 z-50"
            >
              <Image
                src={src}
                width="600"
                height="600"
                alt="cover"
                className="w-full h-full object-cover rounded-[35px] relative heart"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Cover;
