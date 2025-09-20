import React from 'react';
import PannellumViewer from '../components/PannellumViewer';

function SiteView({ site, onBack }) {
  if (!site) {
    return <div>Site not found. <button onClick={onBack} className="text-emerald-400 hover:underline">Go back</button></div>;
  }

  return (
    <div className="animate-fade-in">
      <button 
        onClick={onBack} 
        className="mb-6 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        &larr; Back to Gallery
      </button>
      
      <h2 className="text-4xl font-extrabold mb-2 text-emerald-300">{site.name}</h2>
      <p className="text-lg text-gray-400 mb-6">{site.location}</p>
      
      <PannellumViewer imageUrl={site.panoramaUrl} />

      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 leading-relaxed">{site.description}</p>
      </div>
    </div>
  );
}

export default SiteView;

