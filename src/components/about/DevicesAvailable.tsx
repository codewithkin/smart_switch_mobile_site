"use client";
import { motion } from "framer-motion";
import ProductCard from "../micro/ProductCard"; // Assuming you have a ProductCard component
import { demoProducts } from "@/data/demoProducts"; // Sample data
import Heading from "../ui/heading";

function DevicesAvailable() {
  return (
    <motion.section
      className="section space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading>Devices Available</Heading>
      <p className="text-slate-600 max-w-3xl mx-auto">
        Our collection features a variety of smartphones, from budget-friendly
        to high-end models. Explore the latest devices and find your perfect
        match today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProducts.slice(0, 6).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </motion.section>
  );
}

export default DevicesAvailable;
