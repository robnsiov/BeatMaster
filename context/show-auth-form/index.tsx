import { atom } from "recoil";
import { ShowAuthFormImpl } from "./types";

const showAuthFormState = atom<ShowAuthFormImpl>({
  key: "showAuthForm",
  default: false,
});

export default showAuthFormState;
