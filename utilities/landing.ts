import agencyLight from '@/assets/images/demo/agency.png'
import agencyDark from '@/assets/images/demo/agency-dark.png'
import agency2Light from '@/assets/images/demo/agency-2.png'
import agency2Dark from '@/assets/images/demo/agency-2-dark.png'
import charityLight from '@/assets/images/demo/charity.png'
import charityDark from '@/assets/images/demo/charity-dark.png'
import companyLight from '@/assets/images/demo/company.png'
import companyDark from '@/assets/images/demo/company-dark.png'
import creativeLight from '@/assets/images/demo/creative.png'
import creativeDark from '@/assets/images/demo/creative-dark.png'
import eBookLight from '@/assets/images/demo/ebook.png'
import eBookDark from '@/assets/images/demo/ebook-dark.png'
import financeLight from '@/assets/images/demo/finance.png'
import financeDark from '@/assets/images/demo/finance-dark.png'
import hostingLight from '@/assets/images/demo/hosting.png'
import hostingDark from '@/assets/images/demo/hosting-dark.png'
import marketingLight from '@/assets/images/demo/marketing.png'
import marketingDark from '@/assets/images/demo/marketing-dark.png'
import marketing2Light from '@/assets/images/demo/marketing-2.png'
import marketing2Dark from '@/assets/images/demo/marketing-2-dark.png'
import marketing3Light from '@/assets/images/demo/marketing-3.png'
import marketing3Dark from '@/assets/images/demo/marketing-3-dark.png'
import photographyLight from '@/assets/images/demo/photography.png'
import photographyDark from '@/assets/images/demo/photography-dark.png'
import portfolioLight from '@/assets/images/demo/portfolio.png'
import portfolioDark from '@/assets/images/demo/portfolio-dark.png'
import portfolio2Light from '@/assets/images/demo/portfolio-2.png'
import portfolio2Dark from '@/assets/images/demo/portfolio-2-dark.png'
import startupLight from '@/assets/images/demo/startup.png'
import startupDark from '@/assets/images/demo/startup-dark.png'
import designerLight from '@/assets/images/demo/web-designer.png'
import designerDark from '@/assets/images/demo/web-designer-dark.png'
import adminDashboardLight from '@/assets/images/demo/admin-dashboard.png'
import adminDashboardDark from '@/assets/images/demo/admin-dashboard-dark.png'
import adminChatLight from '@/assets/images/demo/admin-chat.png'
import adminChatDark from '@/assets/images/demo/admin-chat-dark.png'
import adminProjectLight from '@/assets/images/demo/admin-project.png'
import adminProjectDark from '@/assets/images/demo/admin-project-dark.png'
import uiComponentsLight from '@/assets/images/demo/ui-components.png'
import uiComponentsDark from '@/assets/images/demo/ui-components-dark.png'
import authLogin from '@/assets/images/demo/auth-login.png'
import authRegister from '@/assets/images/demo/auth-register.png'
import authLogout from '@/assets/images/demo/auth-logout.png'
import authRecoverPassword from '@/assets/images/demo/auth-recoverpw.png'
import authResetPassword from '@/assets/images/demo/auth-reset-password.png'
import tailwindcss from '@/assets/images/demo/logo/tailwindcss.svg'
import {
  AirplayIcon,
  CircuitBoardIcon,
  FeatherIcon,
  FigmaIcon,
  FileTextIcon,
  Globe2Icon,
  MoveIcon,
  PackageIcon,
  StarIcon,
  SunMoonIcon,
  Users2Icon
} from 'lucide-vue-next'

import html from '@/assets/images/demo/logo/html.svg'
import css from '@/assets/images/demo/logo/css.svg'
import javascript from '@/assets/images/demo/logo/javascript.svg'
import bun from '@/assets/images/demo/logo/bun.svg'
import yarn from '@/assets/images/demo/logo/yarn.svg'
import viteJsLogo from '@/assets/images/demo/logo/vitejs-logo.svg'

import type { DemoType, ToolType } from '@/types/landing'
import type { NavbarLinkType } from '@/types/layout'

export const developmentTools: ToolType[] = [
  {
    image: tailwindcss,
    name: 'Tailwindcss'
  },
  {
    image: html,
    name: 'HTML5'
  },
  {
    image: css,
    name: 'CSS3'
  },
  {
    image: javascript,
    name: 'Javascript'
  },
  {
    image: bun,
    name: 'Bun'
  },
  {
    image: yarn,
    name: 'Yarn'
  },
  {
    image: viteJsLogo,
    name: 'ViteJs'
  }
]

export const demoPages: DemoType[] = [
  {
    id: 'demo',
    tag: 'Demo',
    title: 'Landing Demo',
    description: 'Elevate Your Presence: Unveiling the Power of Our Landing Demo!',
    pages: [
      {
        image: {
          light: agencyLight,
          dark: agencyDark
        },
        title: 'Agency',
        path: '/'
      },
      {
        image: {
          light: agency2Light,
          dark: agency2Dark
        },
        title: 'Agency Two',
        path: '/'
      },
      {
        image: {
          light: charityLight,
          dark: charityDark
        },
        title: 'Charity',
        path: /'
      },
      {
        image: {
          light: companyLight,
          dark: companyDark
        },
        title: 'Company',
        path: '/'
      },
      {
        image: {
          light: creativeLight,
          dark: creativeDark
        },
        title: 'Creative',
        path: '/'
      },
      {
        image: {
          light: eBookLight,
          dark: eBookDark
        },
        title: 'Ebook',
        path: '/'
      },
      {
        image: {
          light: financeLight,
          dark: financeDark
        },
        title: 'Finance',
        path: '/'
      },
      {
        image: {
          light: hostingLight,
          dark: hostingDark
        },
        title: 'Hosting',
        path: '/'
      },
      {
        image: {
          light: marketingLight,
          dark: marketingDark
        },
        title: 'Marketing',
        path: '/'
      },
      {
        image: {
          light: marketing2Light,
          dark: marketing2Dark
        },
        title: 'Marketing 2',
        path: '/'
      },
      {
        image: {
          light: marketing3Light,
          dark: marketing3Dark
        },
        title: 'Marketing 3',
        path: '/'
      },
      {
        image: {
          light: photographyLight,
          dark: photographyDark
        },
        title: 'Photography',
        path: '/'
      },
      {
        image: {
          light: portfolioLight,
          dark: portfolioDark
        },
        title: 'Portfolio',
        path: '/'
      },
      {
        image: {
          light: portfolio2Light,
          dark: portfolio2Dark
        },
        title: 'Portfolio 2',
        path: '/'
      },
      {
        image: {
          light: startupLight,
          dark: startupDark
        },
        title: 'Startup',
        path: '/'
      },
      {
        image: {
          light: designerLight,
          dark: designerDark
        },
        title: 'Web Designer',
        path: '/'
      }
    ]
  },
  {
    id: 'admin_demo',
    tag: 'Demo',
    title: 'Admin Demo',
    description:
      'a cutting-edge, one-page template designed for unparalleled performance and seamless user experiences',
    pages: [
      {
        image: {
          light: adminDashboardLight,
          dark: adminDashboardDark
        },
        title: 'Dashboard',
        path: '/'
      },
      {
        image: {
          light: adminChatLight,
          dark: adminChatDark
        },
        title: 'Chat',
        path: '/'
      },
      {
        image: {
          light: adminProjectLight,
          dark: adminProjectDark
        },
        title: 'Project',
        path: '/'
      },
      {
        image: {
          light: uiComponentsLight,
          dark: uiComponentsDark
        },
        title: 'Ui Components',
        path: '/ui-kit'
      }
    ]
  },
  {
    id: 'auth_demo',
    tag: 'Demo',
    title: 'Security',
    description:
      ' serves as the perfect starting point for your next project, showcasing the expertise in building real websites with Tailwind CSS',
    pages: [
      {
        image: {
          light: authLogin,
          dark: authLogin
        },
        title: 'Sign In',
        path: '/auth/login'
      },
      {
        image: {
          light: authRegister,
          dark: authRegister
        },
        title: 'Sign Up',
        path: '/auth/register'
      },
      {
        image: {
          light: authLogout,
          dark: authLogout
        },
        title: 'Logout',
        path: '/auth/logout'
      },
      {
        image: {
          light: authRecoverPassword,
          dark: authRecoverPassword
        },
        title: 'Forgot Password',
        path: '/auth/recover-password'
      },
      {
        image: {
          light: authResetPassword,
          dark: authResetPassword
        },
        title: 'Reset Password',
        path: '/auth/reset-password'
      }
    ]
  },
  {
    id: 'features',
    tag: 'Features',
    title: 'Awesome Template Features',
    features: [
      {
        image: tailwindcss,
        title: 'Built With Tailwind CSS',
        description: 'Rapidly build modern websites without ever leaving your HTML.'
      },
      {
        icon: AirplayIcon,
        title: 'Ultra Responsive',
        description:
          'Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using.'
      },
      {
        icon: SunMoonIcon,
        title: 'Dark Demo Support',
        description:
          'Embark on a Rich Experience: Unveiling a Host of Advanced Features within Our Dark Demo Support Environment.'
      },
      {
        icon: PackageIcon,
        title: 'Production Ready',
        description:
          'Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment.'
      },
      {
        icon: FigmaIcon,
        title: 'Hygienic Design',
        description:
          'Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate.'
      },
      {
        icon: CircuitBoardIcon,
        title: 'High Performance',
        description:
          'We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals.'
      },
      {
        icon: Globe2Icon,
        title: 'Multi Browser Support',
        description:
          'Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers.'
      },
      {
        icon: FileTextIcon,
        title: 'Well Documented',
        description: `Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It\'s all there to help you make the most of our services.`
      },
      {
        icon: Users2Icon,
        title: 'Great Support',
        description: `Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away.`
      },
      {
        icon: MoveIcon,
        title: 'Highly Customizable',
        description: `Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking.`
      },
      {
        icon: FeatherIcon,
        title: 'Light as a Feather',
        description: `From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines.`
      },
      {
        icon: StarIcon,
        title: 'UX Considered',
        description: `A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience.`
      }
    ]
  }
]
