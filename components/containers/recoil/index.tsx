"use client";
import { RecoilRoot } from "recoil";
import RecoilContainer from "./types";

const RecoliContainer = ({ children }: RecoilContainer) => {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};
export default RecoliContainer;
