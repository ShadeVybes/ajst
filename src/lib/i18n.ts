import { createContext, useContext } from 'react'

export type Language = 'fr' | 'en' | 'ar'

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    activities: string
    media: string
    news: string
    contact: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    tagline: string
    exploreClubs: string
    ourHistory: string
    stats: {
      activeClubs: string
      heritage: string
      youngScientists: string
      disciplines: string
    }
  }
  // About Section
  about: {
    title: string
    subtitle: string
    mission: string
    missionDescription: string
    achievements: {
      clubs: string
      clubsDesc: string
      excellence: string
      excellenceDesc: string
      international: string
      internationalDesc: string
    }
    timeline: string
  }
  // Activities Section
  activities: {
    title: string
    subtitle: string
    robotics: string
    roboticsDesc: string
    astronomy: string
    astronomyDesc: string
    ecology: string
    ecologyDesc: string
    physics: string
    physicsDesc: string
    electronics: string
    electronicsDesc: string
    biology: string
    biologyDesc: string
  }
  // Contact Section
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    phone: string
    address: string
  }
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      activities: 'Activités',
      media: 'Médias',
      news: 'Actualités',
      contact: 'Contact'
    },
    hero: {
      title: 'Association Jeunes Science de Tunisie',
      subtitle: 'Explorez, Innovez, Créez',
      tagline: '60 ans d\'excellence scientifique',
      exploreClubs: 'Découvrez nos Clubs',
      ourHistory: 'Notre Histoire',
      stats: {
        activeClubs: 'Clubs Actifs',
        heritage: 'Ans d\'Héritage',
        youngScientists: 'Jeunes Scientifiques',
        disciplines: 'Disciplines'
      }
    },
    about: {
      title: 'Notre Histoire',
      subtitle: 'Depuis 1959, l\'AJST forme les scientifiques de demain et contribue au développement de la culture scientifique en Tunisie à travers des programmes innovants et inclusifs.',
      mission: 'Notre Mission',
      missionDescription: 'Encourager l\'innovation scientifique chez les jeunes, développer l\'esprit critique et créatif, et contribuer à l\'épanouissement d\'une génération de scientifiques capables de relever les défis de demain.',
      achievements: {
        clubs: '30+ Clubs Actifs',
        clubsDesc: 'Présents dans tous les gouvernorats de Tunisie',
        excellence: '60 Ans d\'Excellence',
        excellenceDesc: 'Six décennies d\'innovation et de formation scientifique',
        international: 'Rayonnement International',
        internationalDesc: 'Partenariats avec des institutions scientifiques mondiales'
      },
      timeline: 'Timeline de l\'Innovation'
    },
    activities: {
      title: 'Nos Activités',
      subtitle: 'Découvrez nos programmes scientifiques diversifiés',
      robotics: 'Robotique',
      roboticsDesc: 'Conception et programmation de robots intelligents pour résoudre des défis complexes.',
      astronomy: 'Astronomie',
      astronomyDesc: 'Observation des astres et exploration de l\'univers avec des équipements modernes.',
      ecology: 'Écologie',
      ecologyDesc: 'Protection de l\'environnement et développement de solutions durables.',
      physics: 'Physique',
      physicsDesc: 'Expériences et découvertes dans le monde fascinant de la physique.',
      electronics: 'Électronique',
      electronicsDesc: 'Création de circuits et systèmes électroniques innovants.',
      biology: 'Biologie',
      biologyDesc: 'Exploration du vivant et des phénomènes biologiques.'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Prêt à rejoindre l\'aventure scientifique ? Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre parcours.',
      name: 'Nom complet',
      email: 'Adresse email',
      subject: 'Sujet',
      message: 'Votre message',
      send: 'Envoyer le message',
      phone: 'Téléphone',
      address: 'Adresse'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      activities: 'Activities',
      media: 'Media',
      news: 'News',
      contact: 'Contact'
    },
    hero: {
      title: 'Tunisian Youth Science Association',
      subtitle: 'Explore, Innovate, Create',
      tagline: '60 years of scientific excellence',
      exploreClubs: 'Discover our Clubs',
      ourHistory: 'Our History',
      stats: {
        activeClubs: 'Active Clubs',
        heritage: 'Years of Heritage',
        youngScientists: 'Young Scientists',
        disciplines: 'Disciplines'
      }
    },
    about: {
      title: 'Our Story',
      subtitle: 'Since 1959, AJST has been training tomorrow\'s scientists and contributing to the development of scientific culture in Tunisia through innovative and inclusive programs.',
      mission: 'Our Mission',
      missionDescription: 'To encourage scientific innovation among young people, develop critical and creative thinking, and contribute to the development of a generation of scientists capable of meeting tomorrow\'s challenges.',
      achievements: {
        clubs: '30+ Active Clubs',
        clubsDesc: 'Present in all governorates of Tunisia',
        excellence: '60 Years of Excellence',
        excellenceDesc: 'Six decades of innovation and scientific training',
        international: 'International Reach',
        internationalDesc: 'Partnerships with global scientific institutions'
      },
      timeline: 'Innovation Timeline'
    },
    activities: {
      title: 'Our Activities',
      subtitle: 'Discover our diverse scientific programs',
      robotics: 'Robotics',
      roboticsDesc: 'Design and programming of intelligent robots to solve complex challenges.',
      astronomy: 'Astronomy',
      astronomyDesc: 'Star observation and universe exploration with modern equipment.',
      ecology: 'Ecology',
      ecologyDesc: 'Environmental protection and sustainable solutions development.',
      physics: 'Physics',
      physicsDesc: 'Experiments and discoveries in the fascinating world of physics.',
      electronics: 'Electronics',
      electronicsDesc: 'Creation of innovative electronic circuits and systems.',
      biology: 'Biology',
      biologyDesc: 'Exploration of life and biological phenomena.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to join the scientific adventure? We are here to answer all your questions and accompany you on your journey.',
      name: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send message',
      phone: 'Phone',
      address: 'Address'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      activities: 'الأنشطة',
      media: 'الوسائط',
      news: 'الأخبار',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'جمعية الشباب العلمي التونسي',
      subtitle: 'اكتشف، ابتكر، أبدع',
      tagline: '60 عاماً من التميز العلمي',
      exploreClubs: 'اكتشف نوادينا',
      ourHistory: 'تاريخنا',
      stats: {
        activeClubs: 'نادي نشط',
        heritage: 'عام من التراث',
        youngScientists: 'عالم شاب',
        disciplines: 'تخصص'
      }
    },
    about: {
      title: 'قصتنا',
      subtitle: 'منذ عام 1959، تقوم جمعية الشباب العلمي التونسي بتدريب علماء المستقبل والمساهمة في تطوير الثقافة العلمية في تونس من خلال البرامج المبتكرة والشاملة.',
      mission: 'مهمتنا',
      missionDescription: 'تشجيع الابتكار العلمي بين الشباب، وتطوير التفكير النقدي والإبداعي، والمساهمة في تنمية جيل من العلماء القادرين على مواجهة تحديات المستقبل.',
      achievements: {
        clubs: '30+ نادي نشط',
        clubsDesc: 'موجود في جميع ولايات تونس',
        excellence: '60 عام من التميز',
        excellenceDesc: 'ستة عقود من الابتكار والتدريب العلمي',
        international: 'انتشار دولي',
        internationalDesc: 'شراكات مع مؤسسات علمية عالمية'
      },
      timeline: 'خط زمني للابتكار'
    },
    activities: {
      title: 'أنشطتنا',
      subtitle: 'اكتشف برامجنا العلمية المتنوعة',
      robotics: 'الروبوتات',
      roboticsDesc: 'تصميم وبرمجة الروبوتات الذكية لحل التحديات المعقدة.',
      astronomy: 'علم الفلك',
      astronomyDesc: 'مراقبة النجوم واستكشاف الكون بمعدات حديثة.',
      ecology: 'علم البيئة',
      ecologyDesc: 'حماية البيئة وتطوير الحلول المستدامة.',
      physics: 'الفيزياء',
      physicsDesc: 'التجارب والاكتشافات في عالم الفيزياء الرائع.',
      electronics: 'الإلكترونيات',
      electronicsDesc: 'إنشاء دوائر وأنظمة إلكترونية مبتكرة.',
      biology: 'علم الأحياء',
      biologyDesc: 'استكشاف الحياة والظواهر البيولوجية.'
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'مستعد للانضمام إلى المغامرة العلمية؟ نحن هنا للإجابة على جميع أسئلتك ومرافقتك في رحلتك.',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      phone: 'الهاتف',
      address: 'العنوان'
    }
  }
}

export const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}>({
  language: 'fr',
  setLanguage: () => {},
  t: translations.fr
})

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { translations }
