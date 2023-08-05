import { AnimatePresence, motion } from "framer-motion";
import CardImpl from "./types";

const Card = ({ active, children, onClick = () => {} }: CardImpl) => {
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            onClick={onClick}
            className="w-full absolute inset-0 bottom-auto"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            exit={{ opacity: 0, visibility: "hidden" }}
          >
            <div className="w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Card;
