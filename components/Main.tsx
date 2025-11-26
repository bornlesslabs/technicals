import React from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

type MainProps = {
  bgImage?: string;
};

const FIGMA_MAIN_BG = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';
const smileysRandom = getAssetPath('assets/smileys-random.svg');

export default function Main({ bgImage }: MainProps) {
  const imageSrc = bgImage ?? FIGMA_MAIN_BG;

  return (
    <section
      data-name="main"
      data-node-id="58:104"
      className="relative w-full h-full overflow-hidden bg-[#f9f908] flex items-start justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} alt="main background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src={smileysRandom}
          alt="Random Smileys"
          width={1000}
          height={800}
          className="w-[80%] h-[80%] object-contain"
          priority
        />
      </div>

      <div className="container mx-auto px-6 pt-8 max-w-7xl">
        <h1
          data-node-id="49:86"
          className={`${alfa.className} text-black text-[40px] md:text-[72px] lg:text-[128px] leading-none`}
        ></h1>
      </div>
    </section>
  );
}
