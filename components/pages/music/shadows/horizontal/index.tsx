import useHorizontal from "./use";
import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const HorizontalShadow = () => {
  const { isNextMusic: next } = useHorizontal();

  return (
    <>
      <div
        className="absolute w-full h-[400px] 
         z-10 blur-[200px]"
      >
        <motion.div
          variants={itemVariants}
          animate={next ? "hide" : "show"}
          transition={{ duration: 1.5, delay: 2 }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-[#0C254D]"></div>
        </motion.div>
      </div>
    </>
  );
};

export default HorizontalShadow;
