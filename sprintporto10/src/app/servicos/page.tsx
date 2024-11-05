// src/app/servicos/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Servicos: React.FC = () => {
  const services = [
    { 
      href: "/guincho", 
      title: "Guincho", 
      description: "Nosso serviço de guincho está disponível 24 horas por dia, 7 dias por semana, para ajudar em qualquer situação emergencial. Se você está com problemas de locomoção, nós oferecemos suporte imediato para garantir sua segurança e mobilidade." 
    },
    { 
      href: "/pneu", 
      title: "Troca de Pneu", 
      description: "Troca de pneus rápida e segura, com atendimento no local em qualquer situação de emergência. Nossa equipe é equipada para atender chamadas de troca de pneus a qualquer hora, garantindo que você retome sua viagem com tranquilidade e segurança." 
    },
    { 
      href: "/colisao", 
      title: "Colisão", 
      description: "Assistência completa em caso de colisão. Oferecemos suporte desde a remoção do veículo até a orientação em processos de documentação e reparo, para que você tenha todo o auxílio necessário em um momento delicado." 
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gradient-to-br from-sky-400 to-blue-600 text-white">
      <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <Link key={service.title} href={service.href} passHref>
            <div className="bg-white p-5 rounded-lg shadow-md text-center text-gray-800 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
