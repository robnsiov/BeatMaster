import { useState } from "react";
import { useEffect } from "react";
import { UseModelImpl } from "./types";

const useModal = ({ open, setOpen }: UseModelImpl) => {
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    setShowChildren(open);
  }, [open]);

  const handleShowForm = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
    setShowChildren(false);
  };

  return {
    showChildren,
    handleShowForm,
  };
};
export default useModal;
