"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPlus } from "lucide-react";
import L from "leaflet";

// Fix for missing default marker icons
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const markerIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

const position: [number, number] = [-18.9707, 32.6546]; // Coordinates for Mutare

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
            href="https://www.google.com/maps/place/Mutare,+Zimbabwe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPlus className="mr-2" />
            Open on Google Maps
          </Link>
        </Button>
      </article>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              Smart Switch Mobile <br /> Mutare, Zimbabwe
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default WhereToFindUs;
