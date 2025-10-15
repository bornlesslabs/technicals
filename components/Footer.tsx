'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

// Use contact hover asset
const imgContactOnHover = getAssetPath('assets/sidebar-5.svg');

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${alfa.className} fixed bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 font-bold text-black/100 z-40 bg-[#f9f908]`}
    >
      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-2 items-center sm:hidden text-[16pt]">
        <div className="text-center">
          <Link href="/contact" className="relative group inline-block">
            <span className="relative z-10">contact</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[200px] h-[50px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
              <Image
                src={imgContactOnHover}
                alt="contact hover"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        </div>
        <div className="text-center">
          © bornless labs, {currentYear}
        </div>
      </div>

      {/* Tablet and Desktop: side-by-side layout with flexbox */}
      <div className="hidden sm:flex items-baseline justify-between text-[18pt] sm:text-[20pt] lg:text-[24pt]">
        <div className="flex-1">
          {/* Empty space for balance */}
        </div>
        <div className="flex-shrink-0">
          <Link href="/contact" className="relative group inline-block">
            <span className="relative z-10">contact</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] lg:w-[395px] h-[60px] sm:h-[80px] lg:h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
              <Image
                src={imgContactOnHover}
                alt="contact hover"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 text-right">
          © bornless labs, {currentYear}
        </div>
      </div>
    </footer>
  );
}
