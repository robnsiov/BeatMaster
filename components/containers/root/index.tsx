import RecoliContainer from "../recoil";
import RootContainerImpl from "./types";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <RecoliContainer>{children}</RecoliContainer>
    </>
  );
};
export default RootContainer;
