import { SVGProps } from "react";

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[21px] h-[21px]"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        className="fill-blue-7 stroke-blue-7"
        fillOpacity="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="20"
          strokeDashoffset="20"
          d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="20;0"
          ></animate>
        </path>
        <path
          strokeDasharray="36"
          strokeDashoffset="36"
          d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1"></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="36;0"
          ></animate>
        </path>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.9s"
          dur="0.5s"
          values="0;1"
        ></animate>
      </g>
    </svg>
  );
}
