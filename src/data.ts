import { Service, Project, TeamMember, Testimonial, Statistic } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'marketing',
    description: 'Grow your online presence with targeted digital advertising campaigns designed to generate leads and convert prospects.',
    bullets: [
      'Social Media Marketing',
      'Facebook & Instagram Ads',
      'Google Ads Management',
      'Email Marketing Campaigns',
      'Influencer Marketing'
    ],
    iconName: 'Megaphone'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'tech',
    description: 'Build fast, responsive, and secure custom websites tailored for businesses ranging from emerging startups to established enterprises.',
    bullets: [
      'Company Profile Websites',
      'E-commerce Solutions',
      'High-converting Landing Pages',
      'Professional Portfolio Websites',
      'Comprehensive Website Maintenance'
    ],
    iconName: 'Code'
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    category: 'design',
    description: 'Establish a powerful visual identity that captures your company and connects deeply with your target audience.',
    bullets: [
      'Custom Logo Design',
      'Brand Identity Design',
      'Corporate & Marketing Materials',
      'Intargetive UI/UX Design'
    ],
    iconName: 'Palette'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    category: 'content',
    description: 'Tell your brand story and capture attention with premium-quality visual and textual asset creation.',
    bullets: [
      'Engaging Social Media Content',
      'Professional Video Production',
      'High-end Corporate Photography',
      'Persuasive Copywriting & Storytelling'
    ],
    iconName: 'FileText'
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    category: 'seo',
    description: 'Improve search engine rankings, drive high-quality organic traffic, and raise your brand visibility online.',
    bullets: [
      'Strategic On-Page SEO',
      'Robust Technical SEO Audits',
      'Targeted Local SEO optimization',
      'Actionable SEO Competitor Audits'
    ],
    iconName: 'TrendingUp'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Habesha Commerce Platform',
    category: 'Website Development',
    client: 'Abyssinia Premium Inc.',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['E-commerce', 'React', 'Tailwind', 'Checkout System'],
    metrics: { label: 'Online Sales Increase', value: '+142%' },
    description: 'Designed and built a complete modern e-commerce company storefront with rapid page loads, localized payment flows, and highly intuitive administrative dashboards.'
  },
  {
    id: 'proj-2',
    title: 'Chala Coffee Rebrand & Launch',
    category: 'Branding & Design',
    client: 'Chala Coffee Roasters',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    tags: ['Logo Design', 'Brand Identity', 'Packaging', 'Social Guidelines'],
    metrics: { label: 'Brand Awareness', value: '4.8x Lift' },
    description: 'Created an evocative, heritage-rich visual identity for a premium organic coffee brand, including detailed hand-crafted packaging, logo guidelines, and brand design guidelines.'
  },
  {
    id: 'proj-3',
    title: 'Zemed Real Estate Marketing',
    category: 'Digital Marketing',
    client: 'Zemed Properties',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tags: ['Facebook Ads', 'Google Ads', 'Lead Generation', 'Copywriting'],
    metrics: { label: 'Qualified Leads', value: '1.2k+ / Month' },
    description: 'Ran a highly strategic, localized social media advertising campaign aimed at high-intent property buyers, achieving premium quality lead acquisition with lower costs-per-lead.'
  },
  {
    id: 'proj-4',
    title: 'Saba Fashion Promo Campaign',
    category: 'Content Creation',
    client: 'Saba Ethiopian Couture',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    tags: ['Video Production', 'Creative Direction', 'Instagram Reels'],
    metrics: { label: 'Video Views', value: '450k+' },
    description: 'Produced a cohesive visual campaign including stunning 4K promotional reels, lifestyle photography, and compelling copy capturing the blend of heritage and modern fashion.'
  },
  {
    id: 'proj-5',
    title: 'Addis Travel SEO Domination',
    category: 'SEO Services',
    client: 'Addis Horizon Tours',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    tags: ['Technical SEO', 'Keyword Research', 'Local SEO'],
    metrics: { label: 'Organic Traffic', value: '+310%' },
    description: 'Executed technical SEO remediation, keyword architecture reconstruction, and targeted content clusters to achieve page-one rankings for premium national and local tour keywords.'
  },
  {
    id: 'proj-6',
    title: 'Smart Learning Platform UI/UX',
    category: 'Branding & Design',
    client: 'Lasta Academics',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    tags: ['UI/UX Design', 'Landing Page', 'Figma Wireframing'],
    metrics: { label: 'User Signups Conversion', value: '+34%' },
    description: 'Designed a highly accessible, human-centric educational portal with step-by-step onboarding sequences, interactive navigation pathways, and fully custom UI assets.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'CEO & Founder',
    role: 'Founder & Visionary Leader',
    description: 'Leads overall company strategy and business development, cultivating a culture of high performance and creativity.',
    category: 'management',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-2',
    name: 'Marketing Manager',
    role: 'Director of Accounts & Campaigns',
    description: 'Oversees complex multi-channel marketing campaigns, ensuring client success, budget efficiency, and rich growth returns.',
    category: 'management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-3',
    name: 'Web Development Team',
    role: 'Lead Full-Stack Engineers',
    description: 'Builds secure, high-speed, and responsive websites and custom web applications utilizing cutting-edge web frameworks.',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-4',
    name: 'Graphic Design Team',
    role: 'Brand Directors & Illustrators',
    description: 'Creates stunning visual content, corporate branding systems, modern vector guidelines, and unique package designs.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-5',
    name: 'Content Creation Team',
    role: 'Creative Photographers & Videographers',
    description: 'Produces high-impact, story-driven commercial photos, promotional videos, social content, and professional copy.',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-6',
    name: 'SEO Specialists',
    role: 'Search Optimization Strategists',
    description: 'Improves algorithmic desktop & mobile search engine rankings, crawl health, and keyword topical authority.',
    category: 'seo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Siltawi helped us increase our online sales by 200% within six months.',
    author: 'Samrawit Bekele',
    role: 'Founder & Retail Director',
    company: 'Abyssinia Premium Brands',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    quote: 'Their website design and marketing services transformed our brand presence.',
    author: 'Tewodros Solomon',
    role: 'Co-Founder & CTO',
    company: 'Sheba Startups Inc.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    quote: 'The team at Siltawi delivered our company portal ahead of schedule. Their ongoing technical support, localized SEO strategy, and UI attention were truly outstanding.',
    author: 'Almaz Yilma',
    role: 'Executive Director',
    company: 'Lasta Educational Trust',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  }
];

export const STATISTICS: Statistic[] = [
  {
    id: 'stat-projects',
    label: 'Projects Completed',
    value: 100,
    suffix: '+',
    iconName: 'CheckCircle'
  },
  {
    id: 'stat-clients',
    label: 'Active Clients',
    value: 50,
    suffix: '+',
    iconName: 'Users'
  },
  {
    id: 'stat-team',
    label: 'Team Members',
    value: 15,
    suffix: '',
    iconName: 'Briefcase'
  },
  {
    id: 'stat-experience',
    label: 'Years of Experience',
    value: 3,
    suffix: '+',
    iconName: 'Award'
  },
  {
    id: 'stat-satisfaction',
    label: 'Client Satisfaction',
    value: 95,
    suffix: '%',
    iconName: 'Smile'
  }
];

export const CORE_VALUES = [
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries to build and implement top-tier digital marketing and tech trends.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Creativity',
    description: 'Designing outside traditional templates to construct memorable aesthetic assets.',
    iconName: 'Palette'
  },
  {
    title: 'Transparency',
    description: 'Providing honest schedules, transparent metrics reporting, and open feedback loops.',
    iconName: 'Eye'
  },
  {
    title: 'Excellence',
    description: 'Meticulously refining code, design assets, and marketing delivery to ensure high client satisfaction.',
    iconName: 'Crown'
  },
  {
    title: 'Customer Success',
    description: 'Aligning our digital actions with direct business growth metrics for startups and scale-ups.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Continuous Learning',
    description: 'Analyzing performance metrics and evolving dynamically with algorithm updates.',
    iconName: 'BookOpen'
  }
];
