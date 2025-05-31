"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Registrar el evento de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Clase personalizada para los elementos del menú con efecto underline
  const navLinkClasses = "relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium py-2 group";
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Tegrity-Soft
            </Link>
          </div>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLinkClasses}>
              Inicio
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/servicios" className={navLinkClasses}>
              Servicios
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/proyectos" className={navLinkClasses}>
              Proyectos
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/tecnologias" className={navLinkClasses}>
              Tecnologías
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/contacto" className={navLinkClasses}>
              Contacto
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contacto" 
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Contáctame
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de hamburguesa */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icono de cerrar */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          <Link 
            href="/" 
            className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 group"
          >
            Inicio
            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-24"></span>
          </Link>
          <Link 
            href="/servicios" 
            className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 group"
          >
            Servicios
            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-24"></span>
          </Link>
          <Link 
            href="/proyectos" 
            className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 group"
          >
            Proyectos
            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-24"></span>
          </Link>
          <Link 
            href="/tecnologias" 
            className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 group"
          >
            Tecnologías
            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-24"></span>
          </Link>
          <Link 
            href="/contacto" 
            className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 group"
          >
            Contacto
            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-24"></span>
          </Link>
          <Link 
            href="/contacto" 
            className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
