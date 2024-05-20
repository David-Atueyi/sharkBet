import { SVGProps } from "react";

export function Email({props ,extraStyle}:{props?: SVGProps<SVGSVGElement>,extraStyle?:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className={`${extraStyle}`}
        d="M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}
