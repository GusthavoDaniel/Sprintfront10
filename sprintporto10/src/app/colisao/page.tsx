"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCarCrash, FaExclamationTriangle } from 'react-icons/fa';

const Colisao: React.FC = () => {
  const [userAddress, setUserAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestAssistance = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert(`Assistência para colisão solicitada para o endereço: ${userAddress}`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gradient-to-r from-red-500 to-orange-500 font-roboto">
      <header className="text-white text-4xl font-bold text-center mb-6">Assistência para Colisão</header>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center flex flex-col items-center transition-transform transform hover:-translate-y-1">
        
        <h3 className="text-2xl text-red-600 font-semibold flex items-center gap-3 mb-4">
          <FaCarCrash /> Assistência Imediata
        </h3>

        <p className="text-gray-700 text-base mb-6">
          Oferecemos suporte completo para veículos envolvidos em colisões. Nossa equipe está preparada para ajudar você com os processos de documentação, reparo, e outros serviços necessários.
        </p>

        <div className="flex flex-col gap-4 w-full items-center mt-5">
          <input
            type="text"
            placeholder="Digite seu endereço para assistência"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
          />

          <button
            onClick={handleRequestAssistance}
            className="w-full max-w-md bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4"
            disabled={isLoading}
          >
            {isLoading ? 'Solicitando Assistência...' : 'Solicitar Assistência'}
          </button>
        </div>

        <Link href="/servicos">
          <span className="mt-8 inline-block bg-red-500 text-white py-3 px-6 rounded-lg font-bold transition-transform transform hover:bg-red-700 hover:scale-105 cursor-pointer">
            Voltar para Serviços
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Colisao;
