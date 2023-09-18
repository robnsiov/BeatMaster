import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "./use";
import { MenuToggle } from "./menu-toggle";
import { useEffect } from "react";
import Tabs from "./tabs";

const itemVariants = {
  hide: { scale: 0.9, opacity: 0, filter: "blur(30px)" },
  show: { scale: 1, opacity: 1, filter: "blur(0px)" },
};

const Sidebar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    dimensions,
    isOpen,
    toggleOpen,
    variants,
    width,
    isNextMusic: next,
  } = useDimensions();
  useEffect(() => {
    if (containerRef.current) {
      dimensions.current.width = containerRef.current.offsetWidth;
      dimensions.current.height = containerRef.current.offsetHeight;
    }
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      animate={next ? "hide" : "show"}
      transition={{ duration: 1.5, delay: 1.7 }}
      className="sidebar absolute top-0 left-0 right-0 bottom-0 w-[300px] z-[170] md:bottom-28
       overflow-hidden"
    >
      <AnimatePresence>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={dimensions.current.height}
          ref={containerRef}
          className="w-full"
          style={{
            bottom: width < 767 && isOpen ? "0px" : width < 767 ? "112px" : "0",
            transition: "bottom 0.7s",
          }}
        >
          <motion.div
            className="absolute inset-0 w-full bg-transparent"
            variants={variants}
          />
          <motion.div
            variants={variants}
            className="absolute inset-0 bg-primary opacity-30 460px:opacity-80"
          ></motion.div>
          <div className="absolute top-20 inset-x-0 bottom-0 460px:top-12">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  animate={{ opacity: 1, height: "auto" }}
                  initial={{ opacity: 0, height: 0 }}
                  transition={{ duration: width < 767 ? 0.6 : 0.3 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full"
                >
                  <div className={"w-full"}>
                    <Tabs toggleOpen={toggleOpen} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
