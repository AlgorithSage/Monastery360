import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './services/firebase';
import { seedDatabase } from './services/seed';

import Header from './components/Header';
import GalleryView from './views/GalleryView';
import SiteView from './views/SiteView';
import Spinner from './components/Spinner';

function App() {
  // State to hold the list of monastery sites
  const [sites, setSites] = useState([]);
  // State to manage which view is currently active
  const [currentView, setCurrentView] = useState({ view: 'gallery', siteId: null });
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Effect hook to fetch data from Firebase on component mount
  useEffect(() => {
    async function fetchData() {
      // First, check if we need to seed the database
      await seedDatabase();

      // Then, fetch all documents from the "sites" collection
      const querySnapshot = await getDocs(collection(db, "sites"));
      const sitesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      setSites(sitesData);
      setIsLoading(false);
    }

    fetchData().catch(console.error);
  }, []); // The empty array means this effect runs only once

  // Function to change the view to a specific site's detail page
  const navigateToSite = (siteId) => {
    setCurrentView({ view: 'site', siteId: siteId });
  };

  // Function to navigate back to the main gallery
  const navigateToGallery = () => {
    setCurrentView({ view: 'gallery', siteId: null });
  };

  // Function to find the currently selected site data
  const getCurrentSite = () => {
    if (currentView.view === 'site') {
      return sites.find(site => site.id === currentView.siteId);
    }
    return null;
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {isLoading ? (
          <Spinner />
        ) : currentView.view === 'gallery' ? (
          <GalleryView sites={sites} onNavigate={navigateToSite} />
        ) : (
          <SiteView site={getCurrentSite()} onBack={navigateToGallery} />
        )}
      </main>
    </div>
  );
}

export default App;

