import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Using a specific small logo size and extracting the A symbol if we had it. Since we only have logo.png, we'll make it smaller */}
          <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px]">
            <Image src="/logo.svg" alt="ARKON Logo" fill className="object-contain object-left" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 lg:gap-8 text-sm md:text-base font-normal text-white">
            <Link href="#inicio" className="hover:text-white/80 transition-smooth border-b border-white pb-0.5">Home</Link>
            <Link href="#nosotros" className="hover:text-white/80 transition-smooth">Nosotros</Link>
            <Link href="#servicios" className="hover:text-white/80 transition-smooth">Servicios</Link>
            <Link href="#proyectos" className="hover:text-white/80 transition-smooth">Proyectos</Link>
            <Link href="#contacto" className="hover:text-white/80 transition-smooth">Contacto</Link>
          </nav>

          <div className="h-4 w-px bg-white/40 mx-2 hidden lg:block"></div>

          <button className="text-white hover:text-white/80 transition-smooth text-sm md:text-base font-normal hidden lg:block">
            Es
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};
