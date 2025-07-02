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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, CheckCircle, FileText, User, Mail, Phone, Calendar, Baby } from 'lucide-react';

const registrationSchema = z.object({
  childName: z.string().min(2, 'Child name must be at least 2 characters'),
  childAge: z.string().min(1, 'Please select child age'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  program: z.string().min(1, 'Please select a program'),
  startDate: z.string().min(1, 'Please select a start date'),
  specialNeeds: z.string().optional(),
  emergencyContact: z.string().min(2, 'Emergency contact is required'),
  emergencyPhone: z.string().min(10, 'Emergency phone is required'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationPage: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  });

  const onSubmit = async (data: RegistrationFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Registration data:', data);
    setIsSubmitted(true);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registration Submitted Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            {t('registration.form.success')}
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
          >
            Submit Another Registration
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                {t('registration.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              {t('registration.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your child's bright future. Our registration process 
              is simple and designed to help us understand your child's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-8">
                <CardTitle className="text-2xl font-bold text-center">
                  Registration Form
                </CardTitle>
                <p className="text-center text-blue-100 mt-2">
                  Please fill out all required information
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Child Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Baby className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Child Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="childName" className="text-sm font-medium text-gray-700">
                          {t('registration.form.childName')} *
                        </Label>
                        <Input
                          id="childName"
                          {...register('childName')}
                          className="mt-1"
                          placeholder="Enter child's full name"
                        />
                        {errors.childName && (
                          <p className="mt-1 text-sm text-red-600">{errors.childName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="childAge" className="text-sm font-medium text-gray-700">
                          {t('registration.form.childAge')} *
                        </Label>
                        <Select onValueChange={(value) => setValue('childAge', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 year</SelectItem>
                            <SelectItem value="2">2 years</SelectItem>
                            <SelectItem value="3">3 years</SelectItem>
                            <SelectItem value="4">4 years</SelectItem>
                            <SelectItem value="5">5 years</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.childAge && (
                          <p className="mt-1 text-sm text-red-600">{errors.childAge.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="program" className="text-sm font-medium text-gray-700">
                        {t('registration.form.program')} *
                      </Label>
                      <Select onValueChange={(value) => setValue('program', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toddlers">Toddlers (1-2 years)</SelectItem>
                          <SelectItem value="preschool">Preschool (3-4 years)</SelectItem>
                          <SelectItem value="prekindergarten">Pre-Kindergarten (4-5 years)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.program && (
                        <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                        {t('registration.form.startDate')} *
                      </Label>
                      <Input
                        id="startDate"
                        type="date"
                        {...register('startDate')}
                        className="mt-1"
                      />
                      {errors.startDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Parent Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Parent Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">
                          {t('registration.form.parentName')} *
                        </Label>
                        <Input
                          id="parentName"
                          {...register('parentName')}
                          className="mt-1"
                          placeholder="Enter parent's full name"
                        />
                        {errors.parentName && (
                          <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          {t('registration.form.email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="mt-1"
                          placeholder="Enter email address"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          {t('registration.form.phone')} *
                        </Label>
                        <Input
                          id="phone"
                          {...register('phone')}
                          className="mt-1"
                          placeholder="+971 50 123 4567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="emergencyContact" className="text-sm font-medium text-gray-700">
                          Emergency Contact Name *
                        </Label>
                        <Input
                          id="emergencyContact"
                          {...register('emergencyContact')}
                          className="mt-1"
                          placeholder="Enter emergency contact name"
                        />
                        {errors.emergencyContact && (
                          <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="emergencyPhone" className="text-sm font-medium text-gray-700">
                        Emergency Contact Phone *
                      </Label>
                      <Input
                        id="emergencyPhone"
                        {...register('emergencyPhone')}
                        className="mt-1"
                        placeholder="+971 50 123 4567"
                      />
                      {errors.emergencyPhone && (
                        <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
                    </div>

                    <div>
                      <Label htmlFor="specialNeeds" className="text-sm font-medium text-gray-700">
                        {t('registration.form.specialNeeds')}
                      </Label>
                      <Textarea
                        id="specialNeeds"
                        {...register('specialNeeds')}
                        className="mt-1"
                        rows={4}
                        placeholder="Please describe any special needs, allergies, or important information about your child"
                      />
                    </div>

                    {/* Document Upload */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        {t('registration.form.documents')}
                      </Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          Birth Certificate, Passport Copy, Medical Records (PDF, JPG, PNG)
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <Label
                          htmlFor="file-upload"
                          className="mt-2 inline-block cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Choose Files
                        </Label>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              {file}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-3 rounded-full text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        t('registration.form.submit')
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;