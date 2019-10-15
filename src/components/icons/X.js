import React from "react";
import BackInWhite from "./BackInWhite";

export default function X({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        id="times-solid"
        d="M13.791,90l5.686-5.686a1.787,1.787,0,0,0,0-2.527l-1.264-1.264a1.787,1.787,0,0,0-2.527,0L10,86.209,4.314,80.523a1.787,1.787,0,0,0-2.527,0L.523,81.787a1.787,1.787,0,0,0,0,2.527L6.209,90,.523,95.686a1.787,1.787,0,0,0,0,2.527l1.264,1.264a1.787,1.787,0,0,0,2.527,0L10,93.791l5.686,5.686a1.787,1.787,0,0,0,2.527,0l1.264-1.264a1.787,1.787,0,0,0,0-2.527Z"
        transform="translate(0 -80)"
      />
    </svg>
  );
}
