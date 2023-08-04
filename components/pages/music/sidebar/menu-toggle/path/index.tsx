import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    className="stroke-white"
    strokeLinecap="round"
    {...props}
  />
);

export default Path;
