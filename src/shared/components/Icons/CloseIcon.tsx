import * as React from "react";
import { IconProps } from "./types";

export const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5859 12L5.63615 7.05025C5.24563 6.65972 5.24563 6.02656 5.63615 5.63603C6.02668 5.24551 6.65984 5.24551 7.05037 5.63603L12.0001 10.5858L16.9499 5.63603C17.3404 5.24551 17.9736 5.24551 18.3641 5.63603C18.7546 6.02656 18.7546 6.65972 18.3641 7.05025L13.4143 12L18.3641 16.9497C18.7546 17.3403 18.7546 17.9734 18.3641 18.364C17.9736 18.7545 17.3404 18.7545 16.9499 18.364L12.0001 13.4142L7.05037 18.364C6.65984 18.7545 6.02668 18.7545 5.63615 18.364C5.24563 17.9734 5.24563 17.3403 5.63615 16.9497L10.5859 12Z"
          fill={color}
        />
      </svg>
    );
  },
);

CloseIcon.displayName = "CloseIcon";

export default CloseIcon;
