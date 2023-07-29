import { AnimatePresence, motion } from "framer-motion";
import useIndicator from "./use";
import { francico } from "@/app/layout";
import cls from "classnames";

const itemVariants = {
  open: { scale: 1, filter: "blur(0px)", opacity: 1 },
  closed: { filter: "blur(10px)", opacity: 0 },
};
const Subtitle = () => {
  const { isNextMusic: next, subtitle } = useIndicator();
  return (
    <>
      <div
        className="absolute top-12  w-full left-1/2 -translate-x-1/2 
        z-[70]  flex justify-center items-center xl:top-6"
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
            transition={{ duration: 1, delay: next ? 0.4 : 3 }}
          >
            <AnimatePresence>
              {subtitle && (
                <motion.div
                  initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
                  animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ scale: 1.1, filter: "blur(0px)", opacity: 0 }}
                  className={cls(
                    `text-white inline-block py-0.5 px-4 relative`,
                    francico.className
                  )}
                >
                  <span className="absolute inset-0 rounded-lg z-10 bg-primary opacity-70"></span>
                  <span className="relative z-20 text-lg">{subtitle}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};
export default Subtitle;
