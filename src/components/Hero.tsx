import React from 'react';
import { Disc3 } from 'lucide-react';
import PreSaveModal from './PreSaveModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date('2024-11-24T00:00:00');
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=2000"
          alt="Rachel Bard Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          Rachel Bard
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-purple-200">Latest Single Release</p>
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-4">
            <Disc3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-spin-slow" />
            <span className="text-lg sm:text-xl text-purple-200">24.11.24</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-3 min-w-[80px]">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-purple-300 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105"
        >
          Pre-Save Now
        </button>
      </div>

      <PreSaveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}