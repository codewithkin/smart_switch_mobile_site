"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  // Router for redirects
  const router = useRouter();

  return (
    <Card className="w-full sm:w-[300px] bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:cursor-pointer py-0">
      <CardHeader className="relative pb-4 pt-4">
        {/* Product Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain w-full h-[250px] mx-auto"
        />
      </CardHeader>

      <CardContent className="space-y-3 p-4">
        {/* Product Title */}
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

        {/* Product Description */}
        <p className="text-sm text-slate-500">{product.description}</p>

        {/* Product Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-green-600">
            ${product.discountPrice ? product.discountPrice : product.price}
          </span>
          {/* Display Sale Badge if Discount Available */}
          {product.discountPrice && (
            <span className="text-md text-red-500 line-through">
              ${product.price}
            </span>
          )}
        </div>

        {/* Product Storage and Color */}
        <div className="text-sm text-gray-600 mt-2">
          <p>Storage: {product.storage}</p>
          <p>Color: {product.color}</p>
        </div>
      </CardContent>

      <CardFooter className="p-4">
        {/* Add to Cart Button */}
        <Button
          className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg py-2 transition duration-200"
          onClick={() => alert(`${product.name} added to cart!`)} // Placeholder for add-to-cart functionality
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => {
            // Redirect to product slug
            router.push(`/shop/${product.slug}`);
          }}
          variant="ghost"
        >
          More details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
