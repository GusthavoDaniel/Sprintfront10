"use client"; // Ativa o modo client para uso com hooks e eventos

import React from 'react';
import Link from 'next/link';

const Servicos: React.FC = () => {
  const services = [
    {
      href: "/guincho",
      title: "Guincho",
      description: "Nosso serviço de guincho está disponível 24 horas por dia, 7 dias por semana, para ajudar em qualquer situação emergencial.",
    },
    {
      href: "/pneu",
      title: "Troca de Pneu",
      description: "Precisa trocar o pneu? Estamos prontos para realizar a troca de pneus de forma rápida e segura.",
    },
    {
      href: "/colisao",
      title: "Colisão",
      description: "Oferecemos suporte completo para veículos envolvidos em colisões, incluindo assistência em processos de documentação e reparo.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 font-poppins p-5">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-4xl font-bold text-blue-500 mb-8">Nossos Serviços</h2>
        <p className="text-gray-600 text-lg mb-10">⚠️ Clique nos cards abaixo para saber mais sobre cada serviço ⚠️</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="bg-gray-100 rounded-lg p-6 text-center shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link href="/agendamento" className="inline-block py-3 px-8 bg-green-500 text-white font-bold rounded-full transition-transform transform hover:bg-green-700 hover:scale-105 cursor-pointer">
            Agendar Manutenção
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
