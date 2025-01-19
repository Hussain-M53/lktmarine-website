export interface Product {
  id: string;
  categoryId: string;
  subCategoryId: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
  certifications?: string[];
  technicalDocuments?: {
    name: string;
    url: string;
  }[];
  relatedProducts?: string[];
}

export const products: Record<string, Product> = {
  'climax-cx3-grease': {
    id: 'climax-cx3-grease',
    categoryId: 'industrial',
    subCategoryId: 'climax-lubricant',
    name: "CLIMAX CX-3 Industrial Grease",
    shortDescription: "High-Performance Multi-Purpose Industrial Grease",
    description: "CLIMAX CX-3 is a premium quality multi-purpose industrial grease designed for heavy-duty applications. This advanced formulation provides exceptional protection against wear, rust, and corrosion while maintaining excellent stability under high temperatures and extreme pressure conditions.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN6KPf1RiAVehp1TEDkqv7Vuw7CyY-17q4g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PJ1Fy3BedjqVe1Kc80pW74d0fBQa6_xdKA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN6KPf1RiAVehp1TEDkqv7Vuw7CyY-17q4g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PJ1Fy3BedjqVe1Kc80pW74d0fBQa6_xdKA&s",
    ],
    specifications: {
      "NLGI Grade": "2",
      "Operating Temperature": "-20°C to 180°C",
      "Base Oil Viscosity": "220 cSt @ 40°C",
      "Dropping Point": "260°C",
      "Color": "Blue",
      "Texture": "Smooth",
      "Water Resistance": "Excellent",
      "Package Size": "15kg, 50kg, 180kg"
    },
    features: [
      "Extended service life in high-temperature applications",
      "Superior mechanical stability",
      "Excellent water resistance and rust protection",
      "High load carrying capacity",
      "Enhanced oxidation resistance",
      "Reduces friction and wear",
      "Excellent pumpability in centralized systems"
    ],
    applications: [
      "Heavy industrial machinery",
      "Marine equipment",
      "Construction equipment",
      "Mining operations",
      "Steel mills",
      "Paper mills"
    ],
    certifications: [
      "ISO 9001:2015",
      "API GL-5",
      "DIN 51825 KP2K-20"
    ]
  },

  'lessmann-wire-brush-standard': {
    id: 'lessmann-wire-brush-standard',
    categoryId: 'industrial',
    subCategoryId: 'wire-brushes',
    name: "Lessmann Standard Wire Brush",
    shortDescription: "Professional-Grade Steel Wire Brush",
    description: "Lessmann Standard Wire Brush is engineered for professional use, featuring high-quality steel bristles and ergonomic wooden handle. Perfect for cleaning, deburring, and surface preparation in industrial applications.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN6KPf1RiAVehp1TEDkqv7Vuw7CyY-17q4g&s",
      "/products/lessmann-brush-2.jpg",
      "/products/lessmann-brush-3.jpg"
    ],
    specifications: {
      "Wire Material": "High-carbon steel",
      "Wire Diameter": "0.3mm",
      "Handle Material": "Hardwood",
      "Total Length": "225mm",
      "Brush Length": "115mm",
      "Rows": "4",
      "Weight": "150g"
    },
    features: [
      "High-quality steel wire construction",
      "Ergonomic wooden handle",
      "Excellent durability",
      "Consistent wire pattern",
      "Suitable for heavy-duty use",
      "Resistant to wire breakage"
    ],
    applications: [
      "Metal surface preparation",
      "Weld cleaning",
      "Rust removal",
      "Paint stripping",
      "General industrial cleaning"
    ]
  },

  'marine-polypropylene-rope': {
    id: 'marine-polypropylene-rope',
    categoryId: 'marine-offshore',
    subCategoryId: 'ropes',
    name: "Heavy Duty Polypropylene Marine Rope",
    shortDescription: "Professional Marine-Grade Polypropylene Rope",
    description: "High-strength polypropylene rope specifically designed for marine applications. Features excellent UV resistance, low water absorption, and high breaking strength, making it ideal for various marine and offshore operations.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN6KPf1RiAVehp1TEDkqv7Vuw7CyY-17q4g&s",
      "/products/marine-rope-2.jpg",
      "/products/marine-rope-3.jpg"
    ],
    specifications: {
      "Material": "High-grade Polypropylene",
      "Construction": "3-strand twisted",
      "Diameter Options": "8mm to 40mm",
      "Breaking Strength": "Varies by diameter",
      "Specific Gravity": "0.91",
      "Melting Point": "165°C",
      "UV Resistance": "Excellent",
      "Color Options": "White, Black, Orange"
    },
    features: [
      "High breaking strength",
      "Excellent UV resistance",
      "Low water absorption",
      "Floats on water",
      "Resistant to chemicals",
      "Easy to splice",
      "Durable and long-lasting"
    ],
    applications: [
      "Mooring lines",
      "Anchor lines",
      "Towing operations",
      "Safety lines",
      "General marine use",
      "Offshore operations"
    ],
    certifications: [
      "ISO 1346:2012",
      "MED/4.4",
      "DNV-GL Type Approved"
    ]
  },

  'aluminum-porthole-standard': {
    id: 'aluminum-porthole-standard',
    categoryId: 'deck-engine-stores',
    subCategoryId: 'port-holes',
    name: "Marine Aluminum Porthole - Standard Series",
    shortDescription: "Premium Quality Marine-Grade Aluminum Porthole",
    description: "Professional-grade aluminum porthole designed for marine vessels, featuring weather-tight construction, clear tempered glass, and corrosion-resistant materials. Engineered to meet international marine standards and provide long-lasting performance in harsh marine environments.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN6KPf1RiAVehp1TEDkqv7Vuw7CyY-17q4g&s",
      "/products/porthole-2.jpg",
      "/products/porthole-3.jpg"
    ],
    specifications: {
      "Material": "Marine-grade aluminum alloy",
      "Glass Type": "Clear tempered safety glass",
      "Opening Size": "Various sizes available",
      "Frame Thickness": "12mm",
      "Glass Thickness": "8mm",
      "Seal Type": "EPDM rubber",
      "Finish": "Anodized",
      "Hardware": "316 Stainless Steel"
    },
    features: [
      "Weather-tight construction",
      "Corrosion-resistant materials",
      "Easy installation",
      "Maintenance-free design",
      "Excellent visibility",
      "Secure locking mechanism",
      "UV-resistant glass"
    ],
    applications: [
      "Commercial vessels",
      "Pleasure crafts",
      "Offshore platforms",
      "Marine accommodations",
      "Naval vessels"
    ],
    certifications: [
      "ISO 12216:2002",
      "ABYC H-3",
      "DNV-GL Type Approved"
    ],
    technicalDocuments: [
      {
        name: "Installation Guide",
        url: "/docs/porthole-installation-guide.pdf"
      },
      {
        name: "Maintenance Manual",
        url: "/docs/porthole-maintenance-manual.pdf"
      }
    ]
  }
}

// Helper function to get product by category and product ID
export function getProduct(productId: string): Product | undefined {
  return Object.values(products).find(
    product => product.id === productId
  );
}

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return Object.values(products).filter(
    product => product.categoryId === categoryId
  );
}

// Helper function to get related products
export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  return Object.values(products)
    .filter(p =>
      p.id !== product.id &&
      (p.categoryId === product.categoryId || product.relatedProducts?.includes(p.id))
    )
    .slice(0, limit);
}

// Updated function to filter by sub-category
export function getProductsBySubCategory(categoryId: string, subCategoryId: string): Product[] {
  return Object.values(products).filter(
    product => product.categoryId === categoryId && product.subCategoryId === subCategoryId
  );
}