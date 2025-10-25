import React from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

type DesignProps = {
  /** optional background image URL (falls back to Figma placeholder) */
  bgImage?: string;
};

const FIGMA_DESIGN_BG = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

export default function Design({ bgImage }: DesignProps) {
  const imageSrc = bgImage ?? FIGMA_DESIGN_BG;

  return (
    <section
      data-name="design"
      className="relative w-full h-screen overflow-hidden bg-[#f9f908] flex items-start justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} alt="design background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div data-name="design-page" className="fixed left-[140px] top-0 z-10">
        <h1 className={`${alfa.className} text-black text-[96px] leading-none`} aria-label="design">
          design
        </h1>
      </div>
    </section>
  );
}
