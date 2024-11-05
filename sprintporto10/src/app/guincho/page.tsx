"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTruck, FaMapMarkerAlt } from 'react-icons/fa';

const Guincho: React.FC = () => {
  const [nearbyGuincho, setNearbyGuincho] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  const findNearbyGuincho = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNearbyGuincho('Guincho mais próximo localizado na Av. Paulista, 1106 - Bela Vista, São Paulo - SP');
      setIsLoading(false);
    }, 2000);
  };

  const handleRequest = () => {
    alert(`Solicitação de guincho enviada para o endereço: ${userAddress}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gradient-to-r from-blue-500 to-sky-400 font-roboto">
      <header className="text-white text-4xl font-bold text-center mb-6">Serviço de Guincho</header>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center flex flex-col items-center transition-transform transform hover:-translate-y-1">
        
        <h3 className="text-2xl text-blue-600 font-semibold flex items-center gap-3 mb-4">
          <FaTruck /> Guincho Mais Próximo
        </h3>

        {isLoading && <p className="text-blue-600 font-bold text-lg">Buscando o guincho mais próximo...</p>}
        {nearbyGuincho && <p className="mb-4">{nearbyGuincho}</p>}

        <div className="flex flex-col gap-4 w-full items-center mt-5">
          <button
            className="w-full max-w-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={findNearbyGuincho}
          >
            Encontrar Guincho Mais Próximo
          </button>

          {nearbyGuincho && (
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.5639161502943!2d-46.65401636146317!3d-23.56385193521723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1714179121735!5m2!1spt-BR!2sbr"
                className="w-full max-w-lg h-96 border-none rounded-lg shadow-lg mt-4"
                loading="lazy"
              ></iframe>

              <input
                type="text"
                placeholder="Digite seu endereço"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mt-4"
              />

              <button
                onClick={handleRequest}
                className="w-full max-w-md bg-sky-500 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4"
              >
                Solicitar Guincho
              </button>
            </>
          )}
        </div>

        <Link href="/servicos">
          <span className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg font-bold transition-transform transform hover:bg-blue-700 hover:scale-105 cursor-pointer">
            Voltar para Serviços
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Guincho;
