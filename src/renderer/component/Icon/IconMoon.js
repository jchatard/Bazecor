import * as React from "react";

function IconMoon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="path-1-inside-1" fill="white">
        <path d="M1 12C1 18.0751 5.92487 23 12 23C16.1671 23 19.793 20.6828 21.6596 17.2667C22.0533 16.5461 21.3315 15.7838 20.518 15.8961C20.0218 15.9646 19.515 16 19 16C12.9249 16 8 11.0751 8 4.99997C8 4.48493 8.0354 3.97816 8.10389 3.48195C8.21618 2.66849 7.45385 1.94668 6.73324 2.34042C3.31713 4.20697 1 7.83287 1 12Z" />
      </mask>
      <path
        d="M1 12C1 18.0751 5.92487 23 12 23C16.1671 23 19.793 20.6828 21.6596 17.2667C22.0533 16.5461 21.3315 15.7838 20.518 15.8961C20.0218 15.9646 19.515 16 19 16C12.9249 16 8 11.0751 8 4.99997C8 4.48493 8.0354 3.97816 8.10389 3.48195C8.21618 2.66849 7.45385 1.94668 6.73324 2.34042C3.31713 4.20697 1 7.83287 1 12Z"
        stroke="currentColor"
        strokeWidth={1.65}
        strokeLinejoin="round"
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
}

export default IconMoon;