import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPlus, ShoppingBasketIcon } from "lucide-react";

function WhereToFindUs() {
  return (
    <section className="section">
      <article className="flex flex-col gap-2 items-center text-center justify-centrer">
        <h2 className="heading">Where to find us</h2>

        <p className="text-slate-500 text-center">
          We’re proud to serve Mutare and beyond. Here's what some of our happy
          customers had to say after shopping with us—real stories from real
          people
        </p>

        <Button variant="secondary" asChild>
          {/* TODO: Add link to google maps location */}
          <Link href="/shop">
            <MapPlus />
            Open on Google Maps
          </Link>
        </Button>
      </article>

      {/* TODO: Add Google Maps Integration here */}
    </section>
  );
}

export default WhereToFindUs;
