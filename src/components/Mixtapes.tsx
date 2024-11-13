import React from 'react';
import { Play, Download } from 'lucide-react';

export default function Mixtapes() {
  const mixtapes = [
    {
      title: "Spring EP",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000",
      description: "Recorded in Hell's Kitchen, Manhattan"
    },
    {
      title: "Spring Live",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2000",
      description: "Raw live tape recordings"
    },
    {
      title: "Apparently",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=2000",
      description: "NYC scene collaborations"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300">
            Featured Mixtapes
          </h2>
          <p className="text-purple-200 mt-2">Exclusive MINY recordings</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mixtapes.map((mixtape, index) => (
            <div key={index} className="group relative">
              <div className="hexagon-container">
                <div 
                  className="hexagon"
                  style={{
                    backgroundImage: `url(${mixtape.image})`
                  }}
                >
                  <div className="hexagon-overlay">
                    <h3 className="text-xl font-bold mb-2">{mixtape.title}</h3>
                    <p className="text-sm text-purple-200 mb-4">{mixtape.description}</p>
                    <div className="flex gap-4">
                      <a 
                        href="#listen" 
                        className="flex items-center gap-2 bg-purple-600/80 hover:bg-purple-600 px-4 py-2 rounded-full text-sm"
                      >
                        <Play className="w-4 h-4" /> Listen
                      </a>
                      <a 
                        href="https://fin.minyvinyl.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-purple-600/80 hover:bg-purple-600 px-4 py-2 rounded-full text-sm"
                      >
                        <Download className="w-4 h-4" /> Claim MINY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}