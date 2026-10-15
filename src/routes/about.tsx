import { createFileRoute } from '@tanstack/react-router';
import { products, pageHead } from '@/lib/jewellery';
import { ConsultationBand, TrustStrip } from '@/components/jewellery';

export const Route = createFileRoute('/about')({ head: () => pageHead('About Bling Jewels', 'Get to know Bling Jewels | KHZ, your local destination for jewellery and accessories in Khuzdar.'), component: About });

function About() {
  return <><section className="page-heading"><p className="eyebrow">BLING JEWELS · KHUZDAR</p><h1>A little sparkle.<br/><em>A lot of style.</em></h1><p>Jewellery and accessories for every occasion.</p></section><section className="section-wrap story-grid"><img src={products[1].image} alt="A statement jewellery design"/><div><p className="eyebrow">HELLO FROM BLING</p><h2>Your style, <em>your story.</em></h2><p>Looking for a finishing touch, a thoughtful gift or something special for a celebration? Bling Jewels brings together jewellery and accessories to help you find a look that feels like you.</p><p>Browse a few featured designs here, then message us to check what is currently available and ask about each piece.</p><p>Find us at Farooq Chowk, Lucky Market, 2nd Floor, Khuzdar.</p></div></section><TrustStrip/><section className="section-wrap values-grid"><div><span>01</span><h3>Everyday favourites</h3><p>Explore designs to add a little something special to your daily style.</p></div><div><span>02</span><h3>Made for occasions</h3><p>Find eye-catching pieces for celebrations, gatherings and gifting.</p></div><div><span>03</span><h3>Here to help</h3><p>Message us to ask about availability, price and item-specific details.</p></div></section><ConsultationBand/></>;
}
