import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use";
import { MenuToggle } from "./menu-toggle";
import { useEffect } from "react";
import cls from "classnames";
import Tabs from "./tabs";

const Sidebar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { dimensions, isOpen, toggleOpen, variants, musicsLen } =
    useDimensions();
  useEffect(() => {
    if (containerRef.current) {
      dimensions.current.width = containerRef.current.offsetWidth;
      dimensions.current.height = containerRef.current.offsetHeight;
    }
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={!isOpen ? "open" : "closed"}
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
      <div
        className={cls(
          `absolute top-20 460px:top-12 w-full px-5 transition-all duration-200`,
          !isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <Tabs toggleOpen={toggleOpen} />
      </div>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default Sidebar;
