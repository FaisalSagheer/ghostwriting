import { Globe, CircleDollarSign, DollarSignIcon, Image, Pencil, ShieldCheckGlobe, Target, Heart, Award, Zap, Facebook, Instagram, Twitter, Youtube, Dumbbell, Users, Clock, Star, Crown, Mail, Phone, MapPin, Pause, Play, PlayCircle, AppWindow, MessagesSquare, ShieldCheck, Album, Briefcase, Box } from 'lucide-react';

export const navItems = [
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  }
]
export const cardData = [
  {
    description: `
      Undiscovered authors with unique ideas they 
      want to see in print.`,
  },
  {
    description: `
      Entreprenures or thought leaders needing a 
      professional book to boast credibility.`,
  },
  {
    description: `
      Aspiring thoughts targeting Amazon for side 
      income or brand building.`,
  },
];
export const footerLinks = {
  'Quick Links': ['Home', 'About', 'Services', 'Trainers', 'Pricing', 'Contact'],
  'Services': ['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Online Training', 'Corporate Wellness'],
  'Support': ['Help Center', 'Membership Portal', 'Schedule', 'Mobile App', 'Community Forum']
};

export const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export const ChooseUsContent = [
  {
    title: "Expert Work Without the Hefty Price Tag",
    description: "Receive top-tier, professional publishing services without the premium cost.",
    preDescription: "We believe every author deserves access to expert guidance and exceptional quality, making your publishing dream both achievable and affordable."
  },
  {
    title: "A Team of Passionate Genre Specialists",
    description: "Your book isn't just another project. Our team is comprised of editors, designers, and marketers who are genuine enthusiasts of your genre.",
    preDescription: "They bring their passion and deep market knowledge to ensure your book resonates with its intended audience."
  },
  {
    title: "Tailored Guidance Every Step of the Way",
    description: "We work alongside you, not just for you. From the first draft to the final proof, we provide continuous support, feedback, and polishing to refine your manuscript and strategy.",
    preDescription: "Our goal is to deliver a final product that you're truly proud of."
  },
]
export const FaqContent = [
  {
    title: "What if I've already written most of the book?",
    description: "That's great! We can help you refine your existing work, whether it's through editing, additional writing to complete the narrative, or formatting it for publication."
  },
  {
    title: "How does the ghostwriting process work?",
    description: "We start with a discovery session to understand your vision, ideas, and goals. From there, we'll outline the book, draft sections, and provide opportunities for your feedback."
  },
  {
    title: "How long does the writing process take? ",
    description: "The timeline depends on the scope of your project. After our initial consultation, we can provide a more accurate estimate based on your specific needs. Our goal is to deliver quality work within a timeframe that suits you.."
  },
  {
    title: "What if I don't have a clear idea yet? ",
    description: "No worries! Many of our clients come to us with just a concept or a rough Idea. Our team can help brainstorm and develop your thoughts into a structured outline, turning your vision into a cohesive narrative."
  },
  {
    title: "What if I need to make changes during the process? ",
    description: "We encourage open communication! If you want to make changes or have new ideas, just let us know. We want to ensure you're completely satisfied with the final product."
  },
  {
    title: "Do you offer affordable ghostwriting services for new authors? ",
    description: "Of course! We specifically design our packages to be accessible for new and Male authors. Depending on your budget and required level of service, we'll create personalized pricing for you."
  },
]

export const AboutContent = [
  {
    subTitle: "Alchemy",
    title: "Turn Fleeting Ideas Into Bestsellers with Expert Ghostwriting Services & Publishing Support",
    description: "From ghostwriting and editing to publishing guidance, USK Publishing helps bring your book to life. Whether you have an idea, a rough draft, or just the desire to publish, we handle every step.",
    href1: "/services",
    href2: "/about",
    button1: "Services",
    button2: "About",
    className: "text-5xl"
  }
]
export const about_contact = [
  {
    title: "Ready to start your journey",
    description: "Let's transform your writing dreams into published reality today.",
    button1: "Start",
    button2: "Consult",
    bg_color: "bg-primary-foreground"
  }
]
// Publishing Page Content
export const publishingContent = [
  {
    subTitle: "Alchemy",
    title: "Publish your story",
    description: "Transform your manuscript from a raw idea into a professionally published e-book with expert guidance and comprehensive publishing support.",
    href1: "/services",
    href2: "/about",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl"
  }
]
export const PublishingProcess = [
  {
    tag: "Craft",
    title: "Publishing Made Simple",
    description: "We handle every detail of your book's journey from manuscript to market. Our comprehensive publishing process ensures your work meets professional standards.",
    button1: "Explore",
    button2: "Details",
    head1: "Formating",
    head2: "Design",
    head3: "Distribution",
    cardTag: "Formating",
    cardTitle: "Professional manuscript formatting for seamless reading",
    cardDescrption: "We ensure your manuscript is perfectly formatted for all e-book platforms. Our experts optimize layout, typography, and file compatibility.",
    cardButton1: "Learn",
    cardButton2: "More",
  }
]
export const PublishinContact = [
  {
    title: "Ready to bring your book to life",
    description: "Start your publishing journey with Digital Alchemy and turn your manuscript into a professional e-book.",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-secondary-foreground"
  }
]
export const servicesContent =
  [{
    tag: "Tagline",
    title: "Book Publishing Services",
    description: "Our publishing services guide you through the complex world of getting your book into the hands of readers.",
    className: "bg-background"
  }
  ]

export const servicesPublishing = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Editing",
    description: "Perfect your book's structure, correctness, and Flow with our book editing services."
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "eBook Publishing",
    description: "Navigate the process for Amazon direct publishing and of other platforms with ease.",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Designing",
    description: "Create eye-catching book layouts and covers that draw readers in and reflect your style."
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "Book Proofreading",
    description: "Polish your manuscript to perfection with our meticulous book editing services. ",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    subtitle: "Tagline",
    title: "Book Formatting",
    description: "Shape and structure your book according to publishing standards with our book formatting services. "
  },
  {
    icon: <Globe size={60} />,
    subtitle: "Tagline",
    title: "Book Consulting",
    description: " Get guidance and feedback on your book idea, writing, marketing, and publishing process.",
    className: "hidden"
  },

]

// Marketing Page Content
export const MarketingHeroContent = [
  {
    subTitle: "Amlify",
    title: "Market Your Book",
    description: "Transform your e-book potentianl with strategic marketing that connects your story to readers woldwide",
    href1: "",
    href2: "",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl"
  }
]

export const MarketingProcess = [
  {
    tag: "Strategies",
    title: "Comprehensive marketing approach",
    description: "Navigate the complex world of book marketing with our targeted strategies. We create customized campaigns that elevate your book's visibility and reach.",
    button1: "Explore",
    button2: "Details",
    head1: "Social Media",
    head2: "Email Campaigns",
    head3: "Influencer Reach",
    cardTag: "Social Media",
    cardTitle: "Targeted social media marketing for maximum exposure",
    cardDescrption: "Leverage platforms like Instagram. Twitter, and Facebook to create buzz and engage potential readers directly.",
    cardButton1: "Learn",
    cardButton2: "More",
  }
]


export const MarketingServicesContent =
  [{
    // tag: "Tagline",
    title: "Book Marketing Services",
    description: "Our book marketing and promotion services help you get more eyes on your work.",
    className: "bg-background"
  }
  ]

export const servicesMarketing = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: "Book Marketing",
    description: "Promote your book effectively with tailored marketing strategies to reach your target audience.",
  },
  {
    icon: <PlayCircle size={60} />,
    title: "Book Trailer",
    description: "Creating compelling video content to promote your books..",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: `Book Launch 
    Strategy`,
    description: "Comprehensive planning and execution for your book's release.",
    className: "mb-auto"
  },
  {
    icon: <AppWindow size={60} />,
    title: "Website Design",
    description: "Design a powerful author webs'te to engage your readers and build your brand. ",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    title: "Website Copywriting",
    description: "Make a lasting impression with webcopies that engage visitors and boosts conversions."
  },
  {
    icon: <MessagesSquare size={60} />,
    title: "Blog Writing",
    description: " Boost your online presence with engaging, SE0- optimized blogcontent.",
    className: "hidden"
  },

]
export const MarketingContact = [
  {
    title: "Ready to Elevate Your Book",
    description: "Let's create a personalized marketing strategy that transform's your book's potential into real-world success",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-background"
  }
]

// GhostWriting

export const GhostWritingHero = [
  {
    subTitle: "Transform",
    title: "Your Story Matters",
    description: "Professional ghostwriting services that turn your unique ideas into compelling, polished books ready to captivate",
    href1: "",
    href2: "",
    button1: "Start",
    button2: "Learn",
    className: "text-7xl"
  }
]

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


export const GhostwritingServicesContent =
  [{
    tag: "Tagline",
    title: "Our Best GhostWriting Services",
    description: "We provide tailored writin services to help you shape your narrative at every step of your journey",
  }
  ]
export const servicesGhostwriting = [
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: "Fictional Book Writing",
    description: "Bring your imaginative stories to life with expert fiction ghostwriting.",
  },
  {
    icon: <Album size={60} />,
    title: "Autobiography",
    description: "Share your life story with authenticity and depth to resonate with readers",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: `Childrens Book`,
    description: "Engage young readers with enchanting tales and characters that spark their imagination.",
    className: "mb-auto"
  },
  {
    icon: <Briefcase size={60} />,
    title: "Business Book Writing",
    description: "Establish your thought leadership with books that share your expertise and vision. ",
    className: "hidden"
  },
  {
    src: "https://placehold.co/600x400/efefef/000000/png",
    tag: "Tagline",
    title: "Non-Fiction Writing",
    description: "Transform your ideas into compelling non-fiction that informs and inspires."
  },
  {
    icon: <Box size={60} />,
    tag: "Tagline",
    title: "ScriptWriting",
    description: "Bring your story to the big screen with engaging scripts for film, television, or theater.",
    className: "hidden"
  },
]

export const GhostWritingContact = [
  {
    title: "Ready to start Your writing journey",
    description: "Connect with our expert team and transform your ideas into a compelling manuscritp.",
    button1: "Start",
    button2: "Contact",
    bg_color: "bg-background"
  }
]

// Contact
export const ContactHero =
  [
    {
      subTitle: "Connect",
      title: "Get In Touch",
      description: "Transform your book idea into a published masterpiece with our expert publishing support.",
      href1: "",
      href2: "",
      button1: "Start",
      button2: "Learn",
      className: "text-7xl pt-4"
    }
  ]