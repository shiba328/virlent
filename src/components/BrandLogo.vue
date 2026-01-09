<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 37.87 37.87" 
    aria-label="Virlent Inc. Logo"
    fill="currentColor"
  >
    <defs>
      <filter id="luminosity-invert-noclip" x="-1.76" y="-1.76" width="41.39" height="41.39" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feColorMatrix result="cm" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/>
        <feFlood flood-color="#fff" result="bg"/>
        <feBlend in="cm" in2="bg"/>
      </filter>
      <mask id="logo-mask" x="-1.76" y="-1.76" width="41.39" height="41.39" maskUnits="userSpaceOnUse">
        <g style="filter:url(#luminosity-invert-noclip)">
          <path fill="#fff" d="M39.28,20.74l.35-2.14-16.44-2.71.64-3.86-2.14-.35-.64,3.86-3.02-.5L20.74-1.41l-2.14-.35-2.71,16.44-3.86-.64-.35,2.14,3.86.64-.5,3.02L-1.41,17.13l-.35,2.14,16.44,2.71-.64,3.86,2.14.35.64-3.86,3.02.5-2.71,16.44,2.14.35,2.71-16.44,3.86.64.35-2.14-3.86-.64.5-3.02,16.44,2.71ZM20.2,20.7l-3.02-.5.5-3.02,3.02.5-.5,3.02Z"/>
        </g>
      </mask>
      <clipPath id="logo-clippath">
        <rect x="6.18" y="6.18" width="25.51" height="25.51"/>
      </clipPath>
    </defs>
    
    <g mask="url(#logo-mask)">
      <path d="M30.07,7.81v22.26H7.81V7.81h22.26M31.69,6.18H6.18v25.51h25.51V6.18h0Z"/>
    </g>
    <g clip-path="url(#logo-clippath)">
      <path d="M16.11,27.09l-1.63-.73L19.23-2.4l15.09,6.72-18.2,22.78ZM15.75,25.68h.02S32.5,4.76,32.5,4.76L20.11-.76l-4.36,26.45Z"/>
      <path d="M33.56,34.31L10.78,16.11l.73-1.63,28.77,4.75-6.72,15.09ZM12.18,15.77l20.94,16.73,5.52-12.39-26.45-4.36v.02Z"/>
      <path d="M18.64,40.27l-15.09-6.72L21.76,10.78l1.63.73-4.75,28.77ZM5.37,33.12l12.39,5.52,4.36-26.45h-.02S5.37,33.12,5.37,33.12Z"/>
      <path d="M26.37,23.39L-2.4,18.64,4.31,3.56l22.78,18.2-.73,1.63ZM-.76,17.76l26.45,4.36v-.02S4.76,5.37,4.76,5.37L-.76,17.76Z"/>
    </g>
  </svg>
</template>