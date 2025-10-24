import { ref } from 'vue'

export type Locale = 'en' | 'ka'

export const currentLocale = ref<Locale>((localStorage.getItem('locale') as Locale) || 'en')

export const setLocale = (locale: Locale) => {
  currentLocale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export interface Translations {
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  gallery: {
    title: string
    subtitle: string
    viewGallery: string
    ctaText: string
    ctaButton: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    submit: string
    submitting: string
    successTitle: string
    successMessage: string
    errorTitle: string
    errorMessage: string
  }
  shelves: {
    item1: { title: string; description: string }
    item2: { title: string; description: string }
    item3: { title: string; description: string }
    item4: { title: string; description: string }
    item5: { title: string; description: string }
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    hero: {
      title: 'Otaro',
      subtitle: 'Handcrafted Colorful Shelves',
      description: 'Pastel-colored, wavy-shaped MDF shelves to brighten your space',
      cta: 'Get in Touch'
    },
    gallery: {
      title: 'The Collection',
      subtitle: 'Explore our handcrafted colorful shelves',
      viewGallery: 'View Gallery',
      ctaText: 'Love what you see? Let\'s create something special for your space!',
      ctaButton: 'Order Your Shelf'
    },
    about: {
      title: 'About Otaro',
      paragraphs: [
        'At Otaro, we believe that functional items can also be beautiful. Each shelf is carefully handcrafted from high-quality MDF, combining durability with an eye-catching aesthetic.',
        'Our signature wavy designs and soft pastel colors bring a touch of whimsy and warmth to any space. Whether you\'re looking to organize your books, display your favorite items, or simply add a statement piece to your wall, our shelves are designed to delight.',
        'Every piece is made with attention to detail and a commitment to quality craftsmanship. We take pride in creating shelves that are not just storage solutions, but works of art that reflect your unique style.'
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a question or want to order a custom shelf? We\'d love to hear from you!',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for reaching out. We\'ll get back to you soon!',
      errorTitle: 'Oops!',
      errorMessage: 'Something went wrong. Please try again.'
    },
    shelves: {
      item1: { title: 'Mint Green Wavy Shelf', description: 'Perfect for books and decor' },
      item2: { title: 'Soft Mint Display', description: 'Elegant curved design' },
      item3: { title: 'Minimal Green Shelf', description: 'Clean and modern' },
      item4: { title: 'Mint Statement Piece', description: 'Eye-catching wave shape' },
      item5: { title: 'Stylish Green Shelf', description: 'Functional art for your wall' }
    }
  },
  ka: {
    hero: {
      title: 'ოტარო',
      subtitle: 'ხელნაკეთი ფერადი თაროები',
      description: 'პასტელური ფერების, ტალღოვანი ფორმის MDF თაროები თქვენი სივრცის გასანათებლად',
      cta: 'დაგვიკავშირდით'
    },
    gallery: {
      title: 'კოლექცია',
      subtitle: 'გაეცანით ჩვენს ხელნაკეთ ფერად თაროებს',
      viewGallery: 'გალერეის ნახვა',
      ctaText: 'მოგწონთ რაც ხედავთ? მოდით შევქმნათ რაღაც განსაკუთრებული თქვენი სივრცისთვის!',
      ctaButton: 'შეუკვეთეთ თაროები'
    },
    about: {
      title: 'ოტაროს შესახებ',
      paragraphs: [
        'ოტაროში ჩვენ გვჯერა, რომ ფუნქციონალურ ნივთებს შეუძლიათ ლამაზიც იყვნენ. თითოეული თარო ფრთხილად მზადდება მაღალხარისხიანი MDF-ისგან, აერთიანებს გამძლეობას თვალწარმტაც ესთეტიკასთან.',
        'ჩვენი გამორჩეული ტალღოვანი დიზაინი და რბილი პასტელური ფერები მოაქვს თამამი და სითბო ნებისმიერ სივრცეში. იქნება თქვენ ეძებთ წიგნების მოწესრიგებას, საყვარელი ნივთების ჩვენებას, თუ უბრალოდ კედლის დამამშვენებელ ნაწილს, ჩვენი თაროები შექმნილია სიამოვნების მისაღებად.',
        'თითოეული ნაწარმოებია დამზადებული დეტალებზე ყურადღებით და ხარისხიანი ხელობის ვალდებულებით. ჩვენ ვამაყობთ თაროების შექმნით, რომლებიც არ არის მხოლოდ შესანახი გადაწყვეტილებები, არამედ ხელოვნების ნიმუშები, რომლებიც ასახავს თქვენს უნიკალურ სტილს.'
      ]
    },
    contact: {
      title: 'დაგვიკავშირდით',
      subtitle: 'გაქვთ კითხვა ან გსურთ შეუკვეთოთ საკუთარი თარო? ჩვენ გვინდა გისმინოთ!',
      name: 'თქვენი სახელი',
      email: 'თქვენი ელ-ფოსტა',
      message: 'თქვენი შეტყობინება',
      submit: 'გაგზავნა',
      submitting: 'იგზავნება...',
      successTitle: 'შეტყობინება გაგზავნილია!',
      successMessage: 'გმადლობთ მიმართვისთვის. ჩვენ მალე დაგიბრუნდებით!',
      errorTitle: 'უფს!',
      errorMessage: 'რაღაც არასწორად მოხდა. გთხოვთ სცადოთ ახლიდან.'
    },
    shelves: {
      item1: { title: 'მწვანე ტალღოვანი თარო', description: 'შესანიშნავია წიგნებისა და დეკორისთვის' },
      item2: { title: 'რბილი მწვანე ვიტრინა', description: 'ელეგანტური მრუდი დიზაინი' },
      item3: { title: 'მინიმალური მწვანე თარო', description: 'სუფთა და თანამედროვე' },
      item4: { title: 'მწვანე საგანგებო ნაწილი', description: 'თვალწარმტაცი ტალღოვანი ფორმა' },
      item5: { title: 'სტილური მწვანე თარო', description: 'ფუნქციონალური ხელოვნება თქვენი კედლისთვის' }
    }
  }
}

export const t = (key: string): string => {
  const keys = key.split('.')
  let value: any = translations[currentLocale.value]

  for (const k of keys) {
    value = value[k]
    if (value === undefined) return key
  }

  return value
}

export const useTranslation = () => {
  return {
    t,
    locale: currentLocale,
    setLocale
  }
}
