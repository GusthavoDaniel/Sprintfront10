import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUser, FaCar } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 py-3 px-6 flex items-center justify-between shadow-md font-sans text-base">
      <Link href="/" className="text-white font-semibold flex items-center space-x-2 hover:scale-105 transform transition-transform">
        {/* Logo Image */}
        <Image src="/image/assistance.png" alt="Mechanic Assistance Logo" width={30} height={30} className="w-6 h-6" />
        <span>Mechanic Assistance</span>
      </Link>

      <nav className="flex gap-4 text-white">
        <Link href="/" className="flex items-center gap-1 hover:text-cyan-300 transition-all">
          <FaHome size={14} /> <span>Home</span>
        </Link>
        <Link href="/about" className="flex items-center gap-1 hover:text-cyan-300 transition-all">
          <FaInfoCircle size={14} /> <span>Sobre</span>
        </Link>
        <Link href="/contact" className="flex items-center gap-1 hover:text-cyan-300 transition-all">
          <FaPhoneAlt size={14} /> <span>Contato</span>
        </Link>
        <Link href="/login" className="flex items-center gap-1 hover:text-cyan-300 transition-all">
          <FaUser size={14} /> <span>Login</span>
        </Link>
        <Link href="/veiculos/cadastrar" className="flex items-center gap-1 hover:text-cyan-300 transition-all">
          <FaCar size={14} /> <span>Cadastrar Veículo</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
