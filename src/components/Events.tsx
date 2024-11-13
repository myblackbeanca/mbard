import React from 'react';
import { Calendar } from 'lucide-react';
import RSVPModal from './RSVPModal';

export default function Events() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<string>('');

  const events = [
    {
      date: 'December 5, 2024',
      title: 'Album Release Party',
      location: 'Secret Location, NYC',
      description: 'Join us for an intimate evening celebrating the release.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2000'
    },
    {
      date: 'January 15, 2025',
      title: 'MINY Exclusive Live Session',
      location: 'Brooklyn Underground',
      description: 'A special acoustic performance for MINY members.',
      image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  const handleRSVP = (eventDate: string) => {
    setSelectedEvent(eventDate);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300">
            Upcoming Events
          </h2>
          <p className="text-purple-200 mt-2">Experience the music live in NYC</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative">
              <div className="hexagon-container">
                <div 
                  className="hexagon"
                  style={{
                    backgroundImage: `url(${event.image})`
                  }}
                >
                  <div className="hexagon-overlay">
                    <div className="flex items-center gap-4 mb-4">
                      <Calendar className="w-6 h-6 text-purple-400" />
                      <span className="text-xl font-semibold text-purple-200">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-purple-200 mb-2">{event.location}</p>
                    <p className="text-purple-300 mb-6">{event.description}</p>
                    <button
                      onClick={() => handleRSVP(event.date)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
                    >
                      RSVP Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RSVPModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        eventDate={selectedEvent}
      />
    </section>
  );
}