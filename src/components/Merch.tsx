import React from 'react';
import { ShoppingBag, Calendar as CalendarIcon, Music, Ticket } from 'lucide-react';

export default function Merch() {
  const merchItems = [
    {
      title: "2025 MINY Calendar",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=2000",
      description: "Limited edition calendar featuring exclusive photos",
      alt: "2025 Rachel Bard MINY Calendar Preview"
    },
    {
      title: "Holographic Sticker Pack",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2000",
      description: "Set of 5 premium holographic stickers",
      alt: "Rachel Bard Holographic Sticker Collection"
    },
    {
      title: "All Access MINY Pass",
      price: 99.00,
      image: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?auto=format&fit=crop&q=80&w=2000",
      description: "12 months of exclusive MINY music access + early bird event tickets",
      subtext: "Includes priority access to all live events and exclusive content",
      alt: "Rachel Bard All Access MINY Pass"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-300">
          Exclusive Merch
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div key={index} className="bg-purple-900/20 rounded-xl overflow-hidden group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-purple-200 mb-2">{item.description}</p>
                {item.subtext && (
                  <p className="text-purple-400 text-sm mb-4">{item.subtext}</p>
                )}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold">${item.price}</span>
                  <a 
                    href="https://fin.minyvinyl.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" /> Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}