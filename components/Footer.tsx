'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Kidz Haven
              </span>
            </motion.div>
            <p className="text-gray-600 mb-6 max-w-md">
              A nurturing environment where children learn, play, and grow in the heart of Dubai. 
              Join our family and watch your little one flourish.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('contact.info.address')}</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
                <div>
                  <p>123 Kids Street</p>
                  <p>Dubai Marina, Dubai</p>
                  <p>UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>info@kidzhaven.ae</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-purple-500" />
                <div>
                  <p>Sun - Thu: 7:00 AM - 6:00 PM</p>
                  <p>Fri: 7:00 AM - 4:00 PM</p>
                  <p>Sat: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/programs" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.programs')}
              </Link>
              <Link href="/registration" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.registration')}
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-pink-200 text-center text-sm text-gray-600">
  <p>
    &copy; 2024 Kidz Haven. جميع الحقوق محفوظة.  
    <span className="text-pink-500 mx-1">💖</span>
    بواسطة <span className="text-gray-800 dark:text-white font-semibold">Magdy Zahran</span>
  </p>
</div>

      </div>
    </footer>
  );
};