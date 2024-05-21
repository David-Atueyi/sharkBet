export interface IDropDownVisibility {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean, applyOverflow?: boolean) => void;
}