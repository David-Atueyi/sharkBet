
import { SVGProps } from "react";

interface IXIcon {
  extraStyle?: string;
  textStyle?: string;
  props?: SVGProps<SVGSVGElement>;
  handleClick?: () => void;
}


export function XIcon({ extraStyle, handleClick, textStyle, props }: IXIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`m-2 ${extraStyle}`}
      onClick={handleClick}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        className={`${textStyle}`}
        strokeDasharray="16"
        strokeDashoffset="16"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M7 7L17 17">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
        <path d="M17 7L7 17">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}