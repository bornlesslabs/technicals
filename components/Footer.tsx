'use client';

import React from 'react';
import Image from 'next/image';
import { Handjet } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const handjet = Handjet({ subsets: ['latin'], weight: '400', display: 'swap' });

const barcode = getAssetPath('assets/bornless-labs-pdf417.gif');

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`font-departure sticky bottom-0 w-full px-6 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-24 pb-6 md:pb-8 lg:pb-10 font-bold text-black/100 z-20 bg-[#f9f908]`}
    >
      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-2 items-center sm:hidden text-[16pt]">
        <div className="text-center flex flex-col items-center gap-2">
          <div><span className={handjet.className}>©</span> bornless labs, {currentYear}</div>
          <Image
            src={barcode}
            alt="Bornless Labs Barcode"
            width={300}
            height={30}
            className="object-fill mix-blend-multiply"
          />
        </div>
      </div>

      {/* Tablet and Desktop: side-by-side layout with flexbox */}
      <div className="hidden sm:flex items-baseline justify-between text-[18pt] sm:text-[20pt] lg:text-[24pt]">
        <div className="flex-1">{/* Empty space for balance */}</div>
        <div className="flex-1 text-right flex flex-col items-end gap-2">
          <div><span className={handjet.className}>©</span> bornless labs, {currentYear}</div>
          <Image
            src={barcode}
            alt="Bornless Labs Barcode"
            width={150}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
