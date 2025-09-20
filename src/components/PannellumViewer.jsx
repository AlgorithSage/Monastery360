'use client'; // This directive is for frameworks like Next.js, but good practice.
import React, { useEffect, useRef } from 'react';

function PannellumViewer({ imageUrl }) {
  const viewerRef = useRef(null); // Ref to hold the viewer instance

  useEffect(() => {
    // Ensure the Pannellum library is loaded on the window object
    if (!window.pannellum) {
      console.error("Pannellum library not found!");
      return;
    }

    // Initialize the viewer
    viewerRef.current = window.pannellum.viewer('panorama-container', {
      "type": "equirectangular",
      "panorama": imageUrl,
      "autoLoad": true,
      "showControls": false,
      "autoRotate": -2, // Gently rotates the panorama
      "compass": true,
      "northOffset": 240
    });

    // Cleanup function to destroy the viewer when the component unmounts
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, [imageUrl]); // Re-run the effect if the imageUrl changes

  return (
    <div id="panorama-container" style={{ width: '100%', height: '60vh' }} className="rounded-lg shadow-2xl"></div>
  );
}

export default PannellumViewer;

