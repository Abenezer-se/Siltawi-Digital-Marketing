import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Footer
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Our Team',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.getConnected': 'Get Connected',

    // Hero
    'hero.pretitle': 'SILTAWI MARKETING HUB',
    'hero.title1': 'Digital Growth',
    'hero.title2': 'ROI-Focused Brand Elevation',
    'hero.description': 'We combine advanced analytics engineering with bold, continuous visual designs to transform modern creative efforts.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',
    'hero.dragText': 'Drag or move mouse to swivel 3D Core',

    // About Section
    'about.subtitle': 'ABOUT OUR HUB',
    'about.title': 'Who We Are',
    'about.pretitle': 'About Our Agency',
    'about.maintitle': 'Empowering the Next Generation of African Enterprise',
    'about.description': 'Founded in 2023 in the heart of Addis Ababa, Siltawi Digital Marketing was built on the core belief that businesses thrive when armed with exceptional digital assets and analytical marketing. Today, we deliver holistic, world-class branding, tech engineering, and SEO strategies.',
    'about.missionTitle': 'Our Mission',
    'about.missionDesc': 'To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections. We bridge creative storytelling with robust data reporting to produce exceptional ROI.',
    'about.visionTitle': 'Our Vision',
    'about.visionDesc': 'To become one of Africa\'s leading digital marketing agencies by delivering highly creative, data-driven, and results-oriented digital solutions. We strive to be the standard of design craftsmanship and local business growth.',
    'about.targetPretitle': 'Our Target Industries',
    'about.targetTitle': 'Whom We Serve',
    'about.targetDesc': 'From micro-cafes to educational establishments, our bespoke structures deliver high visibility, organic engagement, and conversion optimization.',
    'about.coreValuesTitle': 'Our Core Values',
    'about.coreValuesSubtitle': 'The fundamental principles that guide our work, our corporate relationships, and our growth.',

    // About target Clients
    'target.smallbusinesses': 'Small Businesses',
    'target.startups': 'Startups',
    'target.restaurantscafes': 'Restaurants & Cafes',
    'target.educationalinstitutions': 'Educational Institutions',
    'target.realestatecompanies': 'Real Estate Companies',
    'target.ngos': 'NGOs',
    'target.healthcareproviders': 'Healthcare Providers',
    'target.ecommercebusinesses': 'E-commerce Businesses',

    // Core Values Details
    'value.innovation.title': 'Innovation',
    'value.innovation.desc': 'Continuously pushing boundaries to build and implement top-tier digital marketing and tech trends.',
    'value.creativity.title': 'Creativity',
    'value.creativity.desc': 'Designing outside traditional templates to construct memorable aesthetic assets.',
    'value.transparency.title': 'Transparency',
    'value.transparency.desc': 'Providing honest schedules, transparent metrics reporting, and open feedback loops.',
    'value.excellence.title': 'Excellence',
    'value.excellence.desc': 'Meticulously refining code, design assets, and marketing delivery to ensure high client satisfaction.',
    'value.customersuccess.title': 'Customer Success',
    'value.customersuccess.desc': 'Aligning our digital actions with direct business growth metrics for startups and scale-ups.',
    'value.continuouslearning.title': 'Continuous Learning',
    'value.continuouslearning.desc': 'Analyzing performance metrics and evolving dynamically with algorithm updates.',

    // Services Section
    'services.pretitle': 'Our Offerings',
    'services.title': 'High-Impact Multi-Channel Solutions',
    'services.subtitle': 'We deliver engineered, customized digital services designed to align directly with client objectives and expand market share.',
    'services.division': 'Expert Division',
    'services.included': 'Services Included:',
    'services.capabilities': 'Capabilities',

    // Services Details Data
    'service.digital-marketing.title': 'Digital Marketing',
    'service.digital-marketing.description': 'Grow your online presence with targeted digital advertising campaigns designed to generate leads and convert prospects.',
    'service.digital-marketing.bullet.0': 'Social Media Marketing',
    'service.digital-marketing.bullet.1': 'Facebook & Instagram Ads',
    'service.digital-marketing.bullet.2': 'Google Ads Management',
    'service.digital-marketing.bullet.3': 'Email Marketing Campaigns',
    'service.digital-marketing.bullet.4': 'Influencer Marketing',

    'service.website-development.title': 'Website Development',
    'service.website-development.description': 'Build fast, responsive, and secure custom websites tailored for businesses ranging from emerging startups to established enterprises.',
    'service.website-development.bullet.0': 'Company Profile Websites',
    'service.website-development.bullet.1': 'E-commerce Solutions',
    'service.website-development.bullet.2': 'High-converting Landing Pages',
    'service.website-development.bullet.3': 'Professional Portfolio Websites',
    'service.website-development.bullet.4': 'Comprehensive Website Maintenance',

    'service.branding-design.title': 'Branding & Design',
    'service.branding-design.description': 'Establish a powerful visual identity that captures your company and connects deeply with your target audience.',
    'service.branding-design.bullet.0': 'Custom Logo Design',
    'service.branding-design.bullet.1': 'Brand Identity Design',
    'service.branding-design.bullet.2': 'Corporate & Marketing Materials',
    'service.branding-design.bullet.3': 'Interactive UI/UX Design',

    'service.content-creation.title': 'Content Creation',
    'service.content-creation.description': 'Tell your brand story and capture attention with premium-quality visual and textual asset creation.',
    'service.content-creation.bullet.0': 'Engaging Social Media Content',
    'service.content-creation.bullet.1': 'Professional Video Production',
    'service.content-creation.bullet.2': 'High-end Corporate Photography',
    'service.content-creation.bullet.3': 'Persuasive Copywriting & Storytelling',

    'service.seo-services.title': 'SEO Services',
    'service.seo-services.description': 'Improve search engine rankings, drive high-quality organic traffic, and raise your brand visibility online.',
    'service.seo-services.bullet.0': 'Strategic On-Page SEO',
    'service.seo-services.bullet.1': 'Robust Technical SEO Audits',
    'service.seo-services.bullet.2': 'Targeted Local SEO optimization',
    'service.seo-services.bullet.3': 'Actionable SEO Competitor Audits',

    // Portfolio/Projects Section
    'portfolio.pretitle': 'Recent Projects',
    'portfolio.title': 'Our Digital Deliverables',
    'portfolio.subtitle': 'Explore a curated selection of our digital conversions, creative brand strategies, and high-performance codebases.',
    'portfolio.client': 'Client',
    'portfolio.caseDetails': 'Case details',
    'portfolio.year': 'Year',
    'portfolio.clientBusiness': 'Client Business',
    'portfolio.deployed': 'Services Deployed',
    'portfolio.results': 'Validated Results',
    'portfolio.done': 'Done Reading',
    'portfolio.successful': 'Delivered Successfully',

    // Projects Details Data
    'project.proj-1.title': 'Habesha Commerce Platform',
    'project.proj-1.category': 'Website Development',
    'project.proj-1.description': 'Designed and built a complete modern e-commerce company storefront with rapid page loads, localized payment flows, and highly intuitive administrative dashboards.',
    'project.proj-1.metricLabel': 'Online Sales Increase',
    'project.proj-2.title': 'Chala Coffee Rebrand & Launch',
    'project.proj-2.category': 'Branding & Design',
    'project.proj-2.description': 'Created an evocative, heritage-rich visual identity for a premium organic coffee brand, including detailed hand-crafted packaging, logo guidelines, and brand design guidelines.',
    'project.proj-2.metricLabel': 'Brand Awareness',
    'project.proj-3.title': 'Zemed Real Estate Marketing',
    'project.proj-3.category': 'Digital Marketing',
    'project.proj-3.description': 'Ran a highly strategic, localized social media advertising campaign aimed at high-intent property buyers, achieving premium quality lead acquisition with lower costs-per-lead.',
    'project.proj-3.metricLabel': 'Qualified Leads',
    'project.proj-4.title': 'Saba Fashion Promo Campaign',
    'project.proj-4.category': 'Content Creation',
    'project.proj-4.description': 'Produced a cohesive visual campaign including stunning 4K promotional reels, lifestyle photography, and compelling copy capturing the blend of heritage and modern fashion.',
    'project.proj-4.metricLabel': 'Video Views',
    'project.proj-5.title': 'Addis Travel SEO Domination',
    'project.proj-5.category': 'SEO Services',
    'project.proj-5.description': 'Executed technical SEO remediation, keyword architecture reconstruction, and targeted content clusters to achieve page-one rankings for premium national and local tour keywords.',
    'project.proj-5.metricLabel': 'Organic Traffic',
    'project.proj-6.title': 'Smart Learning Platform UI/UX',
    'project.proj-6.category': 'Branding & Design',
    'project.proj-6.description': 'Designed a highly accessible, human-centric educational portal with step-by-step onboarding sequences, interactive navigation pathways, and fully custom UI assets.',
    'project.proj-6.metricLabel': 'User Signups Conversion',

    // Team Section
    'team.pretitle': 'Our Organization',
    'team.title': 'Meet the Experts of Siltawi',
    'team.subtitle': 'Meet our multi-disciplinary talent divisions based in Addis Ababa, driving branding excellence and tech delivery.',
    'team.role.founder': 'Founder',
    'team.role.crew': 'Specialist Crew',
    'team.division': 'Division:',

    // Team members Data
    'team.team-1.name': 'CEO & Founder',
    'team.team-1.role': 'Founder & Visionary Leader',
    'team.team-1.desc': 'Leads overall company strategy and business development, cultivating a culture of high performance and creativity.',
    'team.team-2.name': 'Marketing Manager',
    'team.team-2.role': 'Director of Accounts & Campaigns',
    'team.team-2.desc': 'Oversees complex multi-channel marketing campaigns, ensuring client success, budget efficiency, and rich growth returns.',
    'team.team-3.name': 'Web Development Team',
    'team.team-3.role': 'Lead Full-Stack Engineers',
    'team.team-3.desc': 'Builds secure, high-speed, and responsive websites and custom web applications utilizing cutting-edge web frameworks.',
    'team.team-4.name': 'Graphic Design Team',
    'team.team-4.role': 'Brand Directors & Illustrators',
    'team.team-4.desc': 'Creates stunning visual content, corporate branding systems, modern vector guidelines, and unique package designs.',
    'team.team-5.name': 'Content Creation Team',
    'team.team-5.role': 'Creative Photographers & Videographers',
    'team.team-5.desc': 'Produces high-impact, story-driven commercial photos, promotional videos, social content, and professional copy.',
    'team.team-6.name': 'SEO Specialists',
    'team.team-6.role': 'Search Optimization Strategists',
    'team.team-6.desc': 'Improves algorithmic desktop & mobile search engine rankings, crawl health, and keyword topical authority.',

    // Testimonials
    'testimonials.pretitle': 'Success Stories',
    'testimonials.title': 'Loved by Fast-Growing Brands',
    'testimonials.subtitle': 'Read directly how our customized web builds, targeted advertising, and localized SEO conversions deliver remarkable growth.',

    // Testimonials Data
    'testimonial.test-1.quote': 'Siltawi helped us increase our online sales by 200% within six months.',
    'testimonial.test-2.quote': 'Their website design and marketing services transformed our brand presence.',
    'testimonial.test-3.quote': 'The team at Siltawi delivered our company portal ahead of schedule. Their ongoing technical support, localized SEO strategy, and UI attention were truly outstanding.',

    // Statistics
    'stat-projects': 'Projects Completed',
    'stat-clients': 'Active Clients',
    'stat-team': 'Team Members',
    'stat-experience': 'Years of Experience',
    'stat-satisfaction': 'Client Satisfaction',

    // FAQ Section
    'faq.pretitle': 'Support Hub & Intelligence',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got queries about our sessions, assignments, or workflows? We compiled everything right here so you can keep moving forward efficiently.',
    'faq.verifiedResponse': 'Instantly verified support response',
    'faq.unanswered': 'Have more unanswered prompts? No worries at all.',
    'faq.shootMessage': 'Shoot us a message directly',

    // FAQs Data
    'faq.q1': 'What does Siltawi do?',
    'faq.a1': 'Siltawi is a premium digital agency and learning academy. We deliver high-impact digital marketing strategies, ROI-focused brand growth strategies, social media elevation campaigns, and world-class digital skills coaching tailored to empower modern enterprises and creative individuals.',
    'faq.q2': 'Do you offer marketing services for businesses in Addis Ababa?',
    'faq.a2': 'Yes, we specialize in hyper-localized growth and audience targeting in Addis Ababa and across Ethiopia. We align modern global strategies with local market nuances to maximize conversion, engagement, and lasting customer retention.',
    'faq.q3': 'When does the live class start?',
    'faq.a3': 'We will post the live class schedule in the group one day in advance, so you can plan your time accordingly.',
    'faq.q4': 'Where do I submit the assignment?',
    'faq.a4': 'Please submit your assignment directly to @siltawi_support.',
    'faq.q5': 'What is the learning process?',
    'faq.a5': 'We will provide you with tasks and assignments to work on. Throughout the course, we will guide you and provide recorded video lessons that you can watch at any time.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s talk about your project and custom scaling requirements.',
    'contact.getInTouch': 'Get In Touch',
    'contact.scaleTitle': "Let's Scale Your Business",
    'contact.desc': 'Contact our office in Addis Ababa today. Have questions or ready to launch a project? Drop us a prompt line below!',
    'contact.infoTitle': 'Contact Information',
    'contact.infoDesc': "Connect directly with our division managers. We typically respond to new business inquiries within 12-24 business hours. Let's make something amazing.",
    'contact.emailUs': 'Email Us',
    'contact.callOffice': 'Call Our Office',
    'contact.location': 'Location',
    'contact.connectOnline': 'Connect Online',
    'contact.sendTitle': 'Send Us a Message',
    'contact.fullName': 'Full Name *',
    'contact.fullNamePlaceholder': 'Your Name',
    'contact.emailAddress': 'Email Address *',
    'contact.emailPlaceholder': 'you@company.com',
    'contact.phone': 'Phone (Optional)',
    'contact.phonePlaceholder': '+251 900 000 050',
    'contact.interest': 'Area of Interest',
    'contact.message': 'Your Message *',
    'contact.messagePlaceholder': 'Tell us about your project or company goal...',
    'contact.sending': 'Sending Message...',
    'contact.submit': 'Submit Brief',
    'contact.errName': 'Please enter your name.',
    'contact.errEmail': 'Please enter your email.',
    'contact.errEmailValid': 'Please provide a valid email address.',
    'contact.errMessage': 'Please type a message.',
    'contact.successTitle': 'Thank You! Message Received',
    'contact.successDesc': 'Our digital agency consulting crew based in Addis Ababa has received your prompt message. We will review it and follow up within 12-24 business hours.',
    'contact.sendAnother': 'Send Another Message'
  },
  am: {
    // Nav & Footer
    'nav.home': 'ዋና ገጽ',
    'nav.about': 'ስለ እኛ',
    'nav.services': 'አገልግሎቶች',
    'nav.portfolio': 'ስራዎች',
    'nav.team': 'ቡድናችን',
    'nav.testimonials': 'ምስክርነቶች',
    'nav.faq': 'ጥያቄና መልስ',
    'nav.contact': 'ያግኙን',
    'nav.getConnected': 'እንገናኝ',

    // Hero
    'hero.pretitle': 'የስልጣዊ ማርኬቲንግ ማዕከል',
    'hero.title1': 'ዲጂታል እድገት',
    'hero.title2': 'ኢንቨስትመንት ተመላሽ (ROI) ላይ ያተኮረ የምርት ስም ማሳደግ',
    'hero.description': 'ዘመናዊ የፈጠራ ጥረቶችን ለመለወጥ የላቀ የትንታኔ ኢንጂነሪንግን ከደማቅ እና ቀጣይነት ካለው የእይታ ዲዛይኖች ጋር እናጣምራለን።',
    'hero.getStarted': 'ይጀምሩ',
    'hero.learnMore': 'በለጠ ይወቁ',
    'hero.dragText': 'የ3ዲ ሞዴሉን ለማሽከርከር ማውዙን ይጎትቱ',

    // About Section
    'about.subtitle': 'ስለ ማዕከላችን',
    'about.title': 'እኛ ማን ነን',
    'about.pretitle': 'ስለ ኤጀንሲያችን',
    'about.maintitle': 'የሚቀጥለውን የጀማሪ ድርጅቶች ትውልድ ማብቃት',
    'about.description': 'በ2023 በአዲስ አበባ ልብ ውስጥ የተመሰረተው ስልጣዊ ዲጂታል ማርኬቲንግ፤ ድርጅቶች ልዩ ዲጂታል አገልግሎቶች ሲታጠቁ በላቀ ሁኔታ እንደሚያድጉ በማመን የተመሰረተ ነው። ዛሬ የምርት ስም (ብራንድ)፣ ቴክኖሎጂ እና የSEO ስትራቴጂዎችን እናቀርባለን።',
    'about.missionTitle': 'ራእያችን',
    'about.missionDesc': 'ለድርጅቶች እድገትን የሚሰጡ፣ የምርት ስም ታይነትን የሚጨምሩ እና ጥልቅ የደንበኞች ትስስር የሚፈጥሩ አዳዲስ ዲጂታል ማርኬቲንግ መፍትሄዎችን መስጠት።',
    'about.visionTitle': 'ግባችን',
    'about.visionDesc': 'ውጤት ወደ ተኮረ ዲጂታል መፍትሄ በመስጠት በአፍሪካ ቀዳሚ ዲጂታል ማርኬቲንግ ኤጀንሲ መሆን። በአገር ውስጥ እድገት ቀዳሚ ለመሆን እንጥራለን።',
    'about.targetPretitle': 'ትኩረት የምናደርግባቸው ዘርፎች',
    'about.targetTitle': 'ማንን እናገለግላለን',
    'about.targetDesc': 'ከካፌዎች ጀምሮ እስከ ትላልቅ የትምህርት ተቋማት ድረስ አገልግሎታችን ከፍተኛ ተደራሽነትን እና ደንበኞችን የመሳብ እድልን ያረጋግጣል።',
    'about.coreValuesTitle': 'ዋና እሴቶቻችን',
    'about.coreValuesSubtitle': 'አሰራራችንን፣ የንግድ ግንኙነታችንን እና እድገታችንን የሚመሩ መሰረታዊ መርሆች።',

    // About target Clients
    'target.smallbusinesses': 'አነስተኛ ንግዶች',
    'target.startups': 'አዳዲስ ጅማሪዎች',
    'target.restaurantscafes': 'ምግብ ቤቶችና ካፌዎች',
    'target.educationalinstitutions': 'የትምህርት ተቋማት',
    'target.realestatecompanies': 'የሪል እስቴት ኩባንያዎች',
    'target.ngos': 'መንግስታዊ ያልሆኑ ድርጅቶች (NGO)',
    'target.healthcareproviders': 'የጤና እንክብካቤ ድርጅቶች',
    'target.ecommercebusinesses': 'የኢ-ኮሜርስ ንግዶች',

    // Core Values Details
    'value.innovation.title': 'ፈጠራ እና አዳዲስ ሀሳቦች',
    'value.innovation.desc': 'ከፍተኛ የዲጂታል ማርኬቲንግ እና የቴክኖሎጂ አዝማሚያዎችን ተግባራዊ ለማድረግ ቀጣይነት ባለው መልኩ መስራት።',
    'value.creativity.title': 'የፈጠራ ችሎታ',
    'value.creativity.desc': 'ልዩ እና የሚታወሱ ይዘቶችን ለመፍጠር ከበፊት አሰራሮች ወጣ ያለ ንድፍ ማዘጋጀት።',
    'value.transparency.title': 'ግልጽነት',
    'value.transparency.desc': 'ታማኝ የጊዜ ሰሌዳዎችን፣ ግልጽ መረጃዎችን እና ክፍት የግብረ-መልስ ግንኙነቶችን ማቅረብ።',
    'value.excellence.title': 'የላቀ ጥራት',
    'value.excellence.desc': 'የደንበኞችን እርካታ ለማረጋገጥ ኮዶችን፣ ይዘቶችን እና ስርጭቶችን በጥንቃቄ ማሻሻል።',
    'value.customersuccess.title': 'የደንበኞች ስኬት',
    'value.customersuccess.desc': 'የዲጂታል ስራዎቻችንን ከጀማሪና በማደግ ላይ ካሉ ድርጅቶች ቀጥተኛ እድገት ጋር ማስተሳሰር።',
    'value.continuouslearning.title': 'ቀጣይነት ያለው ትምህርት',
    'value.continuouslearning.desc': 'የአፈጻጸም መለኪያዎችን መተንተን እና ከአዳዲስ የቴክኖሎጂ አሰራሮች ጋር አብሮ ማደግ።',

    // Services Section
    'services.pretitle': 'አገልግሎቶቻችን',
    'services.title': 'ከፍተኛ ተፅዕኖ ያላቸው ዘርፈ-ብዙ አገልግሎቶች',
    'services.subtitle': 'የደንበኞቻችንን ዓላማዎች ለማሳካት እና የገበያ ድርሻቸውን ለማስፋት የተነደፉ ልዩ ልዩ ዲጂታል አገልግሎቶችን እናቀርባለን።',
    'services.division': 'የባለሙያዎች ክፍል',
    'services.included': 'የሚካተቱ አገልግሎቶች፡',
    'services.capabilities': 'ችሎታዎች',

    // Services Details Data
    'service.digital-marketing.title': 'ዲጂታል ማርኬቲንግ',
    'service.digital-marketing.description': 'አዲስ ደንበኞችን ለማፍራት እና ሽያጭዎን ለማሳደግ ታቅደው በተዘጋጁ የዲጂታል ማስታወቂያ ዘመቻዎች የኦንላይን ተደራሽነትዎን ያሳድጉ።',
    'service.digital-marketing.bullet.0': 'የማህበራዊ ሚዲያ ማርኬቲንግ',
    'service.digital-marketing.bullet.1': 'የፌስቡክ እና ኢንስታግራም ማስታወቂያዎች',
    'service.digital-marketing.bullet.2': 'የጉግል ማስታወቂያዎች አስተዳደር',
    'service.digital-marketing.bullet.3': 'የኢሜል ማርኬቲንግ ዘመቻዎች',
    'service.digital-marketing.bullet.4': 'የኢንፍሉዌንሰር ማርኬቲንግ',

    'service.website-development.title': 'የዌብሳይት ልማት',
    'service.website-development.description': 'ለጀማሪ እስከ ትላልቅ ድርጅቶች የሚመጥኑ፣ ፈጣን፣ ደህንነታቸው የተጠበቀ የተሟሉ ዌብሳይቶችን እናዘጋጃለን።',
    'service.website-development.bullet.0': 'የድርጅት ማስተዋወቂያ ዌብሳይቶች',
    'service.website-development.bullet.1': 'የኢ-ኮሜርስ መገበያያ አማራጮች',
    'service.website-development.bullet.2': 'ደንበኛን የሚስቡ የማረፊያ ገጾች (Landing Pages)',
    'service.website-development.bullet.3': 'የማስተዋወቂያ (Portfolio) ዌብሳይቶች',
    'service.website-development.bullet.4': 'የዌብሳይት ጥገና እና ክትትል',

    'service.branding-design.title': 'ብራንዲንግ እና ዲዛይን',
    'service.branding-design.description': 'ድርጅትዎን በትክክል የሚገልጽ እና ከደንበኞችዎ ጋር ጥልቅ ትስስር የሚፈጥር ጠንካራ የምርት ስም (ብራንድ) መለያ ይፍጠሩ።',
    'service.branding-design.bullet.0': 'ልዩ የሎጎ ዲዛይን',
    'service.branding-design.bullet.1': 'የብራንድ መለያ ዲዛይን',
    'service.branding-design.bullet.2': 'የንግድና ማስተዋወቂያ ቁሳቁሶች',
    'service.branding-design.bullet.3': 'የተጠቃሚ ምቾት (UI/UX) ዲዛይን',

    'service.content-creation.title': 'የይዘት ፈጠራ',
    'service.content-creation.description': 'በጥራት በተዘጋጁ ምስሎች፣ ጽሑፎች እና ቪዲዮዎች የድርጅትዎን ታሪክ ውጤታማ በሆነ መንገድ ያስተዋውቁ።',
    'service.content-creation.bullet.0': 'ሳቢ የማህበራዊ ሚዲያ ይዘቶች',
    'service.content-creation.bullet.1': 'ባለሙያ የቪዲዮ ዝግጅት',
    'service.content-creation.bullet.2': 'የድርጅት ፎቶግራፍ',
    'service.content-creation.bullet.3': 'አሳማኝ የማስታወቂያ ጽሑፎችና ትረካዎች',

    'service.seo-services.title': 'የፍለጋ ሞተር ማጎልበት (SEO)',
    'service.seo-services.description': 'በጉግል ፍለጋ ላይ የላይኛው ረድፍ ላይ በመውጣት፣ ብዙ ደንበኞች በቀላሉ እንዲያገኟችሁ እና ታይነትዎን እንዲጨምሩ እናደርጋለን።',
    'service.seo-services.bullet.0': 'የይዘት ላይ (On-Page) SEO ማጎልበት',
    'service.seo-services.bullet.1': 'ቴክኒካዊ የዌብሳይት ቅኝት (SEO)',
    'service.seo-services.bullet.2': 'አካባቢያዊ የጉግል ፍለጋ ማጎልበት',
    'service.seo-services.bullet.3': 'የተፎካካሪዎች የSEO ትንተና',

    // Portfolio/Projects Section
    'portfolio.pretitle': 'በቅርብ የተሰሩ ስራዎች',
    'portfolio.title': 'የዲጂታል ውጤቶቻችን',
    'portfolio.subtitle': 'የሰራናቸውን ዲጂታል ማሻሻያዎች፣ የፈጠራ ስራዎች እና ከፍተኛ አፈጻጸም ያላቸውን የዌብሳይት ፕሮጀክቶችን ይመልከቱ።',
    'portfolio.client': 'ደንበኛ',
    'portfolio.caseDetails': 'ዝርዝር መረጃ',
    'portfolio.year': 'ዓ.ም',
    'portfolio.clientBusiness': 'የደንበኘው የስራ ዘርፍ',
    'portfolio.deployed': 'የቀረቡ አገልግሎቶች',
    'portfolio.results': 'የተረጋገጡ ውጤቶች',
    'portfolio.done': 'ጨርሻለሁ',
    'portfolio.successful': 'በስኬት ተጠናቋል',

    // Projects Details Data
    'project.proj-1.title': 'የሐበሻ መገበያያ ፕላትፎርም',
    'project.proj-1.category': 'የዌብሳይት ልማት',
    'project.proj-1.description': 'ፈጣን ገጾች፣ የአገር ውስጥ የመክፈያ መንገዶች እና ምቹ የአስተዳደር ሰሌዳዎችን ያካተተ ዘመናዊ የኢ-ኮሜርስ መገበያያ ድረ-ገጽ ዲዛይን ሰርተን ገንብተናል።',
    'project.proj-1.metricLabel': 'የኦንላይን ሽያጭ ጭማሪ',
    'project.proj-2.title': 'የጫላ ቡና አዲስ ብራንዲንግ',
    'project.proj-2.category': 'ብራንዲንግ እና ዲዛይን',
    'project.proj-2.description': 'ለላቀ የተፈጥሮ ቡና ምርት የባህል ቅርስነትን የሚያንፀባርቅ ማራኪ ብራንድ ፈጥረናል፤ ይህም እሽግ ዲዛይን፣ ሎጎ እና የብራንዲንግ መመሪያን ያካትታል።',
    'project.proj-2.metricLabel': 'የብራንድ ታዋቂነት',
    'project.proj-3.title': 'የዘመድ ሪል እስቴት ማርኬቲንግ',
    'project.proj-3.category': 'ዲጂታል ማርኬቲንግ',
    'project.proj-3.description': 'ቤት ለመግዛት ትኩረት ባላቸው ደንበኞች ላይ ያነጣጠረ ልዩ የማህበራዊ ሚዲያ ማስታወቂያ ዘመቻ አካሂደናል፤ ይህም በዝቅተኛ ወጪ ከፍተኛ ፍላጎት ያላቸውን ደንበኞች ማፍራት አስችሏል።',
    'project.proj-3.metricLabel': 'ብቁ ደንበኞች',
    'project.proj-4.title': 'የሳባ ፋሽን የማስተዋወቂያ ዘመቻ',
    'project.proj-4.category': 'የይዘት ፈጠራ',
    'project.proj-4.description': 'የባህልና የዘመናዊ ፋሽን ውህደትን የሚያሳይ የ4ኬ ማስተዋወቂያ ቪዲዮዎች፣ ፎቶግራፎች እና ማራኪ ፅሁፎችን ያካተተ ዘመቻ አዘጋጅተናል።',
    'project.proj-4.metricLabel': 'የቪዲዮ እይታዎች',
    'project.proj-5.title': 'የአዲስ የጉዞ SEO ማጎልበት',
    'project.proj-5.category': 'የፍለጋ ሞተር ማጎልበት',
    'project.proj-5.description': 'የጉብኝት ቁልፍ ቃላትን በጉግል ፍለጋ የመጀመሪያ ገጽ ላይ ለማውጣት የሚያስችል የቴክኒክ ጥገና እና ስትራቴጂያዊ የይዘት ስራዎችን ሰርተናል።',
    'project.proj-5.metricLabel': 'ኦርጋኒክ ጎብኝዎች',
    'project.proj-6.title': 'የስማርት ትምህርት ፕላትፎርም UI/UX',
    'project.proj-6.category': 'ብራንዲንግ እና ዲዛይን',
    'project.proj-6.description': 'ለተማሪዎች እጅግ ምቹ የሆነ፣ መማርን የሚያቀልጥ የትምህርት ድረ-ገጽ ዲዛይን ከሙሉ ዝርዝር ባህሪያት ጋር አዘጋጅተናል።',
    'project.proj-6.metricLabel': 'የተጠቃሚዎች ምዝገባ መጨመር',

    // Team Section
    'team.pretitle': 'ቡድናችን',
    'team.title': 'የስልጣዊ ባለሙያዎችን ያግኙ',
    'team.subtitle': 'በአዲስ አበባ የሚገኘውን፣ የድርጅታችንን እድገት እና የቴክኖሎጂ ስኬቶች የሚመራውን የባለሙያዎች ቡድናችንን ያግኙ።',
    'team.role.founder': 'መስራች',
    'team.role.crew': 'ልዩ ባለሙያ',
    'team.division': 'ክፍል፡',

    // Team members Data
    'team.team-1.name': 'ስራ አስኪያጅ እና መስራች',
    'team.team-1.role': 'መስራች እና አስተዋይ መሪ',
    'team.team-1.desc': 'የኩባንያውን አጠቃላይ ስትራቴጂ እና የንግድ ልማት ይመራል፤ ከፍተኛ አፈጻጸም እና የፈጠራ ባህልን ይገነባል።',
    'team.team-2.name': 'የማርኬቲንግ ስራ አስኪያጅ',
    'team.team-2.role': 'የማስታወቂያ ዘመቻዎች ዳይሬክተር',
    'team.team-2.desc': 'ደንበኞች ስኬታማ እንዲሆኑ እና በኢንቨስትመንታቸው የላቀ ውጤት እንዲያገኙ ዘመቻዎችን ይመራል።',
    'team.team-3.name': 'የዌብሳይት ልማት ቡድን',
    'team.team-3.role': 'ዋና ዌብሳይት አልሚዎች',
    'team.team-3.desc': 'ደህንነታቸው የተጠበቀ፣ ፈጣን እና ምቹ ዌብሳይቶችን እና የሞባይል መተግበሪያዎችን ይገነባል።',
    'team.team-4.name': 'የግራፊክ ዲዛይን ቡድን',
    'team.team-4.role': 'የብራንድ ዳይሬክተሮች እና ዲዛይነሮች',
    'team.team-4.desc': 'ማራኪ ምስሎችን፣ ልዩ የድርጅት ብራንድ መለያዎችን፣ ሎጎዎችን እና እሽግ ዲዛይኖችን ያዘጋጃል።',
    'team.team-5.name': 'የይዘት ፈጠራ ቡድን',
    'team.team-5.role': 'ፈጣሪ ፎቶግራፍ እና ቪዲዮ አንሺዎች',
    'team.team-5.desc': 'ታሪክን በአይነቱ ገላጭ በሆነ መንገድ የሚያስተላልፉ ፎቶዎችን፣ ማስታወቂያ ቪዲዮዎችን እና ጽሁፎችን ያዘጋጃል።',
    'team.team-6.name': 'የSEO ባለሙያዎች',
    'team.team-6.role': 'የፍለጋ ሞተር ስልት አውጪዎች',
    'team.team-6.desc': 'የድርጅቶች ድረ-ገጾች በጉግል ፍለጋ ላይ በቀዳሚነት እንዲቀመጡ ያደርጋል።',

    // Testimonials
    'testimonials.pretitle': 'የስኬት ታሪኮች',
    'testimonials.title': 'በድርጅቶች የተወደደ እና የተመሰከረለት',
    'testimonials.subtitle': 'የሰራናቸው ዌብሳይቶች፣ ማስታወቂያዎች እና የSEO ስራዎች ለድርጅቶች ምን ያህል አስደናቂ እድገት እንዳመጡ ይመልከቱ።',

    // Testimonials Data
    'testimonial.test-1.quote': 'ስልጣዊ በስድስት ወራት ውስጥ የኦንላይን ሽያጫችን በ200% እንዲጨምር ረድቶናል።',
    'testimonial.test-2.quote': 'የዌብሳይት ዲዛይን እና የማርኬቲንግ አገልግሎታቸው የድርጅታችንን ታይነት ሙሉ በሙሉ ቀይሮታል።',
    'testimonial.test-3.quote': 'ጥራት ያለው ዌብሳይታችንን ከቀጠሮው በፊት አስረክበውናል። ቀጣይነት ያለው ድጋፋቸው፣ አካባቢያዊ የSEO ዝግጅታቸው እና የዲዛይን ጥራታቸው እጅግ በጣም ጥሩ ነበር።',

    // Statistics
    'stat-projects': 'የተጠናቀቁ ፕሮጀክቶች',
    'stat-clients': 'ንቁ ደንበኞች',
    'stat-team': 'የቡድን አባላት',
    'stat-experience': 'የስራ ልምድ (ዓመታት)',
    'stat-satisfaction': 'የደንበኞች እርካታ',

    // FAQ Section
    'faq.pretitle': 'የድጋፍ ማዕከል እና መረጃ',
    'faq.title': 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
    'faq.subtitle': 'ስለ ትምህርቶቻችን፣ ስለ ፈተናዎች ወይም ስለ አሰራሮች ጥያቄዎች አሉዎት? ያለ ምንም እንከን ወደፊት እንዲራመዱ ሁሉንም እዚህ ሰብስበናል።',
    'faq.verifiedResponse': 'በእውነተኛ ሰዓት የተረጋገጠ መልስ',
    'faq.unanswered': 'ሌሎች ያልተመለሱ ጥያቄዎች አሉዎት? ምንም አይጨነቁ።',
    'faq.shootMessage': 'በቀጥታ መልዕክት ይላኩልን',

    // FAQs Data
    'faq.q1': 'ስልጣዊ ምንድን ነው የሚሰራው?',
    'faq.a1': 'ስልጣዊ እውቅና ያለው ዲጂታል ኤጀንሲ እና የስልጠና አካዳሚ ነው። ከፍተኛ ተጽዕኖ ፈጣሪ ዲጂታል ማርኬቲንግ፣ ኢንቨስትመንት ተመላሽ (ROI) ላይ ያተኮረ የምርት ስም እድገት፣ ማህበራዊ ሚዲያ ማሳደግ እና የላቀ የዲጂታል ክህሎቶች ስልጠና ለዘመናዊ ድርጅቶች እና የፈጠራ ስራ ፈጣሪዎች እናቀርባለን።',
    'faq.q2': 'በአዲስ አበባ ላሉ ድርጅቶች የማርኬቲንግ አገልግሎት ትሰጣላችሁ?',
    'faq.a2': 'አዎ፣ በአዲስ አበባ እና በመላው ኢትዮጵያ ውስጥ ባሉ አካባቢያዊ እድገቶች እና ደንበኞችን የመሳብ ስራዎች ላይ ልዩ ትኩረት ሰጥተን እንሰራለን። ቀጣይነት ያለው የደንበኞች እርካታን ለማረጋገጥ ዘመናዊ ዓለም አቀፍ ስልቶችን ከአገር ውስጥ ገበያ ሁኔታዎች ጋር እናስማማለን።',
    'faq.q3': 'የቀጥታ (Live) ክፍሉ መቼ ይጀምራል?',
    'faq.a3': 'የቀጥታ ክፍሉን የጊዜ ሰሌዳ ከአንድ ቀን በፊት በግሩፕ ውስጥ ስለምንለጥፍ ጊዜዎን አስቀድመው ማቀድ ይችላሉ።',
    'faq.q4': 'የተሰጡኝን ስራዎች (Assignments) የት ነው የማስረክበው?',
    'faq.a4': 'እባክዎን የተሰጡዎትን ስራዎች በቀጥታ ለ @siltawi_support ያስረክቡ።',
    'faq.q5': 'የመማር ሂደቱ እንዴት ነው?',
    'faq.a5': 'እኛ የሚሰሩ ተግባራዊ ስራዎችን እና የስልጠና ልምምዶችን እንሰጥዎታለን። በኮርሱ ሂደት ውስጥ ሁሉ መመሪያ የምንሰጥዎት ሲሆን በማንኛውም ጊዜ ሊመለከቷቸው የሚችሏቸውን የተቀረጹ የቪዲዮ ትምህርቶች እናዘጋጅልዎታለን።',

    // Contact
    'contact.title': 'ያግኙን',
    'contact.subtitle': 'ስለ ፕሮጀክትዎ እና ስለ ድርጅትዎ እድገት በጋራ እንወያይ።',
    'contact.getInTouch': 'ያግኙን',
    'contact.scaleTitle': 'ድርጅትዎን በጋራ እናሳድገው',
    'contact.desc': 'ዛሬውኑ በአዲስ አበባ የሚገኘውን ቢሯችንን ያነጋግሩ። ጥያቄዎች ካሉዎት ወይም ፕሮጀክት ለመጀመር ከተዘጋጁ ከታች ባለው ቅጽ መልዕክት ይላኩልን!',
    'contact.infoTitle': 'የእውቂያ መረጃ',
    'contact.infoDesc': 'ከስራ አስኪያጆቻችን ጋር በቀጥታ ይገናኙ። ለንግድ ጥያቄዎች አብዛኛውን ጊዜ ከ12-24 የስራ ሰዓታት ውስጥ ምላሽ እንሰጣለን። አብረን አስደናቂ ስራ እንስራ።',
    'contact.emailUs': 'ኢሜል ይላኩልን',
    'contact.callOffice': 'ቢሯችንን ይደውሉ',
    'contact.location': 'አድራሻ',
    'contact.connectOnline': 'የማህበራዊ ሚዲያ ትስስር',
    'contact.sendTitle': 'መልዕክት ይላኩልን',
    'contact.fullName': 'ሙሉ ስም *',
    'contact.fullNamePlaceholder': 'የእርስዎ ስም',
    'contact.emailAddress': 'የኢሜል አድራሻ *',
    'contact.emailPlaceholder': 'you@company.com',
    'contact.phone': 'ስልክ (አማራጭ)',
    'contact.phonePlaceholder': '+251 900 000 050',
    'contact.interest': 'የሚፈልጉት የሙያ ዘርፍ',
    'contact.message': 'መልዕክትዎ *',
    'contact.messagePlaceholder': 'ስለ ፕሮጀክትዎ ወይም ስለ ድርጅትዎ አላማ ይንገሩን...',
    'contact.sending': 'በመላክ ላይ...',
    'contact.submit': 'መልዕክቱን ላክ',
    'contact.errName': 'እባክዎን ስምዎን ያስገቡ።',
    'contact.errEmail': 'እባክዎን የኢሜል አድራሻዎን ያስገቡ።',
    'contact.errEmailValid': 'እባክዎን ትክክለኛ የኢሜል አድራሻ ያስገቡ።',
    'contact.errMessage': 'እባክዎን መልዕክትዎን ይጻፉ።',
    'contact.successTitle': 'እናመሰግናለን! መልዕክትዎ ደርሶናል',
    'contact.successDesc': 'በአዲስ አበባ የሚገኘው የዲጂታል ኤጀንሲ የማማከር ቡድናችን መልዕክትዎን ተቀብሏል። በጥንቃቄ ተመልክተን ከ12-24 ባሉ የስራ ሰዓታት ውስጥ እናገኝዎታለን።',
    'contact.sendAnother': 'ሌላ መልዕክት ይላኩ'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('siltawi_lang');
    return (saved === 'am' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('siltawi_lang', lang);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
