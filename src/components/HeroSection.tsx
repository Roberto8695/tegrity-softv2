"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="mt-16 sm:mt-24 md:mt-28 relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white mb-6">
          Build great products
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10">
          Desarrollo soluciones web innovadoras y a medida para potenciar tu
          negocio con las últimas tecnologías del mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">
              Desarrollo Web
            </h3>
            <p className="text-gray-300 text-sm">
              Sitios y aplicaciones web modernas, responsivas y optimizadas
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">
              Diseño UI/UX
            </h3>
            <p className="text-gray-300 text-sm">
              Interfaces intuitivas y experiencias de usuario excepcionales
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">
              Optimización
            </h3>
            <p className="text-gray-300 text-sm">
              Mejora de rendimiento y SEO para mayor visibilidad
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/servicios"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Ver servicios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition-all duration-300 flex items-center justify-center"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
