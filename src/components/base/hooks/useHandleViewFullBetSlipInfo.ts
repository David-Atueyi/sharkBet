import { useState } from "react";

export const useHandleViewFullBetSlipInfo = () => {
  const [fullBetSlipVisible, setFullBetSlipVisible] = useState<boolean>(false);

  const handleViewFullBetSlipInfo = () => {
    !fullBetSlipVisible ? setFullBetSlipVisible(true) : null;
  };

  const handleCloseViewFullBetSlipInfo = () => {
    fullBetSlipVisible ? setFullBetSlipVisible(false) : null;
  };

  return { fullBetSlipVisible, handleViewFullBetSlipInfo, handleCloseViewFullBetSlipInfo };
}

