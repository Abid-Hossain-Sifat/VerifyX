'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Home from '@/Components/Home';

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar username="Alex Mercer" />

      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">
        <Home 
          user={{
            name: 'Alex Mercer',
            email: 'alex@cod3x.dev',
          }}
          onLogout={handleLogout}
        />
      </main>

      <Footer />
    </div>
  );
}
