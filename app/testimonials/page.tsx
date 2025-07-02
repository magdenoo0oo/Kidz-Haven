'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Al-Mahmoud',
      parentOf: 'Layla (4 years old)',
      image: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Kidz Haven has been a blessing for our family. Layla has grown so much in confidence and creativity since joining. The teachers are incredibly caring and professional. I especially love how they incorporate both English and Arabic learning naturally.",
      highlight: "Incredible teachers and bilingual environment"
    },
    {
      id: 2,
      name: 'Michael Johnson',
      parentOf: 'Emma (3 years old)',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "As an expat family, we were looking for a nursery that would provide Emma with quality education while respecting cultural diversity. Kidz Haven exceeded our expectations. Emma loves going to school every day and has made wonderful friends.",
      highlight: "Perfect for expat families"
    },
    {
      id: 3,
      name: 'Fatima Hassan',
      parentOf: 'Omar (2 years old)',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Omar was very shy when he first started at Kidz Haven. The teachers worked patiently with him, and now he's a confident, happy child who loves sharing what he learns. The Arabic program is excellent, and the facilities are top-notch.",
      highlight: "Transformed my shy child into a confident one"
    },
    {
      id: 4,
      name: 'David Martinez',
      parentOf: 'Sofia (4 years old)',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The structured daily schedule at Kidz Haven is perfect for Sofia. She's learning so much while having fun. The STEM activities are particularly impressive, and I love how they prepare children for school readiness.",
      highlight: "Excellent school readiness program"
    },
    {
      id: 5,
      name: 'Aisha Al-Zahra',
      parentOf: 'Yusuf (3 years old)',
      image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The communication from Kidz Haven is outstanding. I receive daily updates about Yusuf's activities and progress. The nutritious meals are a huge plus, and the outdoor play area is fantastic. Highly recommend!",
      highlight: "Outstanding communication and care"
    },
    {
      id: 6,
      name: 'James Wilson',
      parentOf: 'Lily (5 years old)',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Lily has been at Kidz Haven for two years now, and the progress has been remarkable. She's ready for kindergarten thanks to their pre-K program. The staff treats each child as an individual and caters to their unique needs.",
      highlight: "Two years of amazing progress"
    },
    {
      id: 7,
      name: 'Mariam Abdullah',
      parentOf: 'Zara (2 years old)',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The safety measures at Kidz Haven give me complete peace of mind. Zara is thriving in their toddler program. The music and movement classes are her favorite, and she comes home singing new songs every day!",
      highlight: "Safe environment with amazing programs"
    },
    {
      id: 8,
      name: 'Robert Chen',
      parentOf: 'Leo (4 years old)',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The cultural diversity at Kidz Haven is wonderful. Leo has learned to appreciate different cultures while maintaining his own identity. The Arabic classes are well-structured, and the English program is excellent too.",
      highlight: "Wonderful cultural diversity"
    },
    {
      id: 9,
      name: 'Nour Al-Said',
      parentOf: 'Amira (3 years old)',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Amira absolutely loves her teachers at Kidz Haven. The creative arts program has unleashed her artistic side, and the science activities are so engaging. The staff's dedication to each child's development is truly inspiring.",
      highlight: "Dedicated staff who truly care"
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
                {t('testimonials.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('testimonials.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover why families choose Kidz Haven for their children's early learning journey. 
              Read authentic stories from parents who have experienced the difference we make.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Happy Families', icon: Heart },
              { number: '98%', label: 'Parent Satisfaction', icon: Star },
              { number: '5.0', label: 'Average Rating', icon: Star },
              { number: '200+', label: 'Positive Reviews', icon: Quote }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Highlight */}
                    <div className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      {testimonial.highlight}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Parent Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Parent of {testimonial.parentOf}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-pink-50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Quote className="w-10 h-10 text-white" />
                </div>
                
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                  "Choosing Kidz Haven was the best decision we made for our daughter's early education. 
                  The love, care, and attention to detail they provide is unmatched in Dubai."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Featured testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      Sarah Al-Mahmoud
                    </h4>
                    <p className="text-gray-600">
                      Parent of Layla, 2 years at Kidz Haven
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Happy Family Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that loving care and quality education can make 
              in your child's life. Book a visit and see why parents choose us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Schedule Your Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Start Registration
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;