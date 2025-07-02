'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Navigation
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: [
        '123 Kids Street',
        'Dubai Marina, Dubai',
        'UAE'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: [
        '+971 50 123 4567',
        '+971 4 123 4567'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: [
        'info@kidzhaven.ae',
        'admissions@kidzhaven.ae'
      ],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: [
        'Sunday - Thursday: 7:00 AM - 6:00 PM',
        'Friday: 7:00 AM - 4:00 PM',
        'Saturday: Closed'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const whatsappNumber = '+971501234567';
  const whatsappMessage = 'Hello! I would like to know more about Kidz Haven nursery.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleDirectionsClick = () => {
    const address = '123 Kids Street, Dubai Marina, Dubai, UAE';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('contact.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions about our programs, 
              want to schedule a visit, or need more information, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
            <Button
              onClick={handleDirectionsClick}
              variant="outline"
              className="border-blue-500 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-8">
                  <CardTitle className="text-2xl font-bold">
                    Send us a Message
                  </CardTitle>
                  <p className="text-blue-100 mt-2">
                    We'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800">Message sent successfully! We'll be in touch soon.</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        {t('contact.form.subject')} *
                      </Label>
                      <Input
                        id="subject"
                        {...register('subject')}
                        className="mt-1"
                        placeholder="What is this regarding?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        {t('contact.form.message')} *
                      </Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        className="mt-1"
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-3 rounded-full text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          {t('contact.form.send')}
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden h-full">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Visit Our Location
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Located in the heart of Dubai Marina
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-gray-600 mb-6">
                        In a real application, this would be an embedded Google Maps iframe
                      </p>
                      <Button
                        onClick={handleDirectionsClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What are your operating hours?',
                answer: 'We are open Sunday to Thursday from 7:00 AM to 6:00 PM, Friday from 7:00 AM to 4:00 PM, and closed on Saturday.'
              },
              {
                question: 'Do you offer trial days?',
                answer: 'Yes! We encourage families to visit and spend time with us before enrolling. Contact us to schedule your visit.'
              },
              {
                question: 'What meals do you provide?',
                answer: 'We provide healthy breakfast, lunch, and two snacks daily. All meals are prepared fresh and cater to various dietary requirements.'
              },
              {
                question: 'How do you handle emergencies?',
                answer: 'We have trained first aid staff, emergency protocols, and maintain close communication with parents and local emergency services.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;