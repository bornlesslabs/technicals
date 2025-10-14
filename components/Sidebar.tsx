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

export default function Sidebar() {
  const pathname = usePathname();

  // Check if we're on a subpage (not the home page)
  const isSubpage = pathname !== '/';

  // Don't render sidebar at all on subpages
  if (isSubpage) {
    return null;
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
          <h2 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none`}>home</h2>
        </div>

        <Link href="/work" className="group relative">
          <h2 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}>work</h2>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgWorkOnHover} alt="work hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/code" className="group relative">
          <h3 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}>code</h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] sm:w-[170px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgCodeOnHover} alt="code hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/writing" className="group relative">
          <h3 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}>writing</h3>
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
          <h3 className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}>design</h3>
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
            <h3 className={`${alfa.className} text-black text-[96px] leading-none`}>
              home
            </h3>
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
              <h2
                className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}
              >
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
              <h3
                className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}
              >
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
              <h3
                className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}
              >
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
              <h3
                className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}
              >
                design
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
