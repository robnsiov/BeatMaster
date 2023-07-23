"use client";
import { useEffect, useRef, useState } from "react";

const Player = ({ url }: { url: string }) => {
  const [auto, setAuto] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    ref.current?.play();
  }, []);

  const play = () => {
    ref.current?.play();
  };
  const pause = () => {
    ref.current?.pause();
  };

  return (
    <>
      <div>
        <audio ref={ref} src={url} autoPlay={true} />
      </div>
    </>
  );
};
export default Player;
