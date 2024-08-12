'use client'

import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<string | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-300 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-green-800">Plant Identifier</h1>
        <p className="text-center mb-8 max-w-md text-green-800">
          Discover the wonders of nature! Upload an image of a plant, and let
          our AI identify it for you.
        </p>
        <ImageUpload setPlantInfo={setPlantInfo} setImageUrl={setImageUrl} />
        {imageUrl && (
          <div className="mb-8">
           <img 
            src={imageUrl} 
            alt="Uploaded plant" 
            className="max-w-full md:max-w-sm lg:max-w-md rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          </div>
        )}
        {plantInfo && <PlantInfo info={plantInfo} />}
      </main>
      <Footer />
    </div>
  )
}