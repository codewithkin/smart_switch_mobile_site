"use client";
import { motion } from "framer-motion";
import ProductCard from "../micro/ProductCard"; // Assuming you have a ProductCard component
import { demoProducts } from "@/data/demoProducts"; // Sample data
import Heading from "../ui/heading";
import { Button } from "../ui/button";
import Link from "next/link";
import { Smartphone } from "lucide-react";

function DevicesAvailable() {
  return (
    <motion.section
      className="section space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <article className="flex flex-col gap-2 justify-center items-center">
        <Heading>Devices Available</Heading>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Phone Our collection features a variety of smartphones, from
          budget-friendly to high-end models. Explore the latest devices and
          find your perfect match today.
        </p>
        <Button className="w-fit" asChild>
          <Link href="/shop">
            <Smartphone />
            View all devices
          </Link>
        </Button>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProducts.slice(0, 6).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </motion.section>
  );
}

export default DevicesAvailable;
