import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have questions about our menu, catering services, or want to book us for your event? 
              We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@smashandgrill.com" className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400">
                <Mail className="w-5 h-5" />
                <span>hello@smashandgrill.com</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold 
                hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}