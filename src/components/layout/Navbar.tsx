"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Dictionary, Locale } from '@/dictionaries/getDictionary';

interface NavbarProps {
  dict: Dictionary;
  lang: Locale;
}

export const Navbar = ({ dict, lang }: NavbarProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleLang = lang === 'es' ? 'en' : 'es';

  const getToggleHref = () => {
    if (!pathname) return `/${toggleLang}`;
    if (pathname.startsWith(`/${lang}`)) {
      return pathname.replace(`/${lang}`, `/${toggleLang}`);
    }
    return `/${toggleLang}${pathname}`;
  };

  const isActive = (path: string) => {
    if (path === `/${lang}`) {
      return pathname === `/${lang}`;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 lg:px-12 h-24 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          {/* Using a specific small logo size and extracting the A symbol if we had it. Since we only have logo.png, we'll make it smaller */}
          <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px]">
            <Image src="/logo.svg" alt="ARKON Logo" fill className="object-contain object-left" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 lg:gap-8 text-[15px] md:text-[17px] font-normal text-white">
            <Link href={`/${lang}`} className="relative group pb-1">
              <span className="group-hover:text-white/90 transition-smooth">{dict.navbar.home}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#E57F26] transition-transform origin-left duration-300 ${isActive(`/${lang}`) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link href={`/${lang}/nosotros`} className="relative group pb-1">
              <span className="group-hover:text-white/90 transition-smooth">{dict.navbar.nosotros}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#E57F26] transition-transform origin-left duration-300 ${isActive(`/${lang}/nosotros`) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link href={`/${lang}/servicios`} className="relative group pb-1">
              <span className="group-hover:text-white/90 transition-smooth">{dict.navbar.servicios}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#E57F26] transition-transform origin-left duration-300 ${isActive(`/${lang}/servicios`) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link href={`/${lang}/contacto`} className="relative group pb-1">
              <span className="group-hover:text-white/90 transition-smooth">{dict.navbar.contacto}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#E57F26] transition-transform origin-left duration-300 ${isActive(`/${lang}/contacto`) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </nav>

          <div className="h-5 w-[1.5px] bg-white/40 mx-2 hidden lg:block"></div>

          <Link href={getToggleHref()} className="text-white hover:text-white/80 transition-smooth text-[15px] md:text-[17px] font-normal hidden lg:block">
            {dict.navbar.languageToggle}
          </Link>
        </div>

        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#1e293b]/95 backdrop-blur-md border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6 text-[17px] font-medium text-white">
          <Link href={`/${lang}`} onClick={() => setIsMenuOpen(false)} className={`transition-smooth ${isActive(`/${lang}`) ? 'text-[#E57F26]' : 'hover:text-white/80'}`}>{dict.navbar.home}</Link>
          <Link href={`/${lang}/nosotros`} onClick={() => setIsMenuOpen(false)} className={`transition-smooth ${isActive(`/${lang}/nosotros`) ? 'text-[#E57F26]' : 'hover:text-white/80'}`}>{dict.navbar.nosotros}</Link>
          <Link href={`/${lang}/servicios`} onClick={() => setIsMenuOpen(false)} className={`transition-smooth ${isActive(`/${lang}/servicios`) ? 'text-[#E57F26]' : 'hover:text-white/80'}`}>{dict.navbar.servicios}</Link>
          <Link href={`/${lang}/contacto`} onClick={() => setIsMenuOpen(false)} className={`transition-smooth ${isActive(`/${lang}/contacto`) ? 'text-[#E57F26]' : 'hover:text-white/80'}`}>{dict.navbar.contacto}</Link>
          
          <div className="h-[1px] w-full bg-white/20 my-1"></div>
          
          <Link href={getToggleHref()} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-white/80 transition-smooth">
            <span className="font-light text-white/60 mr-2">Language:</span> {dict.navbar.languageToggle}
          </Link>
        </nav>
      </div>
    </header>
  );
};
