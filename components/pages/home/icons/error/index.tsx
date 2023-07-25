import { AnimatePresence, motion } from "framer-motion";
import ErrorIconImpl from "./types";
import { ArrowRotateRight } from "iconsax-react";

const ErrorIcon = ({ isError, refetch }: ErrorIconImpl) => {
  return (
    <>
      <AnimatePresence>
        {isError && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={"rotate"}
          >
            <div onClick={refetch}>
              <ArrowRotateRight
                className="text-white cursor-pointer md:hidden"
                size="24"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ErrorIcon;
