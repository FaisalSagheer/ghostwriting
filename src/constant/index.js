import {
  Globe,
  CircleDollarSign,
  DollarSignIcon,
  Image,
  Pencil,
  ShieldCheckGlobe,
  Target,
  Heart,
  Award,
  Zap,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Dumbbell,
  Users,
  Clock,
  Star,
  Crown,
  Mail,
  Phone,
  MapPin,
  Pause,
  Play,
  PlayCircle,
  AppWindow,
  MessagesSquare,
  ShieldCheck,
  Album,
  Briefcase,
  Box,
} from "lucide-react";

export const navItems = [
  // {
  //   title: "Services",
  //   href: "/services",
  // },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export const Testimonial = [
  {
    description: `
      Helped me build my business from the ground up! 
      The whold team is extremely supportive and communicative. 
      Would recommed all solo entrepreneurs to work with them!`,
    Name: 'Rebbeca Love'
  },
  {
    description: `
      Helped me bring my book to life! 
      could not ask for a better team to publish my book!`,
    Name: 'Will Nelson'
  },
  {
    description: `
      Three lines of Zaila, my book gained all its 
      fame through their marketing strategies. 
      Beyond satisfied `,
    Name: 'Andrew'
  },
  // {
  //   description:'My home-cook business is set! thank you Digital Alchemy!',
  //   Name:'Neikeisha '
  // }
];
export const footerLinks = {
  "Quick Links": [
    "Home",
    "About",
    "Services",
    "Trainers",
    "Pricing",
    "Contact",
  ],
  Services: [
    "Personal Training",
    "Group Classes",
    "Nutrition Coaching",
    "Online Training",
    "Corporate Wellness",
  ],
  Support: [
    "Help Center",
    "Membership Portal",
    "Schedule",
    "Mobile App",
    "Community Forum",
  ],
};

export const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];
// Why Choose Us? Section In About Us Page
export const ChooseUsContent = [
  {
    title: " Excellence at Every Step",
    description:
      " We hold ourselves to the highest standards, delivering professional-grade solutions that balance creativity with strategy.",
    // preDescription: "We believe every author deserves access to expert guidance and exceptional quality, making your publishing dream both achievable and affordable."
  },
  {
    title: "Tailored to Your Vision",
    description:
      "No two clients are the same. That’s why we design personalized strategies that align with your goals, voice, and brand identity.",
    // preDescription: "They bring their passion and deep market knowledge to ensure your book resonates with its intended audience."
  },
  {
    title: "Affordability Without Sacrifice",
    description:
      "We believe great services should be accessible. Our pricing is transparent and fair, ensuring you get exceptional value without compromise.",
    // preDescription: "Our goal is to deliver a final product that you're truly proud of."
  },
  {
    title: "Proven Track Record",
    description:
      "Since 2020, we’ve guided aspiring authors, small businesses, and established brands toward measurable success and lasting growth.",
  },
  {
    title: "A Partner You Can Trust",
    description:
      "Your success is our success, and we stand by you every step of the way.",
  },
];
export const FaqContent = [
  {
    value: "item-1",
    title: "What if I’m not sure what service I need?*",
    description:
      "Not a problem! Our specialists can assist you in structuring everything through our consultation call. Here, at Digital Alchemy, we aim to assist you every step of the way."
  },
  {
    value: "item-2",
    title: "Can you help me develop an idea into a full business plan?",
    description:
      "100!We specialize in turning ideas into actionable, investor-ready business plans with market analysis, financial projections, and branding direction."
  },
  {
    value: "item-3",
    title: "Do you sign NDAs?",
    description:
      "Absolutely. Confidentiality is a core part of our process. Every client project remains private unless you authorize us to showcase it."
  },
  {
    value: "item-4",
    title: "How do we get started?",
    description:
      "Simply fill out our contact form or book a free consultation call. We’ll discuss your needs and provide a tailored proposal or quote within 48 hours."
  },
  {
    value: "item-5",
    title: "Do you offer revisions?",
    description:
      "Yes. Each package includes a set number of revision rounds to ensure your satisfaction. Additional edits can be arranged if needed."
  },
  {
    value: "item-6",
    title: "What’s your process like?",
    description:
      `Our standard process includes:

1. Consultation Call: Understanding your goals and challenges.
2.  Strategy Phase: Research, ideation, and planning.
3. Creation & Execution: Delivering creative or business solutions.
4. Revision & Delivery: Final adjustments and handover.
5. Ongoing Support (optional): Continued optimization and guidance.
`
  },
  {
    value: "item-7",
    title: "Do you work with international clients?",
    description:
      "Yes,  we work globally. We have an in-house and virtual team that is allotted to you, depending upon your needs and services."
  },
  {
    value: "item-8",
    title: "Do I have to pay up front?",
    description:
      "Yes. Your designated team of experts is paid per project, but we do offer payment plans that break down your services into milestones, providing you with everything you need without affecting quality."
  },
];

// About Us Page Content
export const AboutHeroContent = [
  {
    subTitle: "Alchemy",
    title: "The All-Rounder You Need",
    description:
      "Since 2020, Digital Alchemy has been the trusted partner for authors, entrepreneurs, and businesses seeking top-quality solutions with affordable pricing. Consider us as collaborators, problem-solvers, and growth enablers. Our mission is to bridge the gap between ambition and achievement. Whether it’s helping aspiring authors bring their stories to life or guiding businesses in building a stronger digital presence.",
    href1: "/services",
    href2: "/about",
    button1: "Services",
    button2: "About",
    className: "text-5xl lg:text-7xl",
  },
];
export const about_contact = [
  {
    title: "Ready to start your journey",
    // description:
    //   "Let's transform your writing dreams into published reality today.",
    button1: "Start",
    button2: "Consult",
    bg_color: "bg-primary-foreground",
  },
];
// Publishing Page Content
export const publishingContent = [
  {
    subTitle: "Alchemy",
    title: "Publish your story",
    description:
      "Transform your manuscript from a raw idea into a professionally published e-book with expert guidance and comprehensive publishing support.",
    href1: "/services",
    href2: "/about",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl",
  },
];
export const PublishingProcess = [
  {
    cardTag: "Formating",
    cardTitle: "Professional manuscript formatting for seamless reading",
    cardDescrption:
      "We ensure your manuscript is perfectly formatted for all e-book platforms. Our experts optimize layout, typography, and file compatibility.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
  {
    cardTag: "Design",
    cardTitle: "Professional manuscript formatting for seamless reading",
    cardDescrption:
      "We ensure your manuscript is perfectly formatted for all e-book platforms. Our experts optimize layout, typography, and file compatibility.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
  {
    cardTag: "Distribution",
    cardTitle: "Professional manuscript formatting for seamless reading",
    cardDescrption:
      "We ensure your manuscript is perfectly formatted for all e-book platforms. Our experts optimize layout, typography, and file compatibility.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
];
export const PublishinContact = [
  {
    title: "Ready to bring your book to life",
    description:
      "Start your publishing journey with Digital Alchemy and turn your manuscript into a professional e-book.",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-secondary-foreground",
  },
];
export const servicesContent = [
  {
    tag: "Tagline",
    title: "Book Publishing Services",
    description:
      "Our publishing services guide you through the complex world of getting your book into the hands of readers.",
    className: "bg-background",
  },
];

export const servicesPublishing = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Editing",
    description:
      "Perfect your book's structure, correctness, and Flow with our book editing services.",
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "eBook Publishing",
    description:
      "Navigate the process for Amazon direct publishing and of other platforms with ease.",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Designing",
    description:
      "Create eye-catching book layouts and covers that draw readers in and reflect your style.",
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "Book Proofreading",
    description:
      "Polish your manuscript to perfection with our meticulous book editing services. ",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Formatting",
    description:
      "Shape and structure your book according to publishing standards with our book formatting services. ",
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "Book Consulting",
    description:
      " Get guidance and feedback on your book idea, writing, marketing, and publishing process.",
    className: "hidden",
  },
];

// Marketing Page Content
export const MarketingHeroContent = [
  {
    subTitle: "Amlify",
    title: "Market Your Book",
    description:
      "Transform your e-book potentianl with strategic marketing that connects your story to readers woldwide",
    href1: "",
    href2: "",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl",
  },
];

export const MarketingProcess = [
  {
    id: 'Social Media',
    cardTag: "Social Media",
    cardTitle: "Targeted social media marketing for maximum exposure",
    cardDescrption:
      "Leverage platforms like Instagram. Twitter, and Facebook to create buzz and engage potential readers directly.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
  {
    id: 'Email Campaigns',
    cardTag: "Email Campaigns",
    cardTitle: "Targeted social media marketing for maximum exposure",
    cardDescrption:
      "Leverage platforms like Instagram. Twitter, and Facebook to create buzz and engage potential readers directly.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
  {
    id: 'Influencer Reach',
    cardTag: "Influencer Reach",
    cardTitle: "Targeted social media marketing for maximum exposure",
    cardDescrption:
      "Leverage platforms like Instagram. Twitter, and Facebook to create buzz and engage potential readers directly.",
    cardButton1: "Learn",
    cardButton2: "More",
  },
];

export const MarketingServicesContent = [
  {
    // tag: "Tagline",
    title: "Book Marketing Services",
    description:
      "Our book marketing and promotion services help you get more eyes on your work.",
    className: "bg-background",
  },
];

export const servicesMarketing = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: "Book Marketing",
    description:
      "Promote your book effectively with tailored marketing strategies to reach your target audience.",
  },
  {
    icon: <PlayCircle size={60} />,
    title: "Book Trailer",
    description: "Creating compelling video content to promote your books..",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: `Book Launch 
    Strategy`,
    description:
      "Comprehensive planning and execution for your book's release.",
    className: "mb-auto",
  },
  {
    icon: <AppWindow size={60} />,
    title: "Website Design",
    description:
      "Design a powerful author webs'te to engage your readers and build your brand. ",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: "Website Copywriting",
    description:
      "Make a lasting impression with webcopies that engage visitors and boosts conversions.",
  },
  {
    icon: <MessagesSquare size={60} />,
    title: "Blog Writing",
    description:
      " Boost your online presence with engaging, SE0- optimized blogcontent.",
    className: "hidden",
  },
];
export const MarketingContact = [
  {
    title: "Ready to Elevate Your Book",
    description:
      "Let's create a personalized marketing strategy that transform's your book's potential into real-world success",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-background",
  },
];

// GhostWriting

export const GhostWritingHero = [
  {
    subTitle: "Transform",
    title: "Your Story Matters",
    description:
      "Professional ghostwriting services that turn your unique ideas into compelling, polished books ready to captivate",
    href1: "",
    href2: "",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl",
  },
];

export const cardBenefit = [
  {
    icon: <ShieldCheck size={50} />,
    title: "Professional Writers",
    description: `
      Boost your credibility with a professional written book
      that establishes authority`,
  },
  {
    icon: <CircleDollarSign size={50} />,
    title: "Passive Income",
    description: `
      Generate a passive income stream and make your mark 
      on Amazon by reaching readers worldwide.`,
  },
  {
    icon: <Pencil size={50} />,
    title: "Personalized Service",
    description: `
      Reclaim your creative freedom by focusing on your ideas and 
      letting us handle writing and publishing.`,
  },
];

export const GhostwritingServicesContent = [
  {
    tag: "Tagline",
    title: "Our Best GhostWriting Services",
    description:
      "We provide tailored writin services to help you shape your narrative at every step of your journey",
  },
];
export const servicesGhostwriting = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: "Fictional Book Writing",
    description:
      "Bring your imaginative stories to life with expert fiction ghostwriting.",
  },
  {
    icon: <Album size={60} />,
    title: "Autobiography",
    description:
      "Share your life story with authenticity and depth to resonate with readers",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: `Childrens Book`,
    description:
      "Engage young readers with enchanting tales and characters that spark their imagination.",
    className: "mb-auto",
  },
  {
    icon: <Briefcase size={60} />,
    title: "Business Book Writing",
    description:
      "Establish your thought leadership with books that share your expertise and vision. ",
    className: "hidden",
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: "Non-Fiction Writing",
    description:
      "Transform your ideas into compelling non-fiction that informs and inspires.",
  },
  {
    icon: <Box size={60} />,
    tag: "Tagline",
    title: "ScriptWriting",
    description:
      "Bring your story to the big screen with engaging scripts for film, television, or theater.",
    className: "hidden",
  },
];

export const GhostWritingContact = [
  {
    title: "Ready to start Your writing journey",
    description:
      "Connect with our expert team and transform your ideas into a compelling manuscritp.",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-background",
  },
];

// Contact
export const ContactHero = [
  {
    subTitle: "Connect",
    title: "Get Free Consultation",
    description:
      "Transform your book idea into a published masterpiece with our expert publishing support.",
    href1: "",
    href2: "",
    button1: "Start",
    button2: "Learn",
    className: "text-6xl",
  },
];
