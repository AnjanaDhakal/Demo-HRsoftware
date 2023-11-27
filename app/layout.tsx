'use client'
import './globals.css'
import Image from 'next/image'

import Navigation from './components/navigation';
import { Footer } from './components/footer';

import { Suspense, useEffect } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);
  return (
    <html lang="en">
     
      <head />
      
      <body>
      <div id="globalLoader">
      <Image
      src="/logo.png"
      alt="Picture of the author"
      width={300}
      height={300}
    />
    </div>
    <Navigation />
     

     {children}

     <Footer />
        </body>
    </html>
  )
}

