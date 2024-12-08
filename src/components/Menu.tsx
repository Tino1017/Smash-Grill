import React from 'react';
import { Beef, Leaf, Flame } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Smash Burger",
    description: "Double smashed patties, American cheese, lettuce, tomato, pickles, smash sauce",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    isSpicy: false
  },
  {
    name: "Spicy Veggie Smash",
    description: "Plant-based patty, jalapeños, pepper jack, chipotle mayo",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&q=80",
    isVegetarian: true,
    isSpicy: true
  }
];

export function Menu() {
  return (
    <section className="py-20 bg-gray-50" id="menu">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <div className="flex gap-2">
                    {item.isVegetarian && (
                      <Leaf className="w-5 h-5 text-green-500" />
                    )}
                    {item.isSpicy && (
                      <Flame className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg 
                    hover:bg-gray-800 transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}