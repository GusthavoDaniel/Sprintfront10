import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white text-center p-5 shadow-lg font-sans text-sm rounded-t-lg">
      <p className="font-bold mb-2">Equipe de desenvolvimento do site:</p>
      <div className="mt-1 space-y-1">
        <p className="text-base">Gusthavo Daniel - RM: 554681</p>
        <p className="text-base">Lucas Leite - RM: 555161</p>
        <p className="text-base">Gustavo Rangel - RM: 559168</p>
      </div>

      <div className="flex justify-center space-x-5 mt-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white text-2xl transition-transform transform hover:text-cyan-300 hover:scale-110">
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-2xl transition-transform transform hover:text-cyan-300 hover:scale-110">
          <FaInstagram />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white text-2xl transition-transform transform hover:text-cyan-300 hover:scale-110">
          <FaLinkedin />
        </Link>
      </div>

      <p className="text-gray-300 text-xs mt-4">
        &copy; {new Date().getFullYear()} Mechanic Assistance. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
