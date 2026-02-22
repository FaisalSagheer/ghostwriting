
// GhostWriting Page

import { Album, Box, Briefcase, CircleDollarSign, Pencil, ShieldCheck } from "lucide-react";

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


export const servicesGhostwritingData = [
  {
    title: "Our Best GhostWriting Services",
    description: "We provide tailored writin services to help you shape your narrative at every step of your journey",
    servicesItems: [
      {
        src: "https://placehold.co/600x400/efefef/000000/png",
        tag: "Tagline",
        title: "Spiritual & Religion",
        type: "Non-Fiction",
        href: "/" || null,
        description:
          `Christian Demonology, a subset of Angelology (the study of angels), gives light on a 
      variety of questions, including who or what demons are, what they do, who or what they 
      serve, and what happens to them after death.`,
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
      }
    ]
  }
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
