import {
    CameraIcon,
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    BookOpenIcon,
    BeakerIcon,
    RocketLaunchIcon
  } from '@heroicons/react/24/solid'
  
  const features = [
    {
      name: 'Upload or Capture',
      description: 'Upload an image or take a photo of a plant you want to identify.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'AI Analysis',
      description: 'Our advanced AI analyzes the image to identify the plant species.',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Detailed Information',
      description: 'Get comprehensive details about the plant, including its scientific name and characteristics.',
      icon: BookOpenIcon,
    },
    {
      name: 'Growth Requirements',
      description: 'Learn about the plant\'s ideal growing conditions and care instructions.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Interesting Facts',
      description: 'Discover fascinating facts and trivia about the identified plant species.',
      icon: BeakerIcon,
    },
    {
      name: 'Easy to Use',
      description: 'User-friendly interface suitable for both beginners and plant enthusiasts.',
      icon: CameraIcon,
    },
  ]
  
  export default function HowToUse() {
    return (
      <div className="py-5 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How to Use PlantID
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Discover the world of plants with these easy steps
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="bg-gray-800 rounded-lg px-6 py-5 flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-12 w-12 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }