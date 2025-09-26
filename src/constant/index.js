import { Target, Heart, Award, Zap, Facebook, Instagram, Twitter, Youtube, Dumbbell, Users, Clock, Star, Crown, Mail, Phone, MapPin } from 'lucide-react';

export const navItems =[
    {
        title:"Services",
        href:"/services",  
    },
    {
        title:"Process",
        href:"/process"
    },
    {
        title:"About",
        href:"/about"
    },
    {
        title:"Blog",
        href:"/blog"
    },
    {
        title:"Contact",
        href:"/contact"
    }
]

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

export  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      features: ['Free weights', 'Machine training', 'Powerlifting', 'Functional strength'],
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health with high-energy cardio sessions and HIIT training.',
      features: ['HIIT classes', 'Cycling', 'Running programs', 'Dance cardio'],
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our energetic group fitness classes led by certified instructors.',
      features: ['Yoga', 'Pilates', 'Zumba', 'CrossFit'],
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and fitness level.',
      features: ['Custom programs', 'Nutrition guidance', 'Progress tracking', 'Goal setting'],
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum results in minimum time.',
      features: ['Circuit training', 'Metabolic conditioning', 'Fat burning', 'Athletic performance'],
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock access to our facilities.',
      features: ['Flexible hours', 'Mobile app access', 'Secure entry', 'Always available'],
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600'
    }
  ];
