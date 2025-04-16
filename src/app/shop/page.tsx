"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from "@/components/micro/ProductCard";

type FilterType = "category" | "price" | null;

const fetchProducts = async (
  filterType: FilterType,
  filterValue: string | { min: number; max: number }
) => {
  if (filterType === "category" && typeof filterValue === "string") {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/smm/products/category/${filterValue}`
    );
    return data;
  }

  if (filterType === "price" && typeof filterValue === "object") {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/smm/products/price`,
      {
        params: {
          min: filterValue.min,
          max: filterValue.max,
        },
      }
    );
    return data;
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/smm/products/`
  );
  return data;
};

function ShopPage() {
  const [filterType, setFilterType] = useState<FilterType>(null);
  const [filterValue, setFilterValue] = useState<
    string | { min: number; max: number }
  >("");

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filterType, filterValue],
    queryFn: () => fetchProducts(filterType, filterValue),
  });

  const handleCategoryChange = (value: string) => {
    setFilterType("category");
    setFilterValue(value);
  };

  const handlePriceChange = (value: string) => {
    setFilterType("price");

    switch (value) {
      case "under_100":
        setFilterValue({ min: 0, max: 100 });
        break;
      case "100_200":
        setFilterValue({ min: 100, max: 200 });
        break;
      case "200_400":
        setFilterValue({ min: 200, max: 400 });
        break;
      case "400_800":
        setFilterValue({ min: 400, max: 800 });
        break;
      case "flagship":
        setFilterValue({ min: 800, max: 1000 });
        break;
      default:
        setFilterType(null);
        setFilterValue("");
    }
  };

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading">Shop Products</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select onChange={(e) => handleCategoryChange(e.target.value)} defaultValue="">
          <option value="">All Categories</option>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
          <option value="accessories">Accessories</option>
        </select>

        <select onChange={(e) => handlePriceChange(e.target.value)} defaultValue="">
          <option value="">All Price Ranges</option>
          <option value="under_100">Under $100</option>
          <option value="100_200">$100 - $200</option>
          <option value="200_400">$200 - $400</option>
          <option value="400_800">$400 - $800</option>
          <option value="flagship">$800 - $1,000</option>
        </select>
      </div>

      {/* Content */}
      {isLoading && <p>Loading products...</p>}
      {error && <p>Error loading products.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ShopPage;