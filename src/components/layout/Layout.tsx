// Layout component that wraps all pages

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
