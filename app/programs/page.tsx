'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, Users, GraduationCap, Clock, Check, Star } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: Baby,
      title: t('programs.toddlers.title'),
      description: t('programs.toddlers.description'),
      features: [
        'Sensory play activities',
        'Basic motor skills development',
        'Social interaction with peers',
        'Music and movement sessions',
        'Gentle routine establishment',
        'Loving, nurturing care'
      ],
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      age: '1-2 years',
      hours: '7:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/8613285/pexels-photo-8613285.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: t('programs.preschool.title'),
      description: t('programs.preschool.description'),
      features: [
        'Language development (English & Arabic)',
        'Pre-math concepts and counting',
        'Creative arts and crafts',
        'Science exploration activities',
        'Social skills building',
        'Independent play time'
      ],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      age: '3-4 years',
      hours: '7:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: GraduationCap,
      title: t('programs.prekindergarten.title'),
      description: t('programs.prekindergarten.description'),
      features: [
        'Reading readiness skills',
        'Writing and fine motor skills',
        'Advanced problem solving',
        'Social skills and teamwork',
        'School readiness activities',
        'Leadership development'
      ],
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      age: '4-5 years',
      hours: '7:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const specialPrograms = [
    {
      title: 'Arabic Language & Culture',
      description: 'Immersive Arabic learning with cultural appreciation',
      icon: '🕌',
      features: ['Native Arabic teachers', 'Cultural celebrations', 'Traditional stories', 'Islamic values (optional)']
    },
    {
      title: 'STEM Discovery',
      description: 'Science, Technology, Engineering & Math fun',
      icon: '🔬',
      features: ['Science experiments', 'Building challenges', 'Technology integration', 'Mathematical concepts']
    },
    {
      title: 'Creative Arts',
      description: 'Nurturing artistic expression and creativity',
      icon: '🎨',
      features: ['Painting and drawing', 'Music and dance', 'Drama and storytelling', 'Craft projects']
    },
    {
      title: 'Physical Development',
      description: 'Building strong, healthy bodies through play',
      icon: '⚽',
      features: ['Outdoor playground', 'Sports activities', 'Yoga for kids', 'Motor skills development']
    }
  ];

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
                {t('programs.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('programs.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive programs are designed to nurture every aspect of your child's development, 
              from cognitive growth to social skills, creativity, and physical wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${program.bgColor} rounded-3xl p-8 lg:p-12`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mr-4`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {program.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {program.age}
                          </span>
                          <span>{program.hours}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="lg"
                      className={`bg-gradient-to-r ${program.color} hover:opacity-90 text-white px-8 py-3 rounded-full`}
                    >
                      Learn More
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Special Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhanced learning experiences that make Kidz Haven special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4 text-center">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our nurturing community and give your child the foundation they need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                Start Registration
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                Schedule Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;