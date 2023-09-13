import Player from "../player";
import { AnimatePresence, motion } from "framer-motion";
import useIndicator from "./use";
import IndicatorImpl from "./types";
import Image from "@/components/shared/image";

const itemVariants = {
  open: { scale: 1, filter: "blur(0px)", opacity: 1 },
  closed: { width: "70px" },
  translate: { translateY: "100px", filter: "blur(10px)" },
};
const Progress = ({ artists, cover, musicSrc, musicName }: IndicatorImpl) => {
  const { isNextMusic: next } = useIndicator();
  return (
    <>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2
        z-[60] xl:bottom-3 460px:bottom-10 flex justify-center items-center"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 1, delay: 1 }}
          animate={next ? "translate" : ""}
        >
          <div>
            <AnimatePresence>
              <motion.div
                variants={itemVariants}
                initial={{
                  scale: next ? 1 : 2,
                  filter: next ? "blur(0px)" : "blur(100px)",
                  opacity: next ? 1 : 0,
                }}
                animate={next ? "closed" : "open"}
                className="overflow-hidden"
                transition={{ duration: 1, delay: next ? 0 : 4 }}
              >
                <div className="absolute inset-0 bg-primary rounded-lg opacity-70"></div>
                <div className="relative z-10 p-2 flex justify-between items-center">
                  <div className="flex justify-center items-center">
                    <div className="min-w-[55px] max-w-[55px] aspect-square">
                      <Image
                        src={cover}
                        width={100}
                        height={100}
                        alt="cover"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div
                      className="flex justify-center items-start flex-col uppercase 
                  text-white text-sm whitespace-nowrap
                    tracking-widest ml-3 md:hidden min-w-[160px] max-w-[160px]"
                    >
                      <span className="w-full truncate">{musicName}</span>
                      <div className="w-full truncate  pr-2">
                        {artists.map((art, i) => (
                          <div className="inline-block" key={art}>
                            {art} {i !== artists.length - 1 && <span> x </span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[130px] min-w-[130px] ml-3">
                    <Player url={musicSrc} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Progress;
