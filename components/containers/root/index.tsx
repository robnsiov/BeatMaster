import Home from "@/components/pages/home";
import ReactQueryContainer from "../react-query";
import RecoliContainer from "../recoil";
import RootContainerImpl from "./types";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ReactQueryContainer>
        <RecoliContainer>
          {children}
          {/* <Home /> */}
        </RecoliContainer>
      </ReactQueryContainer>
    </>
  );
};
export default RootContainer;
