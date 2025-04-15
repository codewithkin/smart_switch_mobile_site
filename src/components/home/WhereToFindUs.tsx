"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPlus } from "lucide-react";

// Dynamically import MapView with SSR disabled
const MapView = dynamic(() => import("../micro/Mapview"), { ssr: false });

function WhereToFindUs() {
  return (
    <section className="section space-y-6">
      <article className="flex flex-col gap-2 items-center text-center">
        <h2 className="heading">Where to Find Us</h2>
        <p className="text-slate-500 max-w-xl">
          You’ll find us right in the heart of Mutare. Come check out the
          shelves in person — and maybe catch a special in-store deal!
        </p>
        <Button variant="secondary" asChild>
          <Link
            href="https://maps.app.goo.gl/dgM4UwWwHBqvXHyB8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPlus className="mr-2" />
            Open on Google Maps
          </Link>
        </Button>
      </article>

      <MapView />
    </section>
  );
}

export default WhereToFindUs;
