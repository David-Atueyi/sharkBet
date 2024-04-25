import { useState } from "react";

export const useHandleComponentVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleComponentContentVisibility = () => {
    !isVisible ? setIsVisible(true) : null;
    window.document.body.style.overflow = "hidden";
  };

  const handleCloseComponentContentVisibility = () => {
    isVisible ? setIsVisible(false) : null;
    window.document.body.style.overflow = "";
  };

  return {
    isVisible,
    handleComponentContentVisibility,
    handleCloseComponentContentVisibility,
  };
};
