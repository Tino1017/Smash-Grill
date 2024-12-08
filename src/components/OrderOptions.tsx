import React from 'react';
import { UtensilsCrossed, Phone, Timer, Car } from 'lucide-react';

export function OrderOptions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <UtensilsCrossed className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Order Your Favorites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your preferred way to enjoy our smashing flavors. Order through Uber Eats 
            for delivery or use our call-and-collect service for a quick pickup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Uber Eats Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-black flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5077066/pexels-photo-5077066.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Uber Eats Delivery"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Uber Eats Delivery</h3>
              <p className="text-gray-600 mb-6">
                Get your favorite burgers delivered straight to your door. Available on Uber Eats 
                within our service area.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <Car className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">Delivery within 5 mile radius</span>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold 
                  hover:bg-gray-800 transition-colors"
              >
                Order on Uber Eats
              </a>
            </div>
          </div>

          {/* Call and Collect Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-400 flex items-center justify-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664392265223-755c0cffec39?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Call and Collect"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Call & Collect</h3>
              <p className="text-gray-600 mb-6">
                Skip the queue! Call us to place your order and collect it at your convenience 
                from our food truck.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Timer className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Ready in 15-20 minutes</span>
                </div>
              </div>
              <a
                href="tel:+1234567890"
                className="block w-full bg-yellow-400 text-gray-900 text-center py-3 rounded-lg 
                  font-semibold hover:bg-yellow-500 transition-colors"
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Delivery fees and minimum order values may apply for Uber Eats orders. 
            Call & Collect orders require a minimum of 15 minutes preparation time.
          </p>
        </div>
      </div>
    </section>
  );
}