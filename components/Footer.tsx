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
      className={`${alfa.className} fixed bottom-4 left-4 right-4 md:left-[565px] font-bold text-[24pt] text-black/100 z-40`}
    >
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="text-left">
          {/* Empty left column */}
        </div>
        <div className="text-center">
          <Link href="/contact" className="relative group inline-block">
            <span className="relative z-10">contact</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[395px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
              <Image
                src={imgContactOnHover}
                alt="contact hover"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        </div>
        <div className="text-right">
          © bornless labs, {currentYear}
        </div>
      </div>
    </footer>
  );
}
