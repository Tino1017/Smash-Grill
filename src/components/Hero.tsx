import React from 'react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80"
          alt="Food Truck"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <UtensilsCrossed className="w-16 h-16 text-yellow-400 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Smashing flavors on the go!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience gourmet street food at its finest. Fresh ingredients, bold flavors, 
            and chef-crafted recipes served from our mobile kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold 
              flex items-center justify-center hover:bg-yellow-500 transition-colors">
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold 
              flex items-center justify-center hover:bg-white/10 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}