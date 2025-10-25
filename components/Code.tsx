import React from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

type CodeProps = {
  /** optional background image URL (falls back to Figma placeholder) */
  bgImage?: string;
};

const FIGMA_CODE_BG = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

export default function Code({ bgImage }: CodeProps) {
  const imageSrc = bgImage ?? FIGMA_CODE_BG;

  return (
    <section
      data-name="code"
      className="relative w-full h-screen overflow-hidden bg-[#f9f908] flex items-start justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} alt="code background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div data-name="code-page" className="fixed left-[140px] top-0 z-10">
        <h1 className={`${alfa.className} text-black text-[96px] leading-none`} aria-label="code">
          code
        </h1>
      </div>
    </section>
  );
}
