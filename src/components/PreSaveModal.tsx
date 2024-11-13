import React from 'react';

interface PreSaveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreSaveModal({ isOpen, onClose }: PreSaveModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-purple-900/90 p-8 rounded-2xl max-w-md w-full backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-4">Pre-Save & Join MINY Claim List</h2>
        <p className="text-purple-200 mb-6">First 5 listeners get a free MINY!</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-purple-800/50 border border-purple-600 text-white"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-purple-800/50 border border-purple-600 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors"
          >
            Join Claim List
          </button>
        </form>
        
        <button
          onClick={onClose}
          className="mt-4 text-purple-300 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}