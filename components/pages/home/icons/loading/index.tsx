import Loading from "@/components/shared/loading";
import { AnimatePresence, motion } from "framer-motion";
import LoadingIconImpl from "./types";

const LoadingIcon = ({ isFetching }: LoadingIconImpl) => {
  return (
    <>
      <AnimatePresence>
        {isFetching && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            key={"loading"}
            className="absolute inset-0 z-10"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2
         -translate-x-1/2"
            >
              <Loading />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default LoadingIcon;
