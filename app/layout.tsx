'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
            <Navigation />
            <AnimatePresence mode="wait">
              <motion.main
                key="main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-16"
              >
                {children}
              </motion.main>
            </AnimatePresence>
            <Footer />
            <WhatsAppButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}