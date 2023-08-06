import "./index.css";
import PlayingAnimImpl from "./types";
import cls from "classnames";
const PlayingAnim = ({ isPlayed }: PlayingAnimImpl) => {
  return (
    <div className="playing">
      <span
        className={cls(
          `playing__bar playing__bar1`,
          isPlayed ? "run-anim" : "pause-anim"
        )}
      ></span>
      <span
        className={cls(
          `playing__bar playing__bar2`,
          isPlayed ? "run-anim" : "pause-anim"
        )}
      ></span>
      <span
        className={cls(
          `playing__bar playing__bar3`,
          isPlayed ? "run-anim" : "pause-anim"
        )}
      ></span>
    </div>
  );
};

export default PlayingAnim;
