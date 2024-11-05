// src/app/servicos/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Servicos: React.FC = () => {
  const services = [
    { href: "/guincho", title: "Guincho", description: "Serviço de guincho 24 horas" },
    { href: "/pneu", title: "Troca de Pneu", description: "Troca de pneus rápida e segura" },
    { href: "/colisao", title: "Colisão", description: "Assistência para colisões" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gradient-to-br from-sky-400 to-blue-600 text-white">
      <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <Link key={service.title} href={service.href} passHref>
            <div className="bg-white p-5 rounded-lg shadow-md text-center text-gray-800 cursor-pointer hover:shadow-xl">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
