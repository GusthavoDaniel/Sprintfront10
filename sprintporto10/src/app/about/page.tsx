// src/app/about/page.tsx

"use client";

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-400 to-cyan-500 font-poppins p-5 text-white">
      <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
      <p className="text-center max-w-2xl text-lg mb-12">
        A Mechanic Assistance foi criada para oferecer suporte automotivo de alta qualidade,
        garantindo a tranquilidade dos nossos clientes. Nossa missão é ser a melhor escolha para
        assistência mecânica e garantir que você esteja sempre seguro na estrada.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Cartão de Inovação */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
          
          <h3 className="font-semibold text-xl mb-2">Inovação</h3>
          <p className="text-gray-600">
            Estamos sempre buscando novas tecnologias e soluções inovadoras para garantir o melhor
            atendimento e a eficiência dos nossos serviços.
          </p>
        </div>
        {/* Cartão de Qualidade */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
          
          <h3 className="font-semibold text-xl mb-2">Qualidade</h3>
          <p className="text-gray-600">
            Nossa equipe é composta por profissionais altamente treinados e qualificados, utilizando
            as melhores ferramentas para cuidar do seu veículo.
          </p>
        </div>
        {/* Cartão de Compromisso */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
          
          <h3 className="font-semibold text-xl mb-2">Compromisso</h3>
          <p className="text-gray-600">
            Valorizamos cada um dos nossos clientes e nos comprometemos a oferecer um atendimento
            humanizado e soluções rápidas para suas necessidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
