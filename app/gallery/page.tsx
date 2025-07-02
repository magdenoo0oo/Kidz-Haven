'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Play, Pause, Volume2 } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8613305/pexels-photo-8613305.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Creative Arts Session',
      category: 'Arts & Crafts'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Learning Together',
      category: 'Education'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Outdoor Adventures',
      category: 'Outdoor Play'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8613380/pexels-photo-8613380.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Story Time Magic',
      category: 'Reading'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8613285/pexels-photo-8613285.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Dreams',
      category: 'STEM'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8535263/pexels-photo-8535263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Music & Movement',
      category: 'Music'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8535189/pexels-photo-8535189.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Friendship Moments',
      category: 'Social Time'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8535220/pexels-photo-8535220.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Discovery Time',
      category: 'Science'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/8535301/pexels-photo-8535301.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Happy Meals',
      category: 'Meal Time'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/8613305/pexels-photo-8613305.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'A Day at Kidz Haven',
      duration: '2:30',
      description: 'Follow along as we explore the daily adventures at our nursery'
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Creative Learning Activities',
      duration: '1:45',
      description: 'Watch our little ones engage in fun educational activities'
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Outdoor Play & Exercise',
      duration: '3:15',
      description: 'Healthy outdoor activities that promote physical development'
    },
    {
      id: 4,
      thumbnail: 'https://images.pexels.com/photos/8535263/pexels-photo-8535263.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Music & Movement Class',
      duration: '2:00',
      description: 'Musical activities that enhance coordination and creativity'
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
                {t('gallery.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('gallery.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a glimpse into the magical world of Kidz Haven, where every moment 
              is filled with wonder, discovery, and joyful learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="photos" className="text-lg font-medium">
                {t('gallery.tabs.photos')}
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg font-medium">
                {t('gallery.tabs.videos')}
              </TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-semibold text-lg">{photo.title}</h3>
                          <p className="text-sm text-gray-200">{photo.category}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedVideo(video.thumbnail)}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                          >
                            <Play className="w-8 h-8 text-blue-600 ml-1" />
                          </motion.div>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600">
                          {video.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video Player Placeholder</p>
                  <p className="text-sm opacity-75 mt-2">In a real application, this would be a video player</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Create Beautiful Memories at Kidz Haven
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Your child's journey of discovery and joy starts here. Join our loving community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                Schedule a Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                Start Registration
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;