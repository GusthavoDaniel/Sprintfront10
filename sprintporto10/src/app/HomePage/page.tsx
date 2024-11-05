import React from 'react';
import Link from 'next/link';
import { FaWrench, FaCarCrash, FaRoad, FaBatteryFull, FaPhoneAlt } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-800 bg-gradient-to-r from-sky-400 to-blue-600 animate-bg-slide font-roboto p-5">
      <section className="bg-black bg-opacity-60 text-white w-full p-10 text-center rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Mechanic Assistance</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Serviços de assistência e manutenção veicular com qualidade e rapidez, onde e quando você precisar.
        </p>
        <Link href="/servicos">
          <button className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full transition-transform transform hover:bg-blue-700 hover:scale-105">
            Conheça nossos Serviços
          </button>
        </Link>
      </section>

      <section className="text-center max-w-6xl w-full p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">O que Fazemos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 hover:scale-105 transition-transform">
            <div className="text-3xl text-blue-500 mb-4"><FaWrench /></div>
            <h3 className="text-xl font-semibold mb-2">Manutenção Geral</h3>
            <p className="text-gray-600 text-sm">
              Serviços de manutenção completos para garantir a segurança e desempenho do seu veículo.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 hover:scale-105 transition-transform">
            <div className="text-3xl text-blue-500 mb-4"><FaCarCrash /></div>
            <h3 className="text-xl font-semibold mb-2">Assistência para Colisão</h3>
            <p className="text-gray-600 text-sm">
              Assistência rápida e completa em caso de acidentes e emergências.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 hover:scale-105 transition-transform">
            <div className="text-3xl text-blue-500 mb-4"><FaRoad /></div>
            <h3 className="text-xl font-semibold mb-2">Guincho 24 Horas</h3>
            <p className="text-gray-600 text-sm">
              Guincho disponível 24/7 para situações de emergência em qualquer lugar.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 hover:scale-105 transition-transform">
            <div className="text-3xl text-blue-500 mb-4"><FaBatteryFull /></div>
            <h3 className="text-xl font-semibold mb-2">Troca de Pneu</h3>
            <p className="text-gray-600 text-sm">
              Precisa trocar o pneu? Estamos prontos para realizar a troca de pneus de forma rápida e segura.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 hover:scale-105 transition-transform">
            <div className="text-3xl text-blue-500 mb-4"><FaPhoneAlt /></div>
            <h3 className="text-xl font-semibold mb-2">Contato Fácil</h3>
            <p className="text-gray-600 text-sm">
              Entre em contato conosco a qualquer momento. Estamos sempre prontos para ajudar.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <Link href="/veiculos/cadastrar">
            <button className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full transition-transform transform hover:bg-blue-700 hover:scale-105">
              Cadastrar Veículo
            </button>
          </Link>
          <Link href="/agendamento">
            <button className="px-8 py-3 bg-green-500 text-white font-bold rounded-full transition-transform transform hover:bg-green-700 hover:scale-105">
              Agendar Manutenção
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
