import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import getMusic from "@/utils/get-music";
import MusicsApiImpl, { MusicApiImpl } from "@/types/music";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import MusicsState from "@/context/musics";
import MusicItem from "../music";
import MusicsImpl from "./types";
import LoadingIcon from "@/components/pages/home/icons/loading";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Musics = ({ toggleOpen }: MusicsImpl) => {
  const setMusicsState = useSetRecoilState(MusicsState);

  const { isFetching, data } = useQuery({
    queryKey: ["musics"],
    queryFn: () => getMusic<MusicsApiImpl>("http://localhost:5000/musics"),
    enabled: true,
  });

  const musics = data?.data;

  useEffect(() => {
    if (musics) {
      setMusicsState(musics);
    }
  }, [musics]);

  const onClick = () => {
    toggleOpen(false);
  };

  return (
    <>
      <motion.ul variants={variants} className="m-0">
        <div className="w-full flex justify-center items-center">
          <div className="relative">
            <LoadingIcon isFetching={isFetching} />
          </div>
        </div>
        {musics &&
          musics.map((music) => (
            <MusicItem onClick={onClick} music={music} key={music.slug} />
          ))}
      </motion.ul>
    </>
  );
};

export default Musics;
