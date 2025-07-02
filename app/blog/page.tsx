'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowRight, BookOpen, Heart, Baby } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Early Childhood Development',
      excerpt: 'Discover how the first five years of a child\'s life lay the foundation for future learning, behavior, and health.',
      image: 'https://images.pexels.com/photos/8613305/pexels-photo-8613305.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Ahmed',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development',
      featured: true
    },
    {
      id: 2,
      title: 'Preparing Your Child for Their First Day at Nursery',
      excerpt: 'Essential tips and strategies to help your little one transition smoothly to nursery life.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Parenting Tips'
    },
    {
      id: 3,
      title: 'The Benefits of Bilingual Education in Early Years',
      excerpt: 'How learning multiple languages from an early age enhances cognitive development and cultural awareness.',
      image: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Fatima Al-Zahra',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Education'
    },
    {
      id: 4,
      title: 'Healthy Eating Habits for Toddlers',
      excerpt: 'Creating nutritious meal plans and encouraging healthy eating habits in young children.',
      image: 'https://images.pexels.com/photos/8535263/pexels-photo-8535263.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emily Johnson',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Nutrition'
    },
    {
      id: 5,
      title: 'Building Emotional Intelligence in Young Children',
      excerpt: 'Teaching children to understand and manage their emotions for better social interactions.',
      image: 'https://images.pexels.com/photos/8535189/pexels-photo-8535189.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Ahmed Hassan',
      date: '2024-01-03',
      readTime: '8 min read',
      category: 'Psychology'
    },
    {
      id: 6,
      title: 'The Role of Play in Child Development',
      excerpt: 'Understanding how different types of play contribute to cognitive, social, and physical development.',
      image: 'https://images.pexels.com/photos/8535220/pexels-photo-8535220.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Chen',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'Development'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 6, icon: BookOpen },
    { name: 'Development', count: 2, icon: Baby },
    { name: 'Parenting Tips', count: 1, icon: Heart },
    { name: 'Education', count: 1, icon: BookOpen },
    { name: 'Nutrition', count: 1, icon: Heart },
    { name: 'Psychology', count: 1, icon: Baby }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                {t('blog.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('blog.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights, practical advice, and research-based tips to support 
              your parenting journey and your child's development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full transition-all font-medium"
              >
                <category.icon className="w-4 h-4" />
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">
                          {featuredPost.author}
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-6">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest insights and tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        {t('common.readMore')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest parenting tips, child development insights, and nursery updates 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;