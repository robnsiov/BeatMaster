import { ToastOptions } from "react-hot-toast";

export default interface MakeToastImpl {
  msg: string;
  type: "success" | "error" | "loading";
  options?: ToastOptions;
}
