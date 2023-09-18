"use client";
import Home from "@/components/pages/home";
import ReactQueryContainer from "../react-query";
import RecoliContainer from "../recoil";
import RootContainerImpl from "./types";
import { Toaster } from "react-hot-toast";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ReactQueryContainer>
        <RecoliContainer>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{ zIndex: 100000 }}
          />
          {children}
          <Home />
        </RecoliContainer>
      </ReactQueryContainer>
    </>
  );
};
export default RootContainer;
