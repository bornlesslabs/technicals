import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assets';

const idCard = getAssetPath('assets/mnau-id-card.svg');
type AboutProps = {
  /** optional background image URL (falls back to Figma placeholder) */
  bgImage?: string;
};

const FIGMA_ABOUT_BG = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

export default function About({ bgImage }: AboutProps) {
  const imageSrc = bgImage ?? FIGMA_ABOUT_BG;

  return (
    <section
      data-name="about"
      className="relative w-full h-screen overflow-hidden bg-[#f9f908] flex items-start justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} alt="about background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div data-name="about-page" className="fixed left-[140px] top-0 z-10">
        <h1 className={`font-departure text-black text-[96px] leading-none`} aria-label="about">
          about
        </h1>
      </div>

      <div className="absolute bottom-48 md:bottom-64 right-4 md:right-8 z-10">
        <Image
          src={idCard}
          alt="MNAU ID Card"
          width={150}
          height={100}
          className="object-contain"
        />
      </div>
    </section>
  );
}
