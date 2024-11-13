import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-black/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-300 text-center">
          About Rachel Bard
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-lg text-purple-200">
              Rachel Bard is a singer-songwriter known for her soulful voice and captivating melodies. 
              Her music blends elements of indie rock, folk, and pop, creating a unique sound that 
              resonates with audiences.
            </p>
            <p className="text-lg text-purple-200">
              Rachel's passion for storytelling and her connection to the 
              NYC music scene shine through in her work, creating an authentic and immersive experience
              for her listeners.
            </p>
            <p className="text-sm text-purple-400">
              Based in New York City • Independent Artist • MINY Exclusive
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600"
              alt="Rachel Bard performing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative pb-[56.25%] rounded-2xl overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/q1hC8lSSRWI?si=YWuH1WY759foj2w9" 
              title="Rachel Bard - Live Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://playerone.minyvinyl.com/thebardrachel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white transition-colors text-lg font-semibold"
          >
            View Electronic Press Kit <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}