import { AnimatePresence, motion } from "framer-motion";
import ModalImpl from "./types";
import { useClickOutside } from "@mantine/hooks";
import useModal from "./use";

const Modal = ({ open, children, setOpen }: ModalImpl) => {
  const { handleShowForm, showChildren } = useModal({ setOpen, open });
  const ref = useClickOutside(handleShowForm);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[200] bg-[#1011138c] 
      backdrop-blur-sm"
          >
            <div className="w-full h-full flex justify-center items-center px-2">
              <AnimatePresence>
                {showChildren && (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    className="w-full flex justify-center items-center"
                  >
                    {children}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Modal;
