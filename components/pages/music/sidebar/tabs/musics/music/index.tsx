import { motion } from "framer-motion";
import MusicItemImpl from "./types";
import Link from "next/link";
import { queryClient } from "@/components/containers/react-query";
import cls from "classnames";
import useMusicItem from "./use";
import PlayingAnim from "./playing-anim";
import Image from "@/components/shared/image";

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
  const { musicNameParam, isPlayed } = useMusicItem();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cls(
        `w-full mb-3 flex items-center cursor-pointer p-1 relative 
      rounded-md duration-200 transition-all`,
        { "border-2 border-primary": musicNameParam === music.slug }
      )}
    >
      <div className="absolute inset-0 rounded-md bg-primary opacity-70"></div>
      <Link
        onClick={() => queryClient.setQueryData(["from-sidebar"], true)}
        href={{
          pathname: "/musics",
          query: { name: music.slug, playlist: isPlaylist },
        }}
        className="flex justify-start items-center w-full relative z-10"
      >
        {musicNameParam === music.slug && (
          <div className="absolute bottom-1 right-1  z-10">
            <PlayingAnim isPlayed={isPlayed} />
          </div>
        )}

        <div className="min-w-[55px] max-w-[55px] aspect-square">
          <Image
            src={music.cover}
            width={100}
            height={100}
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
          <div className="w-full truncate text-[12px] pr-2">
            {music.artists.map((art, i) => (
              <div className="inline-block" key={art}>
                {art} {i - 1 !== music.artists.length && <span> x </span>}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default MusicItem;
