import one from '@/assets/1.png';
import two from '@/assets/2.png';
import three from '@/assets/3.png';
import four from '@/assets/4.png';
import five from '@/assets/5.png';
import six from '@/assets/6.png';
import seven from '@/assets/7.png';
import eight from '@/assets/8.png';
import nine from '@/assets/9.png';
import ten from '@/assets/10.png';
import crimsonHaloSet from '@/assets/crimson-halo-set.png';

export const whatsapp = (message = 'Hello, I would like to enquire about Bling Jewels | KHZ') => `https://wa.me/?text=${encodeURIComponent(message)}`;
export const instagram = 'https://www.instagram.com/blingjewels.khz/';
export const categories = ['All Jewellery', 'Necklaces & Sets', 'Earrings & Jhumkas', 'Bangles & Bracelets', 'Bridal Couture'] as const;
export const products = [
  { id: 'emerald-heirloom', name: 'Statement Necklace Set', category: 'Necklaces & Sets', image: two, material: 'Ask us about materials, size and price', description: 'A distinctive necklace set for celebrations and special occasions. Message us to confirm availability and the details of this piece.' },
  { id: 'pearl-gajra', name: 'Heritage Bracelet', category: 'Bangles & Bracelets', image: one, material: 'Ask us about materials, size and price', description: 'An expressive bracelet with heritage-inspired detailing. Message us to confirm availability and the details of this piece.' },
  { id: 'pearl-jhumkas', name: 'Classic Jhumka Earrings', category: 'Earrings & Jhumkas', image: three, material: 'Ask us about materials, size and price', description: 'A graceful pair of statement jhumkas for festive dressing. Message us to confirm availability and the details of this piece.' },
  { id: 'ruby-jhumkas', name: 'Festive Drop Earrings', category: 'Earrings & Jhumkas', image: four, material: 'Ask us about materials, size and price', description: 'Colourful drop earrings with a celebratory feel. Message us to confirm availability and the details of this piece.' },
  { id: 'emerald-drops', name: 'Everyday Drop Earrings', category: 'Earrings & Jhumkas', image: five, material: 'Ask us about materials, size and price', description: 'A polished finishing touch for day-to-evening looks. Message us to confirm availability and the details of this piece.' },
  { id: 'ruby-bracelet', name: 'Statement Bracelet', category: 'Bangles & Bracelets', image: six, material: 'Ask us about materials, size and price', description: 'A colourful statement bracelet made for special moments. Message us to confirm availability and the details of this piece.' },
  { id: 'diamond-lace', name: 'Occasion Necklace Set', category: 'Necklaces & Sets', image: seven, material: 'Ask us about materials, size and price', description: 'An intricate necklace set for occasions worth celebrating. Message us to confirm availability and the details of this piece.' },
  { id: 'golden-muse', name: 'Golden Statement Set', category: 'Necklaces & Sets', image: eight, material: 'Ask us about materials, size and price', description: 'A warm-toned statement necklace set for your next celebration. Message us to confirm availability and the details of this piece.' },
  { id: 'royal-bridal', name: 'Bridal Choker Set', category: 'Bridal Couture', image: nine, material: 'Ask us about materials, size and price', description: 'A striking choker set to complement a bridal look. Message us to confirm availability and the details of this piece.' },
  { id: 'diamond-rain', name: 'Pendant Necklace Set', category: 'Necklaces & Sets', image: ten, material: 'Ask us about materials, size and price', description: 'A delicate pendant set with a flowing silhouette. Message us to confirm availability and the details of this piece.' },
  { id: 'crimson-halo-set', name: 'Colour Pop Necklace Set', category: 'Necklaces & Sets', image: crimsonHaloSet, material: 'Ask us about materials, size and price', description: 'A vivid statement necklace set designed to catch the eye. Message us to confirm availability and the details of this piece.' },
] as const;
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Bling Jewels KHZ` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Bling Jewels KHZ` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
