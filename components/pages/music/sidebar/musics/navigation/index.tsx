import { motion } from "framer-motion";
import { MenuItem } from "../music";
import { useQuery } from "@tanstack/react-query";
import getMusic from "@/utils/get-music";
import { MusicApiImpl } from "@/types/music";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Music = () => {
  const { isFetching } = useQuery({
    queryKey: ["musics"],
    queryFn: () => getMusic<Array<MusicApiImpl>>("http://localhost:5000/next"),
    enabled: false,
  });

  return (
    <>
      <motion.ul
        variants={variants}
        className="m-0 absolute top-[100px] 460px:top-12 w-full px-5"
      >
        {itemIds.map((i) => (
          <MenuItem key={i} />
        ))}
      </motion.ul>
    </>
  );
};

export default Music;
const itemIds = Array(20).fill("");
