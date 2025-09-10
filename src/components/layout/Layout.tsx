import React from 'react';
import Header from './Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {children}
      </main>
      <footer className="py-6">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};

export default Layout;