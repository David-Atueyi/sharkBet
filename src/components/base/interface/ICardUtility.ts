export interface ICardUtility {
  hover: boolean;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  updateHover: () => void;
  resetHover: () => void;
}
