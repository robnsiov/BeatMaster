"use client";
import useHome from "./use";
import cls from "classnames";
import ErrorIcon from "./icons/error";
import PlayIcon from "./icons/play";
import LoadingIcon from "./icons/loading";
import Cover from "./cover";

const Home = () => {
  const { goToMusicPage, hide, isFetching, isSuccess, isError, refetch } =
    useHome();
  return (
    <>
      <div
        className={cls(
          `w-full h-screen overflow-hidden absolute
           inset-0 z-[100] duration-700 transition-all`,
          hide
            ? "opacity-0 invisible scale-125"
            : "opacity-100 visible scale-100"
        )}
      >
        <LoadingIcon isFetching={isFetching} />
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <PlayIcon
            goToMusicPage={goToMusicPage}
            isFetching={isFetching}
            isSuccess={isSuccess}
          />
          <ErrorIcon refetch={refetch} isError={isError} />
        </div>
        <Cover />
      </div>
    </>
  );
};
export default Home;
