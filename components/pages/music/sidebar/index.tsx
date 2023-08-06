import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "./use";
import { MenuToggle } from "./menu-toggle";
import { useEffect } from "react";
import Tabs from "./tabs";

const Sidebar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { dimensions, isOpen, toggleOpen, variants } = useDimensions();
  useEffect(() => {
    if (containerRef.current) {
      dimensions.current.width = containerRef.current.offsetWidth;
      dimensions.current.height = containerRef.current.offsetHeight;
    }
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dimensions.current.height}
      ref={containerRef}
      className="sidebar absolute inset-0 w-[300px] z-[71]"
    >
      <motion.div
        className="absolute inset-0 w-full bg-transparent"
        variants={variants}
      />
      <motion.div
        variants={variants}
        className="absolute inset-0 bg-primary opacity-30 460px:opacity-50"
      ></motion.div>
      <div className="absolute top-20 inset-x-0 bottom-0 460px:top-12">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              initial={{ opacity: 0, height: 0 }}
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
  );
};

export default Sidebar;
