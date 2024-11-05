"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCar, FaCalendarAlt, FaPalette, FaIdBadge, FaIndustry } from 'react-icons/fa';

const CadastrarVeiculo: React.FC = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    placa: '',
    marca: '',
    modelo: '',
    ano: '',
    cor: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Veículo cadastrado:', formData);
    alert("Veículo cadastrado com sucesso!");
  };

  return (
    <div className="flex flex-col items-center py-8 px-6 bg-gradient-to-br from-blue-500 to-blue-400 min-h-screen font-roboto">
      <header className="text-white text-3xl font-bold text-center mb-8 drop-shadow-md">
        Cadastro de Veículo
      </header>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center transition-transform transform hover:scale-105">
        <h2 className="text-2xl text-blue-500 font-semibold mb-6">Cadastre seu Veículo</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaCar />
              Tipo de Veículo
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            >
              <option value="">Selecione o tipo</option>
              <option value="Carro">Carro</option>
              <option value="Caminhão">Caminhão</option>
              <option value="Moto">Moto</option>
            </select>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaIdBadge />
              Placa do Veículo
            </label>
            <input
              type="text"
              name="placa"
              placeholder="Digite a placa do veículo"
              value={formData.placa}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaIndustry />
              Marca
            </label>
            <select
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            >
              <option value="">Selecione a marca</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaCar />
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              placeholder="Digite o modelo do veículo"
              value={formData.modelo}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaCalendarAlt />
              Ano de Fabricação
            </label>
            <input
              type="number"
              name="ano"
              placeholder="Digite o ano de fabricação"
              value={formData.ano}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md border border-gray-300">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaPalette />
              Cor
            </label>
            <input
              type="text"
              name="cor"
              placeholder="Digite a cor do veículo"
              value={formData.cor}
              onChange={handleChange}
              required
              className="flex-grow bg-transparent border-none outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md shadow-lg hover:bg-blue-600 transform transition-transform duration-200 active:scale-95"
          >
            Cadastrar
          </button>
        </form>
        <Link href="/servicos" passHref>
          <button className="inline-block mt-6 text-white bg-blue-500 py-3 px-6 rounded-md font-bold hover:bg-blue-600 transition-colors">
            Voltar para Serviços
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CadastrarVeiculo;
