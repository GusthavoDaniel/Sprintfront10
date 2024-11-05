"use client"; // Habilita o uso de hooks do React

import React, { useState } from 'react';

const AgendarManutencao: React.FC = () => {
  const [formData, setFormData] = useState({
    data: '',
    horario: '',
    tipoManutencao: '',
    descricao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Manutenção agendada com sucesso para ${formData.data} às ${formData.horario}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-500 to-sky-500 font-roboto p-6 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Agendar Manutenção</h2>
        <p className="text-lg mb-6">
          Escolha a data e horário, selecione o tipo de manutenção e descreva o problema para agendar o serviço.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <select
            name="tipoManutencao"
            value={formData.tipoManutencao}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecione o tipo de manutenção</option>
            <option value="Troca de Óleo">Troca de Óleo</option>
            <option value="Revisão Geral">Revisão Geral</option>
            <option value="Balanceamento">Balanceamento</option>
            <option value="Freios">Freios</option>
          </select>

          <textarea
            name="descricao"
            placeholder="Descreva o problema"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full max-w-md py-3 bg-blue-500 text-white font-bold rounded-md shadow-lg hover:bg-blue-600 transform transition-transform duration-200 active:scale-95"
          >
            Agendar Manutenção
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgendarManutencao;
