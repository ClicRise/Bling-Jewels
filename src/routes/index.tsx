import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, pageHead } from '@/lib/jewellery';
import { ProductCard, TrustStrip, ConsultationBand } from '@/components/jewellery';
import heroImage from '@/assets/layered-gold-profile.png';

export const Route = createFileRoute('/')({ head: () => pageHead('Jewellery & Accessories', 'Discover timeless jewellery and accessories at Bling Jewels in Khuzdar. Message us for prices, availability and product details.'), component: Index });

function Index() {
  const categories = [
    { name: 'Necklaces & Sets', product: products[4] },
    { name: 'Earrings & Jhumkas', product: products[0] },
  ];

  return <>
    <section className="home-hero">
      <img className="hero-photo" src={heroImage} alt="Model wearing a layered necklace" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">BLING JEWELS · KHUZDAR</p>
        <h1>Shine in<br/><em>your own way.</em></h1>
        <div className="hero-rule" />
        <p>Timeless style. Affordable luxury.<br/>Find something lovely for every occasion.</p>
        <Button asChild className="gold-button"><Link to="/collections">Explore the Collections<ArrowUpRight/></Link></Button>
        <span className="hero-caption">JEWELLERY & ACCESSORIES</span>
      </div>
      <div className="hero-footnote"><span>FAROOQ CHOWK · LUCKY MARKET</span><Link to="/collections/$productId" params={{ productId: products[0].id }}>Discover a favourite <ArrowUpRight size={16}/></Link></div>
    </section>
    <TrustStrip />
    <section className="section-wrap home-collections">
      <div className="section-title title-row"><div><p className="eyebrow">A LITTLE SOMETHING FOR EVERY LOOK</p><h2>Make it special.<br/><em>Make it yours.</em></h2></div><Link to="/collections" className="text-link">Discover All Collections<ArrowRight size={18}/></Link></div>
      <div className="category-showcase">{categories.map(({ name, product }) => <Link to="/collections" search={{ category: name }} key={name} className="category-tile"><img src={product.image} alt={name} loading="lazy"/><div><h3>{name}</h3><ArrowUpRight size={21}/></div></Link>)}</div>
    </section>
    <section className="signature-section section-wrap">
      <div className="section-title title-row"><div><p className="eyebrow">A FEW FAVOURITES</p><h2>Find your <em>new favourite.</em></h2></div><p>Style for every occasion.</p></div>
      <div className="product-grid">{[products[0], products[2], products[4]].map(product => <ProductCard key={product.id} product={product}/>)}</div>
    </section>
    <section className="home-story"><img src={products[3].image} alt="Gold flower statement earrings" loading="lazy"/><div><p className="eyebrow">HELLO FROM BLING</p><h2>Style that feels<br/><em>like you.</em></h2><p>At Bling Jewels, discover jewellery and accessories to bring a little extra joy to your everyday and your special occasions.</p><p>Visit us at Farooq Chowk, Lucky Market, 2nd Floor, Khuzdar — or message us to ask about a piece.</p><Link to="/about" className="text-link">Get to know us<ArrowRight size={18}/></Link></div></section>
    <ConsultationBand />
  </>;
}
