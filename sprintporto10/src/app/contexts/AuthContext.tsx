import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(async (response) => {
          if (!response.ok) throw new Error('Token inválido');
          const data = await response.json();
          setIsAuthenticated(true);
          setUser(data.user);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          setUser(null);
        });
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Falha na autenticação. Verifique suas credenciais.');
        return;
      }

      const { token, user } = await response.json();
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      setUser(user);
      router.push('/'); // Redireciona para a página inicial após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro desconhecido. Tente novamente mais tarde.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/login'); // Redireciona para a página de login após logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
