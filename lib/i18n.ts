import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About Us',
        programs: 'Programs',
        schedule: 'Daily Schedule',
        registration: 'Registration',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        contact: 'Contact Us',
        blog: 'Blog'
      },
      // Home Page
      home: {
        title: 'Welcome to Kidz Haven',
        subtitle: 'Where Little Dreams Begin to Bloom',
        description: 'A nurturing environment where children learn, play, and grow in the heart of Dubai',
        cta: 'Book a Visit',
        whatsapp: 'Chat on WhatsApp',
        features: {
          title: 'Why Choose Kidz Haven?',
          safe: {
            title: 'Safe Environment',
            description: 'Secure and child-friendly facilities with 24/7 monitoring'
          },
          qualified: {
            title: 'Qualified Teachers',
            description: 'Experienced educators passionate about child development'
          },
          programs: {
            title: 'Rich Programs',
            description: 'Educational and recreational activities for holistic growth'
          },
          nutrition: {
            title: 'Healthy Nutrition',
            description: 'Balanced meals and snacks prepared with love'
          }
        }
      },
      // About Page
      about: {
        title: 'About Kidz Haven',
        subtitle: 'Nurturing Tomorrow\'s Leaders Today',
        vision: {
          title: 'Our Vision',
          text: 'To be Dubai\'s premier nursery, fostering creativity, confidence, and compassion in every child.'
        },
        mission: {
          title: 'Our Mission',
          text: 'To provide a safe, nurturing environment where children can explore, learn, and develop their unique potential.'
        },
        values: {
          title: 'Our Values',
          items: {
            care: 'Caring for each child as our own',
            excellence: 'Excellence in early childhood education',
            creativity: 'Fostering creativity and imagination',
            respect: 'Respecting diversity and individual needs'
          }
        }
      },
      // Programs Page
      programs: {
        title: 'Our Programs',
        subtitle: 'Comprehensive Learning Adventures',
        toddlers: {
          title: 'Toddlers (1-2 years)',
          description: 'Gentle introduction to social interaction and basic motor skills',
          features: ['Sensory play', 'Basic motor skills', 'Social interaction', 'Music and movement']
        },
        preschool: {
          title: 'Preschool (3-4 years)',
          description: 'Structured learning with focus on language and cognitive development',
          features: ['Language development', 'Pre-math concepts', 'Creative arts', 'Science exploration']
        },
        prekindergarten: {
          title: 'Pre-Kindergarten (4-5 years)',
          description: 'School readiness program preparing children for formal education',
          features: ['Reading readiness', 'Writing skills', 'Problem solving', 'Social skills']
        }
      },
      // Schedule Page
      schedule: {
        title: 'Daily Schedule',
        subtitle: 'A Day in the Life at Kidz Haven'
      },
      // Registration Page
      registration: {
        title: 'Register Your Child',
        subtitle: 'Join the Kidz Haven Family',
        form: {
          childName: 'Child\'s Full Name',
          childAge: 'Child\'s Age',
          parentName: 'Parent\'s Name',
          email: 'Email Address',
          phone: 'Phone Number',
          program: 'Select Program',
          startDate: 'Preferred Start Date',
          specialNeeds: 'Special Needs or Allergies',
          documents: 'Upload Documents',
          submit: 'Submit Registration',
          success: 'Registration submitted successfully! We will contact you within 24 hours.'
        }
      },
      // Gallery Page
      gallery: {
        title: 'Our Gallery',
        subtitle: 'Moments of Joy and Learning',
        tabs: {
          photos: 'Photos',
          videos: 'Videos'
        }
      },
      // Testimonials Page
      testimonials: {
        title: 'Parent Testimonials',
        subtitle: 'What Our Families Say About Us'
      },
      // Contact Page
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch with Kidz Haven',
        info: {
          address: 'Address',
          phone: 'Phone',
          email: 'Email',
          hours: 'Operating Hours'
        },
        form: {
          name: 'Your Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          send: 'Send Message'
        }
      },
      // Blog Page
      blog: {
        title: 'Parenting Blog',
        subtitle: 'Tips and Insights for Parents'
      },
      // Common
      common: {
        learnMore: 'Learn More',
        readMore: 'Read More',
        downloadBrochure: 'Download Brochure',
        bookVisit: 'Book a Visit',
        loading: 'Loading...',
        error: 'Something went wrong',
        success: 'Success!'
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        programs: 'البرامج',
        schedule: 'الجدول اليومي',
        registration: 'التسجيل',
        gallery: 'المعرض',
        testimonials: 'آراء الأهالي',
        contact: 'تواصل معنا',
        blog: 'المدونة'
      },
      // Home Page
      home: {
        title: 'مرحباً بكم في كيدز هافن',
        subtitle: 'حيث تبدأ الأحلام الصغيرة بالازدهار',
        description: 'بيئة محبة حيث يتعلم الأطفال ويلعبون وينمون في قلب دبي',
        cta: 'احجز زيارة',
        whatsapp: 'تحدث عبر واتساب',
        features: {
          title: 'لماذا تختار كيدز هافن؟',
          safe: {
            title: 'بيئة آمنة',
            description: 'مرافق آمنة وصديقة للأطفال مع مراقبة على مدار الساعة'
          },
          qualified: {
            title: 'معلمون مؤهلون',
            description: 'مربون ذوو خبرة ومتحمسون لتنمية الطفل'
          },
          programs: {
            title: 'برامج غنية',
            description: 'أنشطة تعليمية وترفيهية للنمو الشامل'
          },
          nutrition: {
            title: 'تغذية صحية',
            description: 'وجبات متوازنة ووجبات خفيفة محضرة بحب'
          }
        }
      },
      // About Page
      about: {
        title: 'عن كيدز هافن',
        subtitle: 'نربي قادة المستقبل اليوم',
        vision: {
          title: 'رؤيتنا',
          text: 'أن نكون الحضانة الرائدة في دبي، نعزز الإبداع والثقة والتعاطف في كل طفل.'
        },
        mission: {
          title: 'مهمتنا',
          text: 'توفير بيئة آمنة ومحبة حيث يمكن للأطفال الاستكشاف والتعلم وتطوير إمكاناتهم الفريدة.'
        },
        values: {
          title: 'قيمنا',
          items: {
            care: 'الاهتمام بكل طفل كأنه طفلنا',
            excellence: 'التميز في تعليم الطفولة المبكرة',
            creativity: 'تنمية الإبداع والخيال',
            respect: 'احترام التنوع والاحتياجات الفردية'
          }
        }
      },
      // Programs Page
      programs: {
        title: 'برامجنا',
        subtitle: 'مغامرات تعلم شاملة',
        toddlers: {
          title: 'الأطفال الصغار (1-2 سنة)',
          description: 'مقدمة لطيفة للتفاعل الاجتماعي والمهارات الحركية الأساسية',
          features: ['اللعب الحسي', 'المهارات الحركية الأساسية', 'التفاعل الاجتماعي', 'الموسيقى والحركة']
        },
        preschool: {
          title: 'ما قبل المدرسة (3-4 سنوات)',
          description: 'تعلم منظم مع التركيز على اللغة والتطور المعرفي',
          features: ['تطوير اللغة', 'مفاهيم ما قبل الرياضيات', 'الفنون الإبداعية', 'استكشاف العلوم']
        },
        prekindergarten: {
          title: 'ما قبل الروضة (4-5 سنوات)',
          description: 'برنامج الاستعداد للمدرسة يعد الأطفال للتعليم الرسمي',
          features: ['الاستعداد للقراءة', 'مهارات الكتابة', 'حل المشكلات', 'المهارات الاجتماعية']
        }
      },
      // Schedule Page
      schedule: {
        title: 'الجدول اليومي',
        subtitle: 'يوم في حياة كيدز هافن'
      },
      // Registration Page
      registration: {
        title: 'سجل طفلك',
        subtitle: 'انضم إلى عائلة كيدز هافن',
        form: {
          childName: 'الاسم الكامل للطفل',
          childAge: 'عمر الطفل',
          parentName: 'اسم الوالد',
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
          program: 'اختر البرنامج',
          startDate: 'تاريخ البدء المفضل',
          specialNeeds: 'احتياجات خاصة أو حساسية',
          documents: 'رفع المستندات',
          submit: 'إرسال التسجيل',
          success: 'تم إرسال التسجيل بنجاح! سنتواصل معك خلال 24 ساعة.'
        }
      },
      // Gallery Page
      gallery: {
        title: 'المعرض',
        subtitle: 'لحظات من الفرح والتعلم',
        tabs: {
          photos: 'الصور',
          videos: 'الفيديوهات'
        }
      },
      // Testimonials Page
      testimonials: {
        title: 'آراء أولياء الأمور',
        subtitle: 'ما تقوله عائلاتنا عنا'
      },
      // Contact Page
      contact: {
        title: 'تواصل معنا',
        subtitle: 'تواصل مع كيدز هافن',
        info: {
          address: 'العنوان',
          phone: 'الهاتف',
          email: 'البريد الإلكتروني',
          hours: 'ساعات العمل'
        },
        form: {
          name: 'اسمك',
          email: 'البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'الرسالة',
          send: 'إرسال الرسالة'
        }
      },
      // Blog Page
      blog: {
        title: 'مدونة الأبوة والأمومة',
        subtitle: 'نصائح ورؤى للوالدين'
      },
      // Common
      common: {
        learnMore: 'اعرف أكثر',
        readMore: 'اقرأ المزيد',
        downloadBrochure: 'تحميل الكتيب',
        bookVisit: 'احجز زيارة',
        loading: 'جاري التحميل...',
        error: 'حدث خطأ ما',
        success: 'نجح!'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;