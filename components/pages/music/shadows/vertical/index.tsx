"use client";

import useVerticalShadow from "./use";
import cls from "classnames";

const VerticalShadow = () => {
  const { isPlayed } = useVerticalShadow();
  return (
    <>
      <div
        className="absolute inset-0 bg-primary rounded-full
            scale-150 z-10 blur-3xl"
      ></div>
      <div
        className={cls(
          `absolute -inset-3 bg-primary rounded-full
             z-30  heart-bg`,
          isPlayed ? "run-anim" : "pause-anim"
        )}
      ></div>
      <div
        className={cls(
          `absolute -inset-14 bg-primary rounded-full
             z-20  heart-bg blur-2xl`,
          isPlayed ? "run-anim" : "pause-anim"
        )}
      ></div>
    </>
  );
};
export default VerticalShadow;
