export type Product = {
    id: string;
    name: string;
    slug: string; // for dynamic routing e.g. /products/iphone-15
    brand: string;
    description: string;
    price: number;
    discountPrice?: number; // optional, for promotions
    inStock: number;
    images: string[]; // URLs of product images
    storage: string; // e.g. "128GB"
    color: string;
    network: string; // e.g. "5G", "4G"
    simType: string; // e.g. "Dual SIM", "Single SIM"
    condition: "New" | "Refurbished";
    isFeatured?: boolean;
    isNewArrival?: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  