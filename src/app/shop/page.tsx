"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from "@/components/micro/ProductCard";

// Filter Types
type Filter = {
  brand?: string;
  condition?: "New" | "Refurbished" | "Pre-owned";
  type?: string;
  priceRange?: string;
  storage?: string;
  ram?: string;
  screenSize?: string;
};

const fetchProducts = async (filters: Filter) => {
  const { data } = await axios.get("/products", {
    params: filters,
  });
  return data;
};

function ShopPage() {
  const [filters, setFilters] = useState<Filter>({
    brand: "",
    condition: "New",
    type: "",
    priceRange: "",
    storage: "",
    ram: "",
    screenSize: "",
  });

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"], 
    queryFn: async () => await fetchProducts(filters), 
  });

  // Handle dynamic heading
  const getDynamicHeading = () => {
    if (filters.brand) {
      return `${filters.brand} Products`;
    }
    if (filters.condition) {
      return `${filters.condition} Products`;
    }
    return "All Products";
  };

  const handleFilterChange = (filter: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading">{getDynamicHeading()}</h2>

      {/* Filters Section */}
      <div className="flex gap-4 mb-6">
        <select
          onChange={(e) => handleFilterChange("brand", e.target.value)}
          value={filters.brand}
        >
          <option value="">All Brands</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Huawei">Huawei</option>
          {/* Add dynamic options based on backend data */}
        </select>

        <select
          onChange={(e) => handleFilterChange("condition", e.target.value)}
          value={filters.condition}
        >
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Refurbished">Refurbished</option>
          <option value="Pre-owned">Pre-owned</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          value={filters.priceRange}
        >
          <option value="">All Price Ranges</option>
          <option value="under_100">Under $100</option>
          <option value="100_200">$100 - $200</option>
          <option value="200_400">$200 - $400</option>
          <option value="400_800">$400 - $800</option>
          <option value="flagship">$800 - $1,000</option>
        </select>

        {/* Add more filter options such as storage, ram, screen size */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ShopPage;
