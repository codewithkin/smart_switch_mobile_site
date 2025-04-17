"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from "@/components/micro/ProductCard";
import ProductCardSkeleton from "./components/ProductSkeleton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type FilterType = "category" | "price" | null;

const fetchProducts = async (
  filterType: FilterType,
  filterValue: string | { min: number; max: number },
  limit: number,
  offset: number,
) => {
  const base = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (filterType === "category" && typeof filterValue === "string") {
    const { data } = await axios.get(
      `${base}/products/category/${filterValue}?limit=${limit}&offset=${offset}`,
      { headers: { "Cache-Control": "no-cache" } },
    );
    return data;
  }

  if (filterType === "price" && typeof filterValue === "object") {
    const { data } = await axios.get(`${base}/products/price`, {
      params: { min: filterValue.min, max: filterValue.max, limit, offset },
      headers: { "Cache-Control": "no-cache" },
    });
    return data;
  }

  const { data } = await axios.get(
    `${base}/products/?limit=${limit}&offset=${offset}`,
    { headers: { "Cache-Control": "no-cache" } },
  );
  return data;
};

function ShopPage() {
  const [filterType, setFilterType] = useState<FilterType>(null);
  const [filterValue, setFilterValue] = useState<
    string | { min: number; max: number }
  >("");
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", filterType, filterValue, limit, offset],
    queryFn: () => fetchProducts(filterType, filterValue, limit, offset),
  });

  const handleCategoryChange = (value: string) => {
    setFilterType("category");
    setFilterValue(value);
    setOffset(0);
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
    setOffset(0);
  };

  const totalProducts = data?.total || 0;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <section className="section min-h-screen flex flex-col items-center">
      <article className="flex flex-col items-center">
        <h2 className="heading mt-6">Shop Products</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 my-6 w-full max-w-3xl justify-center items-center">
          {/* Category Filter */}
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full md:w-[220px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="phones">Phones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-full md:w-[220px]">
              <SelectValue placeholder="Filter by Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price Ranges</SelectLabel>
                <SelectItem value="under_100">Under $100</SelectItem>
                <SelectItem value="100_200">$100 - $200</SelectItem>
                <SelectItem value="200_400">$200 - $400</SelectItem>
                <SelectItem value="400_800">$400 - $800</SelectItem>
                <SelectItem value="flagship">$800 - $1,000</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </article>

      {/* Products */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500">
          Failed to load products:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      ) : data?.products?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {data.products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="my-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              <div className="text-sm mx-4 mt-2 text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>

              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    if (offset + limit < totalProducts) {
                      setOffset((prev) => prev + limit);
                    }
                  }}
                  className={
                    offset + limit >= totalProducts
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <div className="text-gray-500 mt-10 text-center text-lg">
          No products found with the selected filters.
        </div>
      )}
    </section>
  );
}

export const dynamic = "force-dynamic";

export default ShopPage;
