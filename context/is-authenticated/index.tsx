import { atom } from "recoil";
import { IsAuthenticatedImpl } from "./types";

const isAuthenticatedState = atom<IsAuthenticatedImpl>({
  key: "isAuthenticated",
  default: "loading",
});

export default isAuthenticatedState;
