import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Mixtapes from './components/Mixtapes';
import Merch from './components/Merch';
import Subscription from './components/Subscription';
import About from './components/About';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const App = () => {
  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-6 h-6" />, href: "#", label: "YouTube" },
    { icon: <Facebook className="w-6 h-6" />, href: "#", label: "Facebook" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <Hero />
      <Events />
      <Mixtapes />
      <Merch />
      <Subscription />
      <About />
      
      <footer className="py-8 px-4 bg-black/90">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <p className="text-purple-200 mb-4 md:mb-0">
              © 2024 Rachel Bard. All rights reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://fin.minyvinyl.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              MINY NEW YORK
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;