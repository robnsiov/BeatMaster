import { useEffect, useState } from "react";

const useImage = (loaded: () => void) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const endLoading = () => {
    return setLoading(false);
  };

  useEffect(() => {
    if (!loading) loaded();
  }, [loading]);
  const activationError = () => {
    setError(true);
    endLoading();
  };
  return { error, loading, activationError, endLoading };
};
export default useImage;
