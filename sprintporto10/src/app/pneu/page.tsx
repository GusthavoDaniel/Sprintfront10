"use client"; // Habilita o uso de hooks do React

import React, { useState } from 'react';

const Pneu: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    localizacao: '',
    aro: '',
    tipoPneu: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert(`Troca de pneu agendada com sucesso para ${formData.nome} no endereço ${formData.localizacao}.`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 font-poppins p-5 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-2xl w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-4xl font-bold text-blue-500 mb-8">Troca de Pneu</h2>
        <p className="text-lg mb-6">
          Oferecemos serviços de troca de pneus de forma rápida e segura, com técnicos qualificados e equipamentos adequados para garantir o seu conforto e segurança na estrada.
        </p>
        <p className="text-lg mb-6">
          Se o seu pneu está furado ou desgastado, nossa equipe está pronta para ajudar a qualquer momento do dia ou da noite.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mt-8">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="localizacao"
            placeholder="Localização (Endereço)"
            value={formData.localizacao}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          {/* Campo para selecionar o aro do pneu */}
          <select
            name="aro"
            value={formData.aro}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecione o aro do pneu</option>
            <option value="13">Aro 13</option>
            <option value="14">Aro 14</option>
            <option value="15">Aro 15</option>
            <option value="16">Aro 16</option>
            <option value="17">Aro 17</option>
            <option value="18">Aro 18</option>
          </select>

          {/* Campo para selecionar o tipo do pneu */}
          <select
            name="tipoPneu"
            value={formData.tipoPneu}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecione o tipo de pneu</option>
            <option value="Pneu de Verão">Pneu de Verão</option>
            <option value="Pneu de Inverno">Pneu de Inverno</option>
            <option value="Pneu All-Season">Pneu All-Season</option>
            <option value="Pneu de Alta Performance">Pneu de Alta Performance</option>
            <option value="Pneu Run Flat">Pneu Run Flat</option>
          </select>

          <button
            type="submit"
            className="mt-6 px-8 py-3 bg-green-500 text-white font-bold rounded-full transition-transform transform hover:bg-green-700 hover:scale-105"
          >
            Agendar Troca de Pneu
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pneu;
