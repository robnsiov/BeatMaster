import LoadingIcon from "../../home/icons/loading";
import useLoading from "./use";

const Loading = () => {
  const { showLoading: isLoading } = useLoading();
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <LoadingIcon isFetching={isLoading} />
      </div>
    </>
  );
};
export default Loading;
