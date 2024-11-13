import React from 'react';
import { Star, Music, Video, Calendar } from 'lucide-react';

export default function Subscription() {
  const benefits = [
    { icon: <Music className="w-5 h-5" />, text: "Unreleased songs and demos" },
    { icon: <Video className="w-5 h-5" />, text: "Behind-the-scenes content" },
    { icon: <Calendar className="w-5 h-5" />, text: "Early access to new releases" },
    { icon: <Star className="w-5 h-5" />, text: "Exclusive member-only content" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-300">
          Monthly Access Pass
        </h2>
        <div className="max-w-lg mx-auto bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center mb-8">
            <span className="text-5xl font-bold">$4.99</span>
            <span className="text-purple-300 ml-2">/month</span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-purple-200">
                {benefit.icon}
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://fin.minyvinyl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-center transition-colors font-semibold"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}