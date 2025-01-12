export interface Product {
  id: string;
  name: string;
  description: string;
  brand?: string;
  category: 'industrial' | 'marine-offshore' | 'deck-engine';
  subCategory: string;
  images: string[];
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
  applications?: string[];
  certifications?: string[];
}

export interface Category {
  id: 'industrial' | 'marine-offshore' | 'deck-engine';
  name: string;
  description: string;
  image: string;
  brands?: string[];
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
} 