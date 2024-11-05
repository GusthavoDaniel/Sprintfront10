"use client"; // Habilita o uso de hooks do React

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // Aqui você adicionaria a lógica de autenticação
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-sky-400 to-blue-600 font-poppins">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Login</h2>
        <p className="bg-gray-100 text-gray-700 text-sm p-3 rounded-lg mb-6">
          Para acessar essa página, você precisa estar logado.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-blue-400">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-blue-400">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg transition-all hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
        </form>
        <p className="text-gray-600 text-sm mt-6">
          Não tem conta?{' '}
          <Link href="/cadastro" className="text-blue-500 font-bold hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
