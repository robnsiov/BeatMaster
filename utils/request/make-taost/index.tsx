import toast from "react-hot-toast";
import MakeToastImpl from "./types";

const makeToast = ({ msg, type, options = {} }: MakeToastImpl) => {
  const primaryColor =
    document.documentElement.style.getPropertyValue("--primary");
  toast[type](msg, {
    ...options,
    style: { background: primaryColor },
    className: "text-white",
  });
};
export default makeToast;
