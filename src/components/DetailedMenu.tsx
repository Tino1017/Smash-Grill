import React, { useState } from 'react';
import { Beef, Leaf, Flame, Star } from 'lucide-react';
import { menuItems } from '../data/menuItems';
import type { MenuItem } from '../types/menu';

const categories = ['all', 'burgers', 'sides', 'drinks', 'desserts'] as const;

export function DetailedMenu() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');

  const filteredItems = menuItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const recommendedItems = menuItems.filter(item => item.isRecommended);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Recommendations Section */}
      <section className="bg-yellow-400 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900">Chef's Recommendations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                    <div className="flex gap-2">
                      {item.isVegetarian && <Leaf className="w-5 h-5 text-green-500" />}
                      {item.isSpicy && <Flame className="w-5 h-5 text-red-500" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Full Menu</h2>
          
          {/* Category Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.calories} cal</p>
                    </div>
                    <div className="flex gap-2">
                      {item.isVegetarian && <Leaf className="w-5 h-5 text-green-500" />}
                      {item.isSpicy && <Flame className="w-5 h-5 text-red-500" />}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  {item.allergens && item.allergens.length > 0 && (
                    <p className="text-xs text-gray-500 mb-4">
                      Contains: {item.allergens.join(', ')}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg 
                      hover:bg-gray-800 transition-colors text-sm">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}