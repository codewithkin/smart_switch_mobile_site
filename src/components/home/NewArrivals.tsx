"use client";
import { demoProducts } from "@/data/demoProducts";
import { Product } from "@/types";
import ProductCard from "../micro/ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
      >
        {demoProducts.slice(0, 5).map((product: Product, index: number) => (
          <SwiperSlide key={index} className="!w-[280px] sm:!w-[300px]">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NewArrivals;
