import { useState } from "react";

export const useHandleComponentVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleComponentContentVisibility = () => {
    !isVisible ? setIsVisible(true) : null;
  };

  const handleCloseComponentContentVisibility = () => {
    isVisible ? setIsVisible(false) : null;
  };

  return {
    isVisible,
    handleComponentContentVisibility,
    handleCloseComponentContentVisibility,
  };
};
