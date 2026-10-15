import { Link } from '@tanstack/react-router';
import { ArrowUpRight, MessageCircle, Instagram, Menu, X, Gem, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { products, whatsapp, instagram } from '@/lib/jewellery';

const navigation = [{ to: '/', label: 'Home' }, { to: '/collections', label: 'Collections' }, { to: '/about', label: 'Our Story' }, { to: '/consultation', label: 'Enquire' }, { to: '/contact', label: 'Contact' }] as const;
export function ContactLinks() {
  return <><a href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><MessageCircle size={18} /></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Bling Jewels on Instagram" title="Instagram"><Instagram size={18} /></a></>;
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <><div className="announcement"><MapPin size={13}/> FAROOQ CHOWK · LUCKY MARKET · 2ND FLOOR · KHUZDAR</div><header className="site-header"><Link to="/" className="brand"><span className="brand-mark">BJ</span><span className="brand-name">bling<small>JEWELS · KHZ</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{item.label}</Link>)}</nav><div className="header-contact"><ContactLinks /></div><Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</Button></header>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}</>;
}
export function SiteFooter() {
  return <><footer className="site-footer"><div className="footer-main"><div><Link to="/" className="footer-brand">bling <span>JEWELS · KHZ</span></Link><p className="serif">Timeless style. Affordable luxury.</p><p>Jewellery and accessories for every occasion.</p></div><div><h3>EXPLORE BLING</h3>{navigation.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h3>VISIT OR MESSAGE US</h3><p>Farooq Chowk, Lucky Market<br/>2nd Floor, Khuzdar</p><div className="contact-icons"><ContactLinks /></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Bling Jewels KHZ. All rights reserved.</span><span>STYLE FOR EVERY OCCASION</span></div></footer><aside className="sticky-contact" aria-label="Quick contact"><a href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={18}/><span>WhatsApp</span></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/><span>Instagram</span></a></aside></>;
}
export function EnquiryButton({ name }: { name: string }) {
  return <Button asChild variant="outline" className="enquiry-button"><a href={whatsapp(`Hello, I would like to know the price and availability of ${name} from Bling Jewels KHZ`)} target="_blank" rel="noreferrer"><MessageCircle size={16}/>Ask Price on WhatsApp<ArrowUpRight size={15}/></a></Button>;
}
export function ProductCard({ product }: { product: typeof products[number] }) {
  return <article className="product-card"><Link to="/collections/$productId" params={{ productId: product.id }} className="product-image"><img src={product.image} alt={product.name} loading="lazy"/><span className="image-link"><ArrowUpRight size={20}/></span></Link><div className="product-info"><p className="eyebrow">{product.category}</p><Link to="/collections/$productId" params={{ productId: product.id }}><h3>{product.name}</h3></Link><p className="product-material">{product.material}</p><EnquiryButton name={product.name}/></div></article>;
}
export function TrustStrip() {
  return <div className="trust-strip"><span><Gem size={22}/>Jewellery & accessories</span><span>Timeless style</span><span>Affordable luxury</span></div>;
}
export function ConsultationBand() {
  return <section className="consultation-band"><div><p className="eyebrow">YOUR NEXT FAVOURITE PIECE</p><h2>Find a look <em>you’ll love.</em></h2><p>Message us for prices, availability and product details.</p></div><Button asChild className="gold-button"><a href={whatsapp()} target="_blank" rel="noreferrer">Chat with Bling Jewels <ArrowUpRight/></a></Button></section>;
}
