import React from 'react';

function GalleryCard({ site, onNavigate }) {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => onNavigate(site.id)}
    >
      <img src={site.thumbnailUrl} alt={site.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-emerald-300">{site.name}</h3>
        <p className="text-gray-400 mt-1">{site.location}</p>
      </div>
    </div>
  );
}

export default GalleryCard;

