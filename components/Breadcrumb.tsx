'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

// Use the work hover asset for home link
const imgHomeOnHover = getAssetPath('assets/sidebar-1.svg');

type BreadcrumbProps = {
  currentPage: string;
};

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 sm:space-x-2 text-black mb-4">
      <Link
        href="/"
        className={`${alfa.className} text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-none relative group inline-block`}
      >
        <span className="relative z-10">home</span>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] h-[50px] sm:h-[75px] md:h-[100px] lg:h-[150px] opacity-0 group-hover:opacity-100 transition-opacity -z-10">
          <Image
            src={imgHomeOnHover}
            alt="home hover"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Link>
      <span className={`${alfa.className} text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-none`}>/</span>
      <span className={`${alfa.className} text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-none`}>
        {currentPage}
      </span>
    </nav>
  );
}
