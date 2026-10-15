import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard, ConsultationBand } from '@/components/jewellery';
import { categories, products, pageHead } from '@/lib/jewellery';
import { Route as collectionsRoute } from './collections';
export const Route = createFileRoute('/collections/')({ head: () => pageHead('Jewellery & Accessories', 'Browse featured jewellery and accessories from Bling Jewels KHZ and message us to ask about a piece.'), component: Collections });
function Collections() {
  const { category: requestedCategory } = collectionsRoute.useSearch();
  const [category, setCategory] = useState<string>(requestedCategory ?? 'All Jewellery');
  const visible = products.filter(p => category === 'All Jewellery' || p.category === category);
  return <><section className="page-heading"><p className="eyebrow">BLING JEWELS · KHUZDAR</p><h1>Find your <em>kind of shine.</em></h1><p>Explore featured jewellery and accessories for every occasion.</p></section><section className="section-wrap collection-page"><div className="category-filters" aria-label="Collection categories">{categories.map(c => <Button key={c} variant="ghost" className={category === c ? 'filter-active' : ''} onClick={() => setCategory(c)}>{c}</Button>)}</div><div className="collection-count">{visible.length} featured designs <span>Price and availability on enquiry</span></div><div className="product-grid">{visible.map(p => <ProductCard key={p.id} product={p}/>)}</div><p className="spec-note">Please message us to confirm current availability and item-specific details.</p></section><ConsultationBand/></>;
}
