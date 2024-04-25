import { IAuthFormButton } from "../../base/interface/IAuthFormButton";

export const Button = ({ className, nameOfButton }: IAuthFormButton) => {
  return <button className={className}>{nameOfButton}</button>;
};
