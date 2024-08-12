import { useState, useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface ImageUploadProps {
  setPlantInfo: (info: string) => void
  setImageUrl: (url: string) => void
}

export default function ImageUpload({ setPlantInfo, setImageUrl }: ImageUploadProps) {
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showCamera, setShowCamera] = useState(false)

  const handleImageUpload = async (file: File) => {
    setLoading(true)

    try {
      const apiKey = 'AIzaSyBMmaBLlzS3VUp8hNrF9Vj4rNS2Q9J9Q1o'
      if (!apiKey) {
        throw new Error('Google Gemini API key is not set')
      }

      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const imageData = await file.arrayBuffer()
      const imageBase64 = Buffer.from(imageData).toString('base64')

      setImageUrl(URL.createObjectURL(file))

      const result = await model.generateContent([
        {
          inlineData: {
            mimeType: file.type,
            data: imageBase64
          }
        },
        `Identify this plant and provide information in the following format:

        Common Name: [name]
        Scientific Name: [name]
        Description: [A brief description of the plant, its characteristics, and interesting facts]
        Family: [family]
        Native Region: [region]
        Growth Habit: [habit]
        Flower Color: [color or N/A if not applicable]
        Sunlight Requirements: [sunlight]
        Water Requirements: [water]
        Soil Type: [soil]

        Please provide concise answers for each category.`
      ])

      const response = await result.response
      const text = response.text()
      setPlantInfo(text)
    } catch (error) {
      console.error('Error identifying plant:', error)
      if (error instanceof Error) {
        setPlantInfo(`Error identifying plant: ${error.message}. Please try again.`)
      } else {
        setPlantInfo('An unknown error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const openCamera = async () => {
    setShowCamera(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      setShowCamera(false)
    }
  }

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas')
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0)
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' })
          handleImageUpload(file)
        }
      }, 'image/jpeg')
    }
    setShowCamera(false)
  }

  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <label
          htmlFor="image-upload"
          className="bg-white text-green-800 font-bold py-2 px-4 rounded cursor-pointer transition-colors hover:bg-green-300"
        >
          {loading ? 'Identifying...' : 'Upload Plant Image'}
        </label>
        <button
          onClick={openCamera}
          className="bg-white text-green-800 font-bold py-2 px-4 rounded cursor-pointer transition-colors hover:bg-green-300"
          disabled={loading}
        >
          Take Photo
        </button>
      </div>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={loading}
        ref={fileInputRef}
      />
      {showCamera && (
        <div className="mt-4">
          <video ref={videoRef} autoPlay playsInline className="mb-2 rounded-lg" />
          <button
            onClick={takePhoto}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors hover:bg-green-600 items-center"
          >
            Capture Photo
          </button>
        </div>
      )}
    </div>
  )
}