'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

// Figma-provided asset constants with proper GitHub Pages paths
const imgWorkOnHover = getAssetPath('assets/sidebar-1.svg');
const imgCodeOnHover = getAssetPath('assets/sidebar-2.svg');
const imgWritingOnHover = getAssetPath('assets/sidebar-3.svg');
const imgDesignOnHover = getAssetPath('assets/sidebar-4.svg');
const imgContactOnHover = getAssetPath('assets/sidebar-5.svg');

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className="fixed left-0 top-0 z-50 bg-[#f9f908]"
      data-name="sidebar"
      data-node-id="58:113"
    >
      {/* Mobile: stacked, keep heading sizes intact */}
      <div className="md:hidden p-6 space-y-10">
        <div className="group flex items-center justify-between">
          <h2 className={`${alfa.className} text-black text-[128px] leading-none`}>menu</h2>
        </div>

        <div className="group flex items-center justify-between">
          <h2 className={`${alfa.className} text-black text-[128px] leading-none`}>work</h2>
          <div className="relative w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
            <Image src={imgWorkOnHover} alt="work hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        <div className="group flex items-center justify-between">
          <h3 className={`${alfa.className} text-black text-[128px] leading-none`}>code</h3>
          <div className="relative w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
            <Image src={imgCodeOnHover} alt="code hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        <div className="group flex items-center justify-between">
          <h3 className={`${alfa.className} text-black text-[128px] leading-none`}>writing</h3>
          <div className="relative w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
            <Image
              src={imgWritingOnHover}
              alt="writing hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="group flex items-center justify-between">
          <h3 className={`${alfa.className} text-black text-[128px] leading-none`}>design</h3>
          <div className="relative w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
            <Image
              src={imgDesignOnHover}
              alt="design hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="group flex items-center justify-between">
          <h3 className={`${alfa.className} text-black text-[128px] leading-none`}>contact</h3>
          <div className="relative w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
            <Image
              src={imgContactOnHover}
              alt="contact hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Desktop: collapsed by default, expand on hover */}
      <div className="hidden md:block relative h-screen">
        <div
          className={`sidebar-container relative transition-all ease-out overflow-hidden h-full bg-[#f9f908] ${
            isExpanded ? 'w-[545px]' : 'w-[420px]'
          }`}
          style={{ transitionDuration: isExpanded ? '0.3s' : '0s' }}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Menu trigger area - triggers expansion, entire sidebar keeps it open */}
          <div 
            className="menu-trigger absolute left-[13px] top-0 w-[402px] h-[132px] z-10"
            onMouseEnter={() => setIsExpanded(true)}
          >
            <h3 className={`${alfa.className} text-black text-[128px] leading-none cursor-pointer`}>
              menu
            </h3>
          </div>

          {/* Expanded content - hidden by default, shown on menu hover */}
          <div className={`sidebar-expanded-content absolute inset-0 max-w-[545px] transition-all duration-300 ${
            isExpanded ? 'visible' : 'invisible'
          }`}>
            <div className="group absolute left-[13px] top-[177px] w-[366px] h-[136px]">
              <div className="absolute left-0 top-0 w-[366px] h-[136px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWorkOnHover}
                  alt="work hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2
                className={`${alfa.className} text-black text-[128px] leading-none relative z-10`}
              >
                work
              </h2>
            </div>

            <div className="group absolute left-[15px] top-[358px] w-[320px] h-[163px]">
              <div className="absolute left-0 top-0 w-[320px] h-[163px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgCodeOnHover}
                  alt="code hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3
                className={`${alfa.className} text-black text-[128px] leading-none relative z-10`}
              >
                code
              </h3>
            </div>

            <div className="group absolute left-[9px] top-[566px] w-[516px] h-[163px]">
              <div className="absolute left-0 top-0 w-[516px] h-[163px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWritingOnHover}
                  alt="writing hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3
                className={`${alfa.className} text-black text-[128px] leading-none relative z-10`}
              >
                writing
              </h3>
            </div>

            <div className="group absolute left-[9px] top-[774px] w-[452px] h-[159px]">
              <div className="absolute left-0 top-0 w-[452px] h-[159px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgDesignOnHover}
                  alt="design hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3
                className={`${alfa.className} text-black text-[128px] leading-none relative z-10`}
              >
                design
              </h3>
            </div>

            <div className="group absolute left-[9px] top-[978px] w-[527px] h-[133px]">
              <div className="absolute left-0 top-0 w-[527px] h-[133px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgContactOnHover}
                  alt="contact hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3
                className={`${alfa.className} text-black text-[128px] leading-none relative z-10`}
              >
                contact
              </h3>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
