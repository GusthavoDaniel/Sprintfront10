"use client";

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Definindo as classes em um objeto para reutilização
const styles = {
  container: "flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-400 to-cyan-500 font-poppins p-5",
  header: "text-4xl font-bold text-white mb-12",
  cardContainer: "flex flex-wrap justify-center gap-10 mb-12",
  card: "bg-white p-6 rounded-lg shadow-md w-64 text-center",
  icon: "text-blue-500 text-4xl mb-4 mx-auto",
  label: "font-semibold",
  text: "text-gray-700",
  formContainer: "bg-white p-8 rounded-lg shadow-lg w-full max-w-md",
  input: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500",
  textarea: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none h-32",
  button: "w-full py-3 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
};

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Entre em Contato</h1>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          
          <p className={styles.label}>Telefone:</p>
          <p className={styles.text}>(11) 9897-04027</p>
        </div>
        
        <div className={styles.card}>
          
          <p className={styles.label}>E-mail:</p>
          <p className={styles.text}>contato@mechanicassistance.com</p>
        </div>
        
        <div className={styles.card}>
          
          <p className={styles.label}>Endereço:</p>
          <p className={styles.text}>Av. Paulista, 1106 - São Paulo, SP</p>
        </div>
      </div>
      
      <div className={styles.formContainer}>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            className={styles.input}
          />
          <textarea
            placeholder="Sua mensagem"
            required
            className={styles.textarea}
          />
          <button
            type="submit"
            className={styles.button}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
