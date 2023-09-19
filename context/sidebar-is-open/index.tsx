import { atom } from "recoil";
import { SidebarIsOpenStateImpl } from "./types";

const sidebarIsOpenState = atom<SidebarIsOpenStateImpl>({
  key: "sidebarIsOpen",
  default: false,
});

export default sidebarIsOpenState;
