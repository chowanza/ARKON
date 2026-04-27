"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AccordionProps {
  title: string;
  icon?: string;
  contactHref?: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, icon, contactHref, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E5E7EB] rounded-[12px] overflow-hidden bg-white mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4 flex-1 pr-4">
          {icon && (
            <div className="w-6 h-6 relative flex-shrink-0">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
          )}
          <span className={`font-semibold text-[14.5px] transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-800 group-hover:text-[#E57F26]'}`}>
            {title}
          </span>
        </div>
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-[#E57F26]' : 'rotate-0 text-slate-400 group-hover:text-[#E57F26]'}`}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-[14.5px] leading-relaxed text-slate-600 font-light">
            {children}
            {contactHref && (
              <div className="mt-3 flex justify-end">
                <Link href={contactHref} className="text-[#E57F26] hover:text-[#D46B12] transition-colors p-1" title="Solicitar este servicio">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

