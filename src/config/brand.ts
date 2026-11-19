export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Klyia Technology, I visited your website and would like to know more about your services.';

export function buildWhatsAppHref(customMessage: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/918296887643?text=${encodeURIComponent(customMessage)}`;
}

export const BRAND = {
  name: 'Klyia Technology',
  wordmarkPrimary: 'KLYIA',
  wordmarkSecondary: 'TECHNOLOGY',
  tagline: 'Technology That Moves Businesses Forward.',
  domain: 'https://klyiatechnology.com',
  email: 'klyiatechnology@gmail.com',
  phoneDisplay: '+91 82968 87643',
  phoneHref: 'tel:+918296887643',
  whatsappHref: 'https://wa.me/918296887643',
  whatsappPrefilledHref: buildWhatsAppHref(WHATSAPP_DEFAULT_MESSAGE),
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=First+Floor,+Bajrang+Hardware,+Krishna+Talkies+Road,+Risali,+Bhilai,+Chhattisgarh,+India',
  social: {
    facebook: 'https://www.facebook.com/klyiatechnology/',
    instagram: 'https://www.instagram.com/klyiatechnology/',
    quora: 'https://www.quora.com/profile/Virendra-Patel-7',
  },
  socialProfiles: [
    {
      id: 'facebook' as const,
      label: 'Facebook',
      url: 'https://www.facebook.com/klyiatechnology/',
      ariaLabel: 'Klyia Technology on Facebook',
    },
    {
      id: 'instagram' as const,
      label: 'Instagram',
      url: 'https://www.instagram.com/klyiatechnology/',
      ariaLabel: 'Klyia Technology on Instagram',
    },
    {
      id: 'quora' as const,
      label: 'Quora',
      url: 'https://www.quora.com/profile/Virendra-Patel-7',
      ariaLabel: 'Klyia Technology on Quora',
    },
  ],
  address: {
    line1: 'First Floor, Bajrang Hardware,',
    line2: 'Krishna Talkies Road, Risali,',
    cityStateCountry: 'Bhilai, Chhattisgarh, India.',
    full: 'First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh, India.',
    locality: 'Bhilai',
    region: 'Chhattisgarh',
    countryCode: 'IN',
  },
  colors: {
    obsidianBlack: '#080808',
    deepGraphite: '#141414',
    elevatedSurface: '#1B1B1B',
    cardBackground: '#111111',
    chromeSilver: '#CDCBCA',
    secondaryText: '#969696',
    subtleBorder: '#303030',
    laserCrimson: '#D41514',
    whiteHighlight: '#FFFFFF',
  },
  typography: {
    displayFont: '"Manrope", sans-serif',
    bodyFont: '"Inter", sans-serif',
    monoFont: '"JetBrains Mono", monospace',
  },
  footerSummary:
    'Klyia Technology provides custom software, ERP, website development, AI solutions and digital growth services to businesses across India.',
} as const;

export type SocialPlatformId = (typeof BRAND.socialProfiles)[number]['id'];
