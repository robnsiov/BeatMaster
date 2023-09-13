import { AnimatePresence, motion } from "framer-motion";
import useDetail from "./use";
import DetailImpl from "./types";

const itemVariants = {
  hide: { scale: 0.9, opacity: 0, filter: "blur(30px)" },
  show: { scale: 1, opacity: 1, filter: "blur(0px)" },
};

const getDet = (obj: Object, index: number) => {
  return Object.entries(obj).at(index);
};

const Detail = ({ details }: DetailImpl) => {
  const { isNextMusic: next } = useDetail();
  return (
    <>
      <div
        className="uppercase flex justify-start items-start
           flex-col text-white text-sm space-y-1 w-[30%] z-50 
            xl:hidden"
      >
        <motion.div
          variants={itemVariants}
          animate={next ? "hide" : "show"}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="justify-start items-start
           flex-col"
        >
          <AnimatePresence>
            <motion.div
              initial={{ scale: 1.1, filter: "blur(30px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              exit={{ scale: 1.1, filter: "blur(0px)", opacity: 0 }}
              key={"detail"}
            >
              {details.map((det) => (
                <div key={`${getDet(det, 0)}`}>
                  <span className="text-zinc-300 font-thin">
                    {getDet(det, 0)} :{" "}
                  </span>{" "}
                  <h3 className="inline-block font-semibold">
                    {getDet(det, 1)}
                  </h3>{" "}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
export default Detail;
