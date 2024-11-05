"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Servicos: React.FC = () => {
  const services = [
    {
      href: "/guincho",
      title: "Guincho",
      description: "Nosso serviço de guincho está disponível 24 horas por dia, 7 dias por semana, para ajudar em qualquer situação emergencial. Seja para problemas mecânicos ou elétricos, nosso guincho chegará ao local com rapidez, garantindo seu conforto e segurança na estrada. Conte com profissionais treinados e equipamentos modernos para o resgate do seu veículo.",
      image: "/image/guincho_new.png",
    },
    {
      href: "/pneu",
      title: "Troca de Pneu",
      description: "Precisa trocar o pneu? Estamos prontos para realizar a troca de pneus de forma rápida e segura, seja em emergências ou como medida preventiva. Nosso serviço é realizado por técnicos especializados, que garantem que seu carro esteja em perfeitas condições para seguir viagem, minimizando qualquer risco na estrada.",
      image: "/image/pneu_new.png",
    },
    {
      href: "/colisao",
      title: "Colisão",
      description: "Oferecemos suporte completo para veículos envolvidos em colisões. Desde a retirada do carro até a assistência em processos de documentação, nosso serviço visa reduzir o estresse da situação e proporcionar uma solução rápida e eficaz. Garantimos um atendimento humanizado, cuidando de todos os detalhes para que você se recupere o mais rápido possível.",
      image: "/image/colisao_new.png",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-poppins">
      <h2 className="text-4xl font-bold mb-10">Nossos Serviços</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.title} href={service.href} passHref>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center cursor-pointer">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={200} 
                height={120} 
                className="rounded-t-md mx-auto mb-4" 
              />
              <p className="text-sm text-gray-500 mb-1">Clique aqui para:</p> {/* Adicionando o texto "Clique aqui para:" */}
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
