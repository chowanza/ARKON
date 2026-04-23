import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-brand-primary text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/logo.png" alt="ARKON Logo" width={120} height={40} className="brightness-0 invert object-contain mb-4" />
          <p className="text-sm">
            Soluciones integrales de ingeniería y consultoría.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-white transition-smooth">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-white transition-smooth">Quiénes Somos</a></li>
            <li><a href="#servicios" className="hover:text-white transition-smooth">Servicios</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p className="text-sm">contacto@arkon.com</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
        © {new Date().getFullYear()} ARKON C.A. Todos los derechos reservados.
      </div>
    </footer>
  );
};
