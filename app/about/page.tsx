import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-green-50 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6">About PlantID</h1>
          <p className="text-lg mb-4 text-black">
            PlantID is a cutting-edge plant identification application that uses advanced AI technology to help you discover and learn about the flora around you.
          </p>
          <p className="text-lg mb-4 text-black">
            Our mission is to connect people with nature by providing instant, accurate plant identification and information. Whether you're a gardening enthusiast, a nature lover, or just curious about the plants you encounter, PlantID is here to help you explore the botanical world.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-black">
            <li>Upload a photo of any plant</li>
            <li>Our AI analyzes the image in seconds</li>
            <li>Receive detailed information about the plant</li>
            <li>Learn about its characteristics, care, and more</li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  )
}
