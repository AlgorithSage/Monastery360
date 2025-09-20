import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "./firebase";

// This is the initial data we want to add to our database.
const sampleData = [
  {
    id: "tawang-monastery",
    name: "Tawang Monastery",
    location: "Arunachal Pradesh, India",
    description: "Perched atop a mountain, Tawang Monastery is the largest monastery in India and the second largest in the world. It offers breathtaking views and a deep sense of spiritual tranquility.",
    thumbnailUrl: "https://placehold.co/600x400/000000/FFF?text=Tawang",
    panoramaUrl: "https://pannellum.org/images/cerro-toco-01.jpg" // Using a sample panorama
  },
  {
    id: "hemis-monastery",
    name: "Hemis Monastery",
    location: "Ladakh, India",
    description: "Hemis Monastery is a Himalayan Buddhist monastery of the Drukpa Lineage. Famous for its annual Hemis festival, it is a site of rich cultural and spiritual heritage.",
    thumbnailUrl: "https://placehold.co/600x400/333333/FFF?text=Hemis",
    panoramaUrl: "https://pannellum.org/images/alma.jpg" // Using a sample panorama
  }
];

/**
 * Seeds the Firestore database with initial monastery data.
 * It checks if the 'sites' collection is empty before adding data to prevent duplicates.
 */
export async function seedDatabase() {
  const sitesCollection = collection(db, "sites");
  const querySnapshot = await getDocs(sitesCollection);
  
  // Only seed if the collection is empty
  if (querySnapshot.empty) {
    console.log("Database is empty. Seeding with sample data...");
    const batch = writeBatch(db);
    
    sampleData.forEach((site) => {
      // Use the custom 'id' field from our data as the document ID
      const docRef = doc(db, "sites", site.id); 
      batch.set(docRef, site);
    });
    
    await batch.commit();
    console.log("Database seeded successfully!");
  } else {
    console.log("Database already contains data. Skipping seed.");
  }
}

