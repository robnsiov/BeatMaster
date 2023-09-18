import TabImpl from "./types";
import cls from "classnames";

const Tab = ({
  active,
  children,
  onClick = () => {
    0;
  },
}: TabImpl) => {
  return (
    <>
      <div
        onClick={onClick}
        className={cls(
          `w-f border-b-[1px]
           px-2 text-center text-white py-2
        transition-all 
           duration-500 cursor-pointer relative`,
          active ? "border-white/30" : "border-white/5"
        )}
      >
        <div
          className={cls(
            `absolute inset-0 bg-primary transition-all duration-500
              rounded rounded-bl-none rounded-br-none`,
            active ? "opacity-30" : "opacity-0"
          )}
        ></div>
        <span className="relative z-10">{children}</span>
      </div>
    </>
  );
};
export default Tab;
