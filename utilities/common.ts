import type {
  ContactType,
  FaqType,
  ProjectType,
  ServiceType,
  AuthorType,
  TestimonialType,
  BrandType
} from '@/types/landing'

import {
  ComponentIcon,
  LayersIcon,
  LayoutGridIcon,
  LineChartIcon,
  MailIcon,
  PhoneIcon,
  SaveIcon
} from 'lucide-vue-next'

import agencyImg6 from '@/assets/images/landing/agency/img-6.jpg'
import agencyImg7 from '@/assets/images/landing/agency/img-7.jpg'
import agencyImg8 from '@/assets/images/landing/agency/img-8.jpg'
import agencyImg9 from '@/assets/images/landing/agency/img-9.jpg'
import agency2_1 from '@/assets/images/landing/agency-2/img-1.jpg'
import agency2_2 from '@/assets/images/landing/agency-2/img-2.jpg'
import agency2_3 from '@/assets/images/landing/agency-2/img-3.jpg'
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'
import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'

export const serviceData1: ServiceType[] = [
  {
    icon: ComponentIcon,
    title: 'Developer',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design'
  },
  {
    icon: LayersIcon,
    title: 'Digital Product Design',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design'
  },
  {
    icon: LayoutGridIcon,
    title: 'Branding & Design',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design'
  }
]

const categories: string[] = ['Web Design', 'Brand']

export const projectData1: ProjectType[] = [
  {
    image: agencyImg6,
    category: categories[0],
    name: 'Branding Process'
  },
  {
    image: agencyImg7,
    category: categories[0],
    name: 'Digital Platform'
  },
  {
    image: agencyImg8,
    category: categories[1],
    name: 'Coder Studio'
  },
  {
    image: agencyImg9,
    category: categories[0],
    name: 'New Gadgets'
  }
]

export const projectData2: ProjectType[] = [
  {
    image: agency2_1,
    category: categories[0],
    name: 'Branding Process'
  },
  {
    image: agency2_2,
    category: categories[0],
    name: 'Digital Platform'
  },
  {
    image: agency2_3,
    category: categories[1],
    name: 'Coder Studio'
  },
  {
    image: agency2_1,
    category: categories[0],
    name: 'Branding Process'
  },
  {
    image: agency2_2,
    category: categories[0],
    name: 'Digital Platform'
  },
  {
    image: agency2_3,
    category: categories[1],
    name: 'Coder Studio'
  }
]

export const faqData: FaqType[] = [
  {
    question: 'What is web design?',
    answer:
      'Explore the world of brand strategy as we dive into the realms of consumer perception, market positioning, and effective communication.'
  },
  {
    question: 'How long does it take to design a website?',
    answer: `Immerse yourself in the art of web design, where
        creativity and functionality converge. Our designs are
        tailored to captivate your audience, ensuring a memorable
        online presence.`
  },
  {
    question: `Can I update my website's design after it's live?`,
    answer: `Experience the impact of compelling visual direction. Our
        artistic vision guides your brand's aesthetics, leaving a
        lasting impression on your audience.`
  },
  {
    question: 'What is user experience UI design in web design?',
    answer: `Discover the realm of web development where innovation
        meets functionality. We bring your digital ideas to life,
        creating seamless and user-friendly experiences.`
  },
  {
    question: ' What is responsive web design?',
    answer: `Unleash the power of strategic marketing. Our marketing techniques are designed to help your brand reach new heights, ensuring it's heard loud and clear in the digital landscape.`
  }
]

export const contactData: ContactType[] = [
  {
    icon: PhoneIcon,
    label: 'Call Me',
    detail: '+0088 66956 66'
  },
  {
    icon: MailIcon,
    label: 'Email me',
    detail: 'Dgnr@gmail.com'
  },
  {
    icon: LineChartIcon,
    label: 'Follow Me',
    detail: 'Facebook.com'
  },
  {
    icon: SaveIcon,
    label: 'My Work',
    detail: 'Coderthemes.com'
  }
]

export const authorData: AuthorType[] = [
  {
    image: avatar1,
    name: 'Enagol Ame',
    expertise: 'Founder & CEO of Luminous',
    address: 'Brazil'
  },
  {
    image: avatar2,
    name: 'Rashed ka.',
    expertise: 'SEO/SMO Expert',
    address: 'Italy'
  },
  {
    image: avatar3,
    name: 'Jackma Kalin',
    expertise: 'Marketing Consultant',
    address: 'USA'
  },
  {
    image: avatar4,
    name: 'Leonard Heiser',
    expertise: 'SEO/SMO Expert',
    address: 'UK'
  },
  {
    image: avatar5,
    name: 'Leonard Heiser',
    expertise: 'Marketing Consultant',
    address: 'India'
  }
]
export const testimonialData: TestimonialType[] = [
  {
    comment: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`,
    author: authorData[0],
    rating: 5
  },
  {
    comment: `Vault's expert support enabled us to secure the necessary capital for our expansion. Plus, it's quicker and more cost-effective than hiring a consultant.`,
    author: authorData[1],
    rating: 4
  },
  {
    comment: `Vault is the next game-changing application. I'm at a loss for words. I'll definitely inform my mom about this; she could benefit greatly from using Vault!`,
    author: authorData[2],
    rating: 5
  },
  {
    comment: `We've been utilizing Vault for the past five years. It goes without saying that we are incredibly content with the outcomes. Training was not even necessary.`,
    author: authorData[3],
    rating: 4
  },
  {
    comment:
      'Setting up was incredibly straightforward. I had no prior experience with hosting, but Vault has made everything appear easy.',
    author: authorData[4],
    rating: 3
  },
  {
    comment: `Vault is the next game-changing application. I'm at a loss for words. I'll definitely inform my mom about this; she could benefit greatly from using Vault!`,
    author: authorData[2],
    rating: 5
  }
]

export const brandData: BrandType[] = [
  {
    image: brand1
  },
  {
    image: brand2
  },
  {
    image: brand3
  },
  {
    image: brand4
  },
  {
    image: brand5
  },
  {
    image: brand1
  },
  {
    image: brand2
  },
  {
    image: brand3
  },
  {
    image: brand4
  },
  {
    image: brand5
  }
]
