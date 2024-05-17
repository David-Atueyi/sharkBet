import { useState } from "react";

export const useHandleDropDown = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleDropDownVisibility = () => {
      !isVisible ? setIsVisible(true) : null;
      document.body.style.overflow = "hidden";
    };

    const handleCloseDropDownVisibility = () => {
      isVisible ? setIsVisible(false) : null;
      document.body.style.overflow = "";
    };

    return {
      isVisible,
      handleDropDownVisibility,
      handleCloseDropDownVisibility,
    };
}
