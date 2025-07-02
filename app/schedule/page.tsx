'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sun, 
  Coffee, 
  BookOpen, 
  Music, 
  Utensils, 
  Play, 
  Palette, 
  Moon,
  Clock,
  Baby,
  Users,
  GraduationCap
} from 'lucide-react';

const SchedulePage: React.FC = () => {
  const { t } = useTranslation();

  const scheduleData = {
    toddlers: [
      { time: '7:00 - 8:00 AM', activity: 'Arrival & Free Play', icon: Sun, color: 'text-yellow-500' },
      { time: '8:00 - 8:30 AM', activity: 'Healthy Breakfast', icon: Coffee, color: 'text-orange-500' },
      { time: '8:30 - 9:30 AM', activity: 'Sensory Play Time', icon: Play, color: 'text-pink-500' },
      { time: '9:30 - 10:00 AM', activity: 'Snack Time', icon: Utensils, color: 'text-green-500' },
      { time: '10:00 - 11:00 AM', activity: 'Music & Movement', icon: Music, color: 'text-purple-500' },
      { time: '11:00 - 12:00 PM', activity: 'Outdoor Play', icon: Sun, color: 'text-blue-500' },
      { time: '12:00 - 1:00 PM', activity: 'Lunch Time', icon: Utensils, color: 'text-red-500' },
      { time: '1:00 - 3:00 PM', activity: 'Nap Time', icon: Moon, color: 'text-indigo-500' },
      { time: '3:00 - 3:30 PM', activity: 'Afternoon Snack', icon: Coffee, color: 'text-teal-500' },
      { time: '3:30 - 4:30 PM', activity: 'Creative Arts', icon: Palette, color: 'text-pink-500' },
      { time: '4:30 - 6:00 PM', activity: 'Free Play & Pickup', icon: Play, color: 'text-gray-500' }
    ],
    preschool: [
      { time: '7:00 - 8:00 AM', activity: 'Arrival & Free Play', icon: Sun, color: 'text-yellow-500' },
      { time: '8:00 - 8:30 AM', activity: 'Healthy Breakfast', icon: Coffee, color: 'text-orange-500' },
      { time: '8:30 - 9:30 AM', activity: 'Circle Time & Learning', icon: BookOpen, color: 'text-blue-500' },
      { time: '9:30 - 10:00 AM', activity: 'Snack Time', icon: Utensils, color: 'text-green-500' },
      { time: '10:00 - 11:00 AM', activity: 'Language Arts', icon: BookOpen, color: 'text-purple-500' },
      { time: '11:00 - 12:00 PM', activity: 'Outdoor Activities', icon: Sun, color: 'text-yellow-500' },
      { time: '12:00 - 1:00 PM', activity: 'Lunch Time', icon: Utensils, color: 'text-red-500' },
      { time: '1:00 - 2:30 PM', activity: 'Rest Time', icon: Moon, color: 'text-indigo-500' },
      { time: '2:30 - 3:00 PM', activity: 'Afternoon Snack', icon: Coffee, color: 'text-teal-500' },
      { time: '3:00 - 4:00 PM', activity: 'Creative Projects', icon: Palette, color: 'text-pink-500' },
      { time: '4:00 - 5:00 PM', activity: 'Science Discovery', icon: Play, color: 'text-green-500' },
      { time: '5:00 - 6:00 PM', activity: 'Free Play & Pickup', icon: Play, color: 'text-gray-500' }
    ],
    prekindergarten: [
      { time: '7:00 - 8:00 AM', activity: 'Arrival & Morning Tasks', icon: Sun, color: 'text-yellow-500' },
      { time: '8:00 - 8:30 AM', activity: 'Healthy Breakfast', icon: Coffee, color: 'text-orange-500' },
      { time: '8:30 - 9:30 AM', activity: 'Morning Meeting', icon: BookOpen, color: 'text-blue-500' },
      { time: '9:30 - 10:00 AM', activity: 'Snack & Social Time', icon: Utensils, color: 'text-green-500' },
      { time: '10:00 - 11:00 AM', activity: 'Reading & Writing', icon: BookOpen, color: 'text-purple-500' },
      { time: '11:00 - 12:00 PM', activity: 'Math Concepts', icon: Play, color: 'text-blue-500' },
      { time: '12:00 - 1:00 PM', activity: 'Lunch & Social Skills', icon: Utensils, color: 'text-red-500' },
      { time: '1:00 - 2:00 PM', activity: 'Quiet Time/Reading', icon: Moon, color: 'text-indigo-500' },
      { time: '2:00 - 2:30 PM', activity: 'Afternoon Snack', icon: Coffee, color: 'text-teal-500' },
      { time: '2:30 - 3:30 PM', activity: 'STEM Activities', icon: Play, color: 'text-green-500' },
      { time: '3:30 - 4:30 PM', activity: 'Arts & Expression', icon: Palette, color: 'text-pink-500' },
      { time: '4:30 - 6:00 PM', activity: 'Outdoor Play & Pickup', icon: Sun, color: 'text-yellow-500' }
    ]
  };

  const [activeTab, setActiveTab] = React.useState<'toddlers' | 'preschool' | 'prekindergarten'>('toddlers');

  const tabs = [
    { key: 'toddlers', label: 'Toddlers (1-2)', icon: Baby, color: 'from-pink-400 to-pink-600' },
    { key: 'preschool', label: 'Preschool (3-4)', icon: Users, color: 'from-blue-400 to-blue-600' },
    { key: 'prekindergarten', label: 'Pre-K (4-5)', icon: GraduationCap, color: 'from-yellow-400 to-yellow-600' }
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
                {t('schedule.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('schedule.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our thoughtfully designed daily schedules provide structure while allowing flexibility 
              for each child's individual needs and interests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all font-medium ${
                  activeTab === tab.key
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Schedule Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scheduleData[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-900">
                              {item.time}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {item.activity}
                          </h3>
                          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${tabs.find(t => t.key === activeTab)?.color || 'from-blue-400 to-blue-600'}`}
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Schedule Special
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every moment is designed with your child's development in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Balanced Activities',
                description: 'Perfect mix of learning, play, rest, and nutrition',
                icon: '⚖️'
              },
              {
                title: 'Flexible Timing',
                description: 'Adaptable to individual needs and energy levels',
                icon: '🕐'
              },
              {
                title: 'Nutritious Meals',
                description: 'Healthy, balanced meals and snacks throughout the day',
                icon: '🥗'
              },
              {
                title: 'Outdoor Time',
                description: 'Daily fresh air and physical activity for healthy growth',
                icon: '🌞'
              },
              {
                title: 'Rest Periods',
                description: 'Age-appropriate rest time for optimal development',
                icon: '😴'
              },
              {
                title: 'Learning Integration',
                description: 'Educational elements woven into every activity',
                icon: '📚'
              }
            ].map((feature, index) => (
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
                    <div className="text-4xl mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              See Our Schedule in Action
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Visit us during the day to observe how our caring teachers guide children 
              through each wonderful moment of learning and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Schedule a Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Download Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;