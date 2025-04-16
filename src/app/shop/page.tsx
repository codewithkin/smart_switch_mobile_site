"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from "@/components/micro/ProductCard";
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
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import ProductCardSkeleton from "./components/ProductSkeleton";

// Filter Type
type FilterType = "category" | "price" | null;

function ShopPage() {
  const [filterType, setFilterType] = useState<FilterType>(null);
  const [filterValue, setFilterValue] = useState<
    string | { min: number; max: number }
  >("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const offset = (page - 1) * limit;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", filterType, filterValue, page],
    queryFn: async () => {
      let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?limit=${limit}&offset=${offset}`;

      if (filterType === "category" && typeof filterValue === "string") {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/category/${filterValue}?limit=${limit}&offset=${offset}`;
      }

      if (filterType === "price" && typeof filterValue === "object") {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/price?min=${filterValue.min}&max=${filterValue.max}&limit=${limit}&offset=${offset}`;
      }

      const res = await axios.get(url);
      return res.data;
    },
  });

  const handleCategoryChange = (value: string) => {
    setFilterType("category");
    setFilterValue(value);
    setPage(1);
  };

  const handlePriceChange = (value: string) => {
    setFilterType("price");
    setPage(1);

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

  const totalPages = Math.ceil((data?.total || 0) / limit);

  return (
    <section className="section min-h-screen flex flex-col items-center">
      <article className="flex flex-col items-center">
        <h2 className="heading mt-6">Shop Products</h2>

        <div className="flex flex-col md:flex-row gap-4 my-6 w-full max-w-3xl justify-center items-center">
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

      {/* Content */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500">Failed to load products: {error.message}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {data?.products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => page > 1 && setPage(page - 1)}
                  className={page === 1 ? "opacity-50 pointer-events-none" : ""}
                />
              </PaginationItem>

              <PaginationItem>
                <span className="text-sm text-gray-500">{`Page ${page} of ${totalPages}`}</span>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  onClick={() => page < totalPages && setPage(page + 1)}
                  className={
                    page === totalPages ? "opacity-50 pointer-events-none" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </section>
  );
}

export default ShopPage;
