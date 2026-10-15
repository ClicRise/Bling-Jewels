import one from '@/assets/1.png';
import two from '@/assets/2.png';
import three from '@/assets/3.png';
import four from '@/assets/4.png';
import five from '@/assets/5.png';
import six from '@/assets/6.png';
import seven from '@/assets/7.png';

export const whatsapp = (message = 'Hello, I would like to enquire about Bling Jewels | KHZ') => `https://wa.me/?text=${encodeURIComponent(message)}`;
export const instagram = 'https://www.instagram.com/blingjewels.khz/';
export const categories = ['All Jewellery', 'Necklaces & Sets', 'Earrings & Jhumkas'] as const;
export const products = [
  { id: 'gold-petal-earrings', name: 'Gold Petal Earrings', category: 'Earrings & Jhumkas', image: one, material: 'Message us for price and item details', description: 'A bold flower-inspired earring displayed on a sculptural stand. Message us to confirm availability and details.' },
  { id: 'sculpted-drop-earrings', name: 'Sculpted Drop Earrings', category: 'Earrings & Jhumkas', image: two, material: 'Message us for price and item details', description: 'A polished sculptural drop design for an expressive finishing touch. Message us to confirm availability and details.' },
  { id: 'embellished-oval-earrings', name: 'Embellished Oval Earrings', category: 'Earrings & Jhumkas', image: three, material: 'Message us for price and item details', description: 'An oval silhouette with sparkling detail, styled for a special occasion. Message us to confirm availability and details.' },
  { id: 'statement-flower-earrings', name: 'Statement Flower Earrings', category: 'Earrings & Jhumkas', image: four, material: 'Message us for price and item details', description: 'A striking floral statement design with sculpted petals. Message us to confirm availability and details.' },
  { id: 'layered-necklace', name: 'Layered Necklace', category: 'Necklaces & Sets', image: five, material: 'Message us for price and item details', description: 'A layered necklace styled on a display bust. Message us to confirm availability and item details.' },
  { id: 'teardrop-necklace-set', name: 'Teardrop Statement Necklace Set', category: 'Necklaces & Sets', image: six, material: 'Message us for price and item details', description: 'A coordinated necklace and earring set with bold teardrop details. Message us to confirm availability and item details.' },
  { id: 'beaded-necklace-set', name: 'Beaded Necklace Set', category: 'Necklaces & Sets', image: seven, material: 'Message us for price and item details', description: 'A coordinated beaded necklace and earring set displayed on a bust. Message us to confirm availability and item details.' },
] as const;

export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Bling Jewels KHZ` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Bling Jewels KHZ` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
