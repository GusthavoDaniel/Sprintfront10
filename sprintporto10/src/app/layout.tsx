// src/app/layout.tsx
import React from 'react';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-roboto bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
