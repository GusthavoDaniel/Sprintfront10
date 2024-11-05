"use client"; // Habilita o uso de hooks do React

import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    alert(`Cadastro realizado com sucesso para o usuário: ${formData.username}`);
    // Aqui você pode adicionar a lógica de envio do formulário, como chamar uma API
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-500 to-cyan-500 font-poppins p-6 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Cadastro de Usuário</h2>
        <p className="text-lg mb-6">
          Insira suas informações para criar uma nova conta.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme a Senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
            className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full max-w-md py-3 bg-blue-500 text-white font-bold rounded-md shadow-lg hover:bg-blue-600 transform transition-transform duration-200 active:scale-95"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
