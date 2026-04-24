import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dictionary, Locale } from '@/dictionaries/getDictionary';

interface FooterProps {
  dict: Dictionary;
  lang: Locale;
}

export const Footer = ({ dict, lang }: FooterProps) => {
  return (
    <footer className="bg-brand-primary text-slate-300 py-20">
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Logo Col */}
        <div className="flex items-start">
          <div className="relative w-32 h-32 md:w-36 md:h-36">
            <Image src="/logo_in_white.svg" alt="ARKON Logo" fill className="object-contain object-left" />
          </div>
        </div>
        
        {/* Links Col */}
        <div>
          <h4 className="text-white font-bold mb-6 text-[15px] tracking-wide">{dict.footer.quickLinks.title}</h4>
          <ul className="space-y-4 text-[14px] font-light text-slate-300">
            <li><Link href={`/${lang}`} className="hover:text-white transition-smooth">{dict.footer.quickLinks.home}</Link></li>
            <li><Link href={`/${lang}/nosotros`} className="hover:text-white transition-smooth">{dict.footer.quickLinks.nosotros}</Link></li>
            <li><Link href={`/${lang}/servicios`} className="hover:text-white transition-smooth">{dict.footer.quickLinks.servicios}</Link></li>
          </ul>
        </div>
        
        {/* Contacto Col */}
        <div>
          <h4 className="text-white font-bold mb-6 text-[15px] tracking-wide">{dict.footer.contact.title}</h4>
          <ul className="space-y-6 text-[14px] font-light text-slate-300">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              <span>agarcia@arkonv.com</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
              <span className="leading-relaxed whitespace-pre-line">
                +58 281- 2811869 / 414-8390026{"\n"}
                412-8390029 / +1 832-387-3013
              </span>
            </li>
          </ul>
        </div>
        
        {/* Direcciones Col */}
        <div>
          <div className="mb-8">
            <h4 className="text-white font-bold mb-4 text-[15px] tracking-wide">{dict.footer.fiscal.title}</h4>
            <p className="text-[14px] font-light leading-relaxed text-slate-300">
              {dict.footer.fiscal.line1}<br className="mb-2" />
              {dict.footer.fiscal.line2}<br className="mb-2" />
              {dict.footer.fiscal.line3}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-[15px] tracking-wide">{dict.footer.operativa.title}</h4>
            <p className="text-[14px] font-light leading-relaxed text-slate-300">
              {dict.footer.operativa.line1}<br className="mb-2" />
              {dict.footer.operativa.line2}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-[13px] font-light text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} ARKON, C.A. {dict.footer.rights}
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Politica de Privacidad</Link>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Terminos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
