'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-green-50 p-8">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-2xl">
            <div className="md:flex">
            <div className="p-8 w-full">
                <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 text-gray-900"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 text-gray-900"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 text-gray-900"
                    ></textarea>
                </div>
                <div>
                    <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </main>

      <Footer />
    </div>
  )
}