import * as React from "react";
import { SVGProps } from "react";

const Alert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={111}
    height={111}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M0 92.152h111L55.5 4.937 0 92.152Z"
        fill="#F7B634"
        stroke="#100E36"
        strokeWidth={2.235}
      />
      <path
        d="M52.417 37.946h6.018V52.93l-.782 16.43H53.2l-.783-16.43V37.946Zm-.963 40.563c0-1.244.341-2.227 1.023-2.95.723-.721 1.726-1.082 3.01-1.082 1.043 0 1.965.4 2.768 1.203.842.803 1.264 1.745 1.264 2.829 0 1.203-.381 2.186-1.144 2.949-.762.722-1.725 1.083-2.889 1.083-1.083 0-2.026-.401-2.828-1.204-.803-.802-1.204-1.745-1.204-2.828Z"
        fill="#100E36"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#ffff"
          transform="rotate(-90 55.5 55.5)"
          d="M0 0h111v111H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Alert;
