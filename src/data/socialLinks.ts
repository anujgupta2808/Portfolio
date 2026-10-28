export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'mail' | 'x' | 'whatsapp';
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anuj-gupta-7aaabb2b9/',
    icon: 'linkedin',
    ariaLabel: 'Visit Anuj Gupta on LinkedIn',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/anujgupta2808',
    icon: 'github',
    ariaLabel: 'Visit Anuj Gupta on GitHub',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/justtt_anuj_12/',
    icon: 'instagram',
    ariaLabel: 'Follow Anuj Gupta on Instagram',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/8779747746',
    icon: 'whatsapp',
    ariaLabel: 'Chat with Anuj Gupta on WhatsApp',
  },
  {
    id: 'mail',
    name: 'Email',
    url: 'mailto:anujgupta26610812@gmail.com',
    icon: 'mail',
    ariaLabel: 'Send an email to Anuj Gupta',
  },
];
