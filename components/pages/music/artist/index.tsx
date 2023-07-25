import { AnimatePresence, motion } from "framer-motion";
import useArtist from "./use";

const itemVariants = {
  hide: { scale: 0.9, opacity: 0, filter: "blur(30px)" },
  show: { scale: 1, opacity: 1, filter: "blur(0px)" },
};
const Artist = () => {
  const { isNextMusic: next } = useArtist();
  return (
    <>
      <div
        className="flex justify-end items-start  text-white
             w-[30%] relative z-[60] 
               xl:w-none rtl xl:ltr xl:text-center"
      >
        <motion.div
          variants={itemVariants}
          animate={next ? "hide" : "show"}
          transition={{ duration: 1.5, delay: 2 }}
          className="flex justify-end items-start"
        >
          <AnimatePresence>
            <motion.div
              initial={{ scale: 1.1, filter: "blur(30px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              exit={{ scale: 1.1, filter: "blur(0px)", opacity: 0 }}
              key={"artist"}
            >
              <div className="flex justify-start items-start flex-col">
                <h1
                  className="uppercase text-3xl font-medium mb-1 
            whitespace-nowrap lg:whitespace-normal md:w-full md:text-xl"
                >
                  Asheghi Nagaeidam
                </h1>
                <h2
                  className="uppercase tracking-[10px] w-full 
            text-left xl:text-center md:text-[13px]"
                >
                  Amir Tataloo
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
export default Artist;
