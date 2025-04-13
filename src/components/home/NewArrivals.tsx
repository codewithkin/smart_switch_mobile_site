"use client";
import { demoProducts } from "@/data/demoProducts";
import { Product } from "@/types";
import ProductCard from "../micro/ProductCard";

function NewArrivals() {
  return (
    <section className="section">
      <article className="flex flex-col">
        <h2 className="heading">Hot Off the Shelf</h2>
        <p className="text-slate-500">
          These devices are fresher than your WhatsApp status. Tap into the
          latest models before they’re gone.
        </p>
      </article>

      <article className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-4 md:gap-16">
        {demoProducts.slice(0, 5).map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </article>
    </section>
  );
}

export default NewArrivals;
