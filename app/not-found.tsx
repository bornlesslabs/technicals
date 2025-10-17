import React from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

const FIGMA_NOT_FOUND_BG =
  'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

type SmileyIconProps = {
  className?: string;
};

const SmileyIcon = ({ className }: SmileyIconProps) => (
  <svg
    viewBox="0 0 138 138"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
    preserveAspectRatio="xMidYMid meet"
  >
    <g filter="url(#filter0_g_186_36)">
      <circle cx="69" cy="69" r="60" fill="#F9F908" />
      <circle cx="69" cy="69" r="55" stroke="black" strokeWidth="10" fill="none" />
    </g>
    <g filter="url(#filter1_g_186_36)">
      <circle cx="47" cy="59" r="10" fill="black" />
    </g>
    <g filter="url(#filter2_g_186_36)">
      <circle cx="91" cy="59" r="10" fill="black" />
    </g>
    <g filter="url(#filter3_g_186_36)">
      <path
        d="M47 83L53 91L59 95L64 97H72L81 95L87 91L92 83"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    <defs>
      <filter
        id="filter0_g_186_36"
        x="0.2"
        y="0.2"
        width="137.6"
        height="137.6"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.17241378128528595 0.17241378128528595"
          numOctaves="3"
          seed="1867"
          result="displacementX"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.17241378128528595 0.17241378128528595"
          numOctaves="3"
          seed="1868"
          result="displacementY"
        />
        <feColorMatrix
          in="displacementX"
          type="matrix"
          values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1"
          result="displacementXRed"
        />
        <feColorMatrix
          in="displacementY"
          type="matrix"
          values="0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1"
        />
        <feComposite in="displacementXRed" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feDisplacementMap
          in="shape"
          scale="17.600000381469727"
          xChannelSelector="R"
          yChannelSelector="G"
          width="100%"
          height="100%"
        />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        <feComponentTransfer result="sourceDisplacedAlpha">
          <feFuncA type="gamma" exponent="0.2" />
        </feComponentTransfer>
        <feColorMatrix
          in="shape"
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
        />
        <feComponentTransfer result="inputSourceAlpha">
          <feFuncA type="gamma" exponent="0.2" />
        </feComponentTransfer>
        <feComposite
          in="sourceDisplacedAlpha"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
          result="displacementAlphasMultiplied"
        />
        <feComposite
          in="displacementAlphasMultiplied"
          operator="arithmetic"
          k1="0"
          k2="0"
          k3="-0.5"
          k4="0.5"
          result="centeringAdjustment"
        />
        <feComposite
          in="displacementX"
          in2="displacementAlphasMultiplied"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        />
        <feComposite in="centeringAdjustment" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1"
          result="displacementXFinal"
        />
        <feComposite
          in="displacementY"
          in2="displacementAlphasMultiplied"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        />
        <feComposite in="centeringAdjustment" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1"
          result="displacementYFinal"
        />
        <feComposite
          in="displacementXFinal"
          in2="displacementYFinal"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
        />
        <feComposite in2="displacementAlphasMultiplied" operator="in" result="displacementMap" />
        <feFlood floodColor="rgb(127, 127, 127)" floodOpacity="1" />
        <feComposite in2="displacementAlphasMultiplied" operator="out" />
        <feComposite in2="displacementMap" operator="over" result="displacementMapWithBg" />
        <feDisplacementMap
          in="shape"
          scale="17.600000381469727"
          xChannelSelector="R"
          yChannelSelector="G"
          width="100%"
          height="100%"
          result="displacedImage"
        />
        <feColorMatrix
          in="shape"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0"
          result="imageOpaque"
        />
        <feDisplacementMap
          in="imageOpaque"
          in2="displacementMapWithBg"
          scale="17.600000381469727"
          xChannelSelector="R"
          yChannelSelector="G"
          width="100%"
          height="100%"
          result="displacedImageOpaque"
        />
        <feColorMatrix
          in="displacedImage"
          type="matrix"
          values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0"
          result="displacedImageRed"
        />
        <feColorMatrix
          in="shape"
          type="matrix"
          values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0"
        />
        <feComposite in="displacedImageRed" operator="atop" result="transparencyRedMap" />
        <feColorMatrix
          in="transparencyRedMap"
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"
          result="transparencyAlphaMap"
        />
        <feComposite in="displacedImageOpaque" in2="imageOpaque" operator="over" />
        <feComposite in2="transparencyAlphaMap" operator="in" result="effect1_texture_186_36" />
      </filter>
      <filter
        id="filter1_g_186_36"
        x="33"
        y="45"
        width="28"
        height="28"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.24390244483947754 0.24390244483947754"
          numOctaves="3"
          seed="2931"
        />
        <feDisplacementMap
          in="shape"
          scale="8"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="filter2_g_186_36"
        x="77"
        y="45"
        width="28"
        height="28"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.28571429848670959 0.28571429848670959"
          numOctaves="3"
          seed="30"
        />
        <feDisplacementMap
          in="shape"
          scale="8"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="filter3_g_186_36"
        x="41.0998"
        y="77.0995"
        width="56.8008"
        height="25.8005"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.3125 0.3125"
          numOctaves="3"
          seed="4646"
        />
        <feDisplacementMap
          in="shape"
          scale="3.7999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default function NotFound() {
  const bgImage = FIGMA_NOT_FOUND_BG;

  return (
    <section
      data-name="not-found"
      className="relative w-full h-screen overflow-hidden bg-[#f9f908] flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="not found background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="z-10 flex items-center gap-8">
        <span className={`${alfa.className} text-black text-[128px] leading-none`}>4</span>
        <SmileyIcon className="h-[128px] w-[128px]" />
        <span className={`${alfa.className} text-black text-[128px] leading-none`}>4</span>
      </div>
    </section>
  );
}
