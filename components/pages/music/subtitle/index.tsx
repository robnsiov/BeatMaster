import { AnimatePresence, motion } from "framer-motion";
import useIndicator from "./use";
import { francico } from "@/app/layout";

const itemVariants = {
  open: { scale: 1, filter: "blur(0px)", opacity: 1 },
  closed: { width: "70px" },
  translate: { translateY: "100px", filter: "blur(10px)" },
};
const Subtitle = () => {
  const { isNextMusic: next } = useIndicator();
  return (
    <>
      <div
        className="absolute bottom-[100px] w-full left-1/2 -translate-x-1/2
        z-[70] xl:bottom-3 460px:bottom-10 flex justify-center items-center"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 1, delay: 1 }}
          animate={next ? "translate" : ""}
          className="w-full flex justify-center items-center"
        >
          <AnimatePresence>
            <motion.div
              variants={itemVariants}
              initial={{
                scale: next ? 1 : 2,
                filter: next ? "blur(0px)" : "blur(100px)",
                opacity: next ? 1 : 0,
              }}
              animate={next ? "closed" : "open"}
              className="w-[35%] xl:w-[400px] sm:w-[60%] 460px:w-[80%] text-center"
              transition={{ duration: 1, delay: next ? 0 : 4 }}
            >
              <span className={`text-white ${francico.className}`}></span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
export default Subtitle;
