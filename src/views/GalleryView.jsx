import React from 'react';
import GalleryCard from '../components/GalleryCard';

function GalleryView({ sites, onNavigate }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Explore Sacred Spaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map(site => (
          <GalleryCard key={site.id} site={site} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

export default GalleryView;

