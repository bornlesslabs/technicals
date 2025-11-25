'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Alfa_Slab_One } from 'next/font/google';
import { getAssetPath } from '@/lib/assets';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400', display: 'swap' });

// Figma-provided asset constants with proper GitHub Pages paths
const imgWorkOnHover = getAssetPath('assets/sidebar-1.svg');
const imgAboutOnHover = getAssetPath('assets/sidebar-3.svg');
const imgContactOnHover = getAssetPath('assets/sidebar-5.svg');

const smileyX = getAssetPath('assets/smiley-x.svg');
const closeIcon = getAssetPath('icons/close.png');

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem('sidebar:open');
      if (v !== null) {
        setOpen(v === 'true');
      }
    } catch { }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sidebar:open', String(open));
    } catch { }
  }, [open]);

  // close on Escape for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (typeof window !== 'undefined') window.addEventListener('keydown', onKey);
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Close sidebar by default on /home
  useEffect(() => {
    if (pathname === '/home') {
      setOpen(false);
    }
  }, [pathname]);

  // Check if we're on a subpage (not the home page)
  const isSubpage = pathname !== '/';

  // Don't render sidebar content on subpages, but show smiley toggle
  if (isSubpage) {
    return (
      <>
        {!open && (
          <button
            aria-label="Open sidebar"
            title="Open sidebar"
            onClick={() => setOpen(true)}
            className="fixed left-0 top-0 z-50 w-[120px] h-[120px] bg-transparent p-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src={smileyX}
              alt="Smiley"
              width={120}
              height={120}
              className="h-[120px] w-[120px]"
            />
          </button>
        )}

        <aside
          aria-hidden={!open}
          className={`fixed left-0 top-0 h-screen z-40 bg-[#f9f908] border-r-[6px] border-black w-[545px] transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'
            }`}
          data-name="sidebar"
          data-node-id="58:113"
        >
          <button
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 z-50 hover:opacity-80 transition-opacity"
          >
            <Image
              src={closeIcon}
              alt="Close sidebar"
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </button>

          <div className="sidebar-content relative h-full">
            <Link href="/work" className="group absolute left-[13px] top-[177px]" onClick={() => setOpen(false)}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWorkOnHover}
                  alt="work hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                work
              </h2>
            </Link>

            <Link href="/about" className="group absolute left-[15px] top-[358px]" onClick={() => setOpen(false)}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgAboutOnHover}
                  alt="about hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                about
              </h3>
            </Link>

            <Link href="/contact" className="group absolute left-[9px] top-[566px]" onClick={() => setOpen(false)}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgContactOnHover}
                  alt="contact hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                contact
              </h3>
            </Link>
          </div>
        </aside>
      </>
    );
  }

  return (
    <aside
      className="fixed left-0 top-0 z-50 bg-[#f9f908] border-r-[6px] border-black"
      data-name="sidebar"
      data-node-id="58:113"
    >
      {/* Mobile: stacked, responsive font sizes */}
      <div className="md:hidden p-4 sm:p-6 space-y-6 sm:space-y-8">
        <Link href="/work" className="group relative">
          <h2
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            work
          </h2>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgWorkOnHover} alt="work hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/about" className="group relative">
          <h3
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            about
          </h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] sm:w-[170px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image src={imgAboutOnHover} alt="about hover" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <Link href="/contact" className="group relative">
          <h3
            className={`${alfa.className} text-black text-[48px] sm:text-[64px] leading-none relative z-10`}
          >
            contact
          </h3>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[210px] sm:w-[300px] h-[60px] sm:h-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
            <Image
              src={imgContactOnHover}
              alt="contact hover"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
      </div>

      {/* Desktop: always visible and expanded */}
      <div className="hidden md:block relative h-screen">
        <div className="sidebar-container relative h-full bg-[#f9f908] w-[545px]">
          {/* Menu content - always visible */}
          <div className="sidebar-content absolute inset-0 max-w-[545px]">
            <Link href="/work" className="group absolute left-[13px] top-[177px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgWorkOnHover}
                  alt="work hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                work
              </h2>
            </Link>

            <Link href="/about" className="group absolute left-[15px] top-[358px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgAboutOnHover}
                  alt="about hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                about
              </h3>
            </Link>

            <Link href="/contact" className="group absolute left-[9px] top-[566px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-0">
                <Image
                  src={imgContactOnHover}
                  alt="contact hover"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={`${alfa.className} text-black text-[96px] leading-none relative z-10`}>
                contact
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
