import ReactQueryContainer from "../react-query";
import RecoliContainer from "../recoil";
import RootContainerImpl from "./types";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ReactQueryContainer>
        <RecoliContainer>{children}</RecoliContainer>
      </ReactQueryContainer>
    </>
  );
};
export default RootContainer;
