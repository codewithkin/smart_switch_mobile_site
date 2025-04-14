"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  Smartphone,
  Truck,
  ShieldCheck,
  Smile,
  BadgeDollarSign,
  RefreshCcw,
  CreditCard,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export const whyChooseUsPoints: {
  title: string;
  subheadline: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Real Phones Only",
    subheadline:
      "We only stock brand new, authentic phones — straight from trusted suppliers. No knock-offs, no shady stuff. What you see is exactly what you get, and every device is tested before it goes up for sale. No surprises, just the real deal.",
    icon: Smartphone,
  },
  {
    title: "Fast Delivery in Mutare",
    subheadline:
      "Live in Mutare? You’re in luck. We offer same-day delivery right to your door. No more chasing couriers or waiting days for your device to show up. We move fast so you can, too — it’s part of the Smart Switch experience.",
    icon: Truck,
  },
  {
    title: "Warranty Included",
    subheadline:
      "Every phone comes with a solid warranty for peace of mind. If something goes wrong, you won’t be left on read. We’ll sort you out fast with a repair, replacement, or refund depending on the issue. It’s our no-worries promise.",
    icon: ShieldCheck,
  },
  {
    title: "Friendly Support",
    subheadline:
      "Have a question or need help? Our team is always ready to assist. We don’t do robotic replies or endless holds. Just real humans giving real help, the way customer support should be — easy, quick, and always respectful.",
    icon: Smile,
  },
  {
    title: "Great Prices & Hot Deals",
    subheadline:
      "We’re all about keeping things affordable. Our prices are already sweet, and we drop limited-time deals every week. Whether it’s bundles, discounts, or promos — you’ll always find something worth snapping up.",
    icon: BadgeDollarSign,
  },
  {
    title: "Easy Returns",
    subheadline:
      "Changed your mind or got the wrong device? No stress. We offer simple, hassle-free returns and exchanges. Just keep the box and receipt, and we’ll make it right. Your satisfaction is way more important than a sale.",
    icon: RefreshCcw,
  },
  {
    title: "Safe Payments",
    subheadline:
      "All payments go through secure channels, and you can choose the method that works best — cash on delivery, mobile money, bank transfer, or swipe. No sketchy links or surprises, just smooth, safe checkout every time.",
    icon: CreditCard,
  },
  {
    title: "We’re Local",
    subheadline:
      "We’re based right here in Mutare, so we know what our customers actually need. No overseas delays, and no middlemen. You’re buying from a local business that cares — and one that’s only a phone call away when you need us.",
    icon: MapPin,
  },
];

function WhyChooseUs() {
  return (
    <section className="section">
      <article className="flex flex-col gap-2 items-center text-center justify-center">
        <h2 className="heading">Why choose Smart Switch Mobile</h2>
        <p className="text-slate-500">
          We make buying a phone easy, safe, and kinda fun too. Here’s how:
        </p>
      </article>

      <article className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {whyChooseUsPoints.map(
          (
            point: {
              title: string;
              subheadline: string;
              icon: React.ElementType;
            },
            index: number,
          ) => (
            <motion.article
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.65,
              }}
              viewport={{ once: true, amount: 0.5 }}
              key={index}
            >
              <Card className="bg-sky-100 border border-sky-500">
                <CardHeader className="flex gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 justify-center items-center text-center">
                  <point.icon className="text-purple-700" />
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-500 text-sm">{point.subheadline}</p>
                </CardContent>
              </Card>
            </motion.article>
          ),
        )}
      </article>
    </section>
  );
}

export default WhyChooseUs;
