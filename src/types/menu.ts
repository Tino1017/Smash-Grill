export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'burgers' | 'sides' | 'drinks' | 'desserts';
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isRecommended?: boolean;
  calories?: number;
  allergens?: string[];
}