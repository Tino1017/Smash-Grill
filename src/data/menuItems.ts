import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 'classic-smash',
    name: "Classic Smash Burger",
    description: "Double smashed patties, American cheese, lettuce, tomato, pickles, smash sauce",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    category: 'burgers',
    isRecommended: true,
    calories: 850,
    allergens: ['dairy', 'gluten']
  },
  {
    id: 'spicy-veggie',
    name: "Spicy Veggie Smash",
    description: "Plant-based patty, jalapeños, pepper jack, chipotle mayo",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&q=80",
    category: 'burgers',
    isVegetarian: true,
    isSpicy: true,
    calories: 680,
    allergens: ['dairy', 'gluten']
  },
  {
    id: 'bacon-bbq',
    name: "Bacon BBQ Smash",
    description: "Double smashed patties, crispy bacon, cheddar, BBQ sauce, crispy onions",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80",
    category: 'burgers',
    isRecommended: true,
    calories: 950,
    allergens: ['dairy', 'gluten']
  },
  {
    id: 'truffle-fries',
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries, truffle oil, parmesan cheese, fresh herbs",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80",
    category: 'sides',
    isRecommended: true,
    isVegetarian: true,
    calories: 420,
    allergens: ['dairy']
  },
  {
    id: 'sweet-potato',
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with chipotle aioli",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1644737566958-6983fb49558d?auto=format&fit=crop&q=80",
    category: 'sides',
    isVegetarian: true,
    calories: 380,
    allergens: ['eggs']
  },
  {
    id: 'milkshake',
    name: "Classic Vanilla Shake",
    description: "Hand-spun vanilla milkshake with whipped cream",
    price: "R XX.XX",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80",
    category: 'drinks',
    isVegetarian: true,
    calories: 550,
    allergens: ['dairy']
  }
];