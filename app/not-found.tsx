import React from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

const FIGMA_NOT_FOUND_BG =
  'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

const smileyX = getAssetPath('assets/smiley-x.svg');

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
        <Image
          src={smileyX}
          alt="Smiley"
          width={128}
          height={128}
          className="h-[128px] w-[128px]"
        />
        <span className={`${alfa.className} text-black text-[128px] leading-none`}>4</span>
      </div>
    </section>
  );
}
