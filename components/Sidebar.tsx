'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

// Figma-provided asset constants with proper GitHub Pages paths
const imgWorkOnHover = getAssetPath('assets/sidebar-1.svg');
const imgCodeOnHover = getAssetPath('assets/sidebar-2.svg');
const imgWritingOnHover = getAssetPath('assets/sidebar-3.svg');
const imgDesignOnHover = getAssetPath('assets/sidebar-4.svg');
const imgSmiley = getAssetPath('assets/smiley.svg');

const SmileyIcon = () => (
  <svg
    viewBox="0 0 138 138"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[120px] w-[120px]"
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
      {/* full filter defs from original SVG */}
      <filter id="filter0_g_186_36" x="0.2" y="0.2" width="137.6" height="137.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence type="fractalNoise" baseFrequency="0.17241378128528595 0.17241378128528595" numOctaves="3" seed="1867" result="displacementX" />
        <feTurbulence type="fractalNoise" baseFrequency="0.17241378128528595 0.17241378128528595" numOctaves="3" seed="1868" result="displacementY" />
        <feColorMatrix in="displacementX" type="matrix" values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1" result="displacementXRed" />
        <feColorMatrix in="displacementY" type="matrix" values="0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1" />
        <feComposite in="displacementXRed" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feDisplacementMap in="shape" scale="17.600000381469727" xChannelSelector="R" yChannelSelector="G" width="100%" height="100%" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        <feComponentTransfer result="sourceDisplacedAlpha">
          <feFuncA type="gamma" exponent="0.2" />
        </feComponentTransfer>
        <feColorMatrix in="shape" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        <feComponentTransfer result="inputSourceAlpha">
          <feFuncA type="gamma" exponent="0.2" />
        </feComponentTransfer>
        <feComposite in="sourceDisplacedAlpha" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="displacementAlphasMultiplied" />
        <feComposite in="displacementAlphasMultiplied" operator="arithmetic" k1="0" k2="0" k3="-0.5" k4="0.5" result="centeringAdjustment" />
        <feComposite in="displacementX" in2="displacementAlphasMultiplied" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
        <feComposite in="centeringAdjustment" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feColorMatrix type="matrix" values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1" result="displacementXFinal" />
        <feComposite in="displacementY" in2="displacementAlphasMultiplied" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
        <feComposite in="centeringAdjustment" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1" result="displacementYFinal" />
        <feComposite in="displacementXFinal" in2="displacementYFinal" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        <feComposite in2="displacementAlphasMultiplied" operator="in" result="displacementMap" />
        <feFlood floodColor="rgb(127, 127, 127)" floodOpacity="1" />
        <feComposite in2="displacementAlphasMultiplied" operator="out" />
        <feComposite in2="displacementMap" operator="over" result="displacementMapWithBg" />
        <feDisplacementMap in="shape" scale="17.600000381469727" xChannelSelector="R" yChannelSelector="G" width="100%" height="100%" result="displacedImage" />
        <feColorMatrix in="shape" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0" result="imageOpaque" />
        <feDisplacementMap in="imageOpaque" in2="displacementMapWithBg" scale="17.600000381469727" xChannelSelector="R" yChannelSelector="G" width="100%" height="100%" result="displacedImageOpaque" />
        <feColorMatrix in="displacedImage" type="matrix" values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0" result="displacedImageRed" />
        <feColorMatrix in="shape" type="matrix" values="0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0" />
        <feComposite in="displacedImageRed" operator="atop" result="transparencyRedMap" />
        <feColorMatrix in="transparencyRedMap" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="transparencyAlphaMap" />
        <feComposite in="displacedImageOpaque" in2="imageOpaque" operator="over" />
        <feComposite in2="transparencyAlphaMap" operator="in" result="effect1_texture_186_36" />
      </filter>
      <filter id="filter1_g_186_36" x="33" y="45" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence type="fractalNoise" baseFrequency="0.24390244483947754 0.24390244483947754" numOctaves="3" seed="2931" />
        <feDisplacementMap in="shape" scale="8" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter id="filter2_g_186_36" x="77" y="45" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence type="fractalNoise" baseFrequency="0.28571429848670959 0.28571429848670959" numOctaves="3" seed="30" />
        <feDisplacementMap in="shape" scale="8" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter id="filter3_g_186_36" x="41.0998" y="77.0995" width="56.8008" height="25.8005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence type="fractalNoise" baseFrequency="0.3125 0.3125" numOctaves="3" seed="4646" />
        <feDisplacementMap in="shape" scale="3.7999999523162842" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
        <feMerge result="effect1_texture_186_36">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const v = localStorage.getItem('sidebar:open');
      return v === null ? false : v === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sidebar:open', String(open));
    } catch {}
  }, [open]);

  // close on Escape for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (typeof window !== 'undefined') window.addEventListener('keydown', onKey);
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Check if we're on a subpage (not the home page)
  const isSubpage = pathname !== '/';

  // Don't render sidebar content on subpages, but show smiley toggle
  if (isSubpage) {
    return (
      <>
        {/* Collapsed smiley button (visible when closed on subpages) */}
        {!open && (
          <button
            aria-label="Open sidebar"
            title="Open sidebar"
            onClick={() => setOpen(true)}
            className="fixed left-0 top-0 z-50 w-[120px] h-[120px] bg-transparent p-0 hover:opacity-80 transition-opacity"
          >
            <SmileyIcon />
          </button>
        )}

        {/* Overlay when open (click to close) */}
        {open && (
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-transparent transition-opacity"
          />
        )}

        {/* Sidebar panel on subpages */}
        <aside
          aria-hidden={!open}
          aria-expanded={open}
          className={`fixed left-0 top-0 h-screen z-40 bg-[#f9f908] w-[545px] transform transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
          data-name="sidebar"
          data-node-id="58:113"
        >
          {/* Close button */}
          <button
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 rounded hover:bg-black/5 z-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Sidebar content */}
          <div className="sidebar-content relative h-full">
            <div className="absolute left-[13px] top-0 z-10">
              <h3 className={`${alfa.className} text-black text-[96px] leading-none`}>home</h3>
            </div>

            <Link href="/work" className="group absolute left-[13px] top-[177px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWorkOnHover}
                  alt="work hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                work
              </h2>
            </Link>

            <Link href="/code" className="group absolute left-[15px] top-[358px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgCodeOnHover}
                  alt="code hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                code
              </h3>
            </Link>

            <Link href="/writing" className="group absolute left-[9px] top-[566px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWritingOnHover}
                  alt="writing hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                writing
              </h3>
            </Link>

            <Link href="/design" className="group absolute left-[9px] top-[774px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgDesignOnHover}
                  alt="design hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                design
              </h3>
            </Link>
          </div>
        </aside>
      </>
    );
  }

  return (
    <aside
      className="fixed left-0 top-0 z-50 bg-[#f9f908]"
      data-name="sidebar"
      data-node-id="58:113"
    >
      {/* Mobile: stacked, responsive font sizes */}
      <div className="md:hidden p-4 sm:p-6 space-y-6 sm:space-y-8">
        <div className="group flex items-center justify-between">
          <h2 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none`}>
            home
          </h2>
        </div>

        <Link href="/work" className="group relative">
          <h2
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            work
          </h2>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgWorkOnHover} alt="work hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/code" className="group relative">
          <h3
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            code
          </h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] sm:w-[170px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgCodeOnHover} alt="code hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/writing" className="group relative">
          <h3
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            writing
          </h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] sm:w-[340px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image
              src={imgWritingOnHover}
              alt="writing hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <Link href="/design" className="group relative">
          <h3
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            design
          </h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[210px] sm:w-[300px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image
              src={imgDesignOnHover}
              alt="design hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
      </div>

      {/* Desktop: always visible and expanded */}
      <div className="hidden md:block relative h-screen">
        <div className="sidebar-container relative h-full bg-[#f9f908] w-[545px]">
          {/* Home heading */}
          <div className="absolute left-[13px] top-0 z-10">
            <h3 className={`${alfa.className} text-black text-[96px] leading-none`}>home</h3>
          </div>

          {/* Menu content - always visible */}
          <div className="sidebar-content absolute inset-0 max-w-[545px]">
            <Link href="/work" className="group absolute left-[13px] top-[177px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWorkOnHover}
                  alt="work hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                work
              </h2>
            </Link>

            <Link href="/code" className="group absolute left-[15px] top-[358px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgCodeOnHover}
                  alt="code hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                code
              </h3>
            </Link>

            <Link href="/writing" className="group absolute left-[9px] top-[566px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWritingOnHover}
                  alt="writing hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                writing
              </h3>
            </Link>

            <Link href="/design" className="group absolute left-[9px] top-[774px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgDesignOnHover}
                  alt="design hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                design
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
