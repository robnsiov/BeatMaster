import { motion } from "framer-motion";
import Image from "next/image";
import MusicItemImpl from "./types";
import Link from "next/link";
import { boolean } from "zod";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MusicItem = ({
  music,
  onClick = () => {},
  isPlaylist,
}: MusicItemImpl) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-full mb-3 flex items-center cursor-pointer p-1 relative"
    >
      <div className="absolute inset-0 rounded-md bg-primary opacity-70"></div>
      <Link
        href={{
          pathname: "/musics",
          query: { name: music.slug, playlist: isPlaylist },
        }}
        className="flex justify-start items-center w-full relative z-10"
      >
        <div className="min-w-[55px] max-w-[55px] aspect-square">
          <Image
            src={music.cover}
            width="100"
            height="100"
            alt="cover"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          className="flex justify-center items-start flex-col uppercase 
                  text-white whitespace-nowrap
                    tracking-widest ml-3  max-w-[160px]"
        >
          <span className="w-full truncate">{music.name}</span>
          <span className="w-full truncate text-[12px]">{music.artist}</span>
        </div>
      </Link>
    </motion.li>
  );
};

export default MusicItem;
