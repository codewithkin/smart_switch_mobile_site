import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ShoppingBasketIcon, ShoppingCart } from "lucide-react";

export type Testimonial = {
  name: string;
  quote: string;
  image?: string;
  rating: number; // out of 5
};

export const testimonials: Testimonial[] = [
  {
    name: "Tariro M.",
    quote:
      "I ordered my Samsung Galaxy A32 online and honestly didn’t expect it to arrive the same day—but it did. It was still sealed, came with a proper receipt, and the team was super friendly. Highly recommend!",
    image: "/images/people/tariro.jpg",
    rating: 5,
  },
  {
    name: "Kudzai N.",
    quote:
      "The Smart Switch team really knows their stuff. I had so many questions and they walked me through everything with patience. I felt confident making my purchase and the price was unbeatable!",
    image: "/images/people/kudzai.jpg",
    rating: 4,
  },
  {
    name: "Blessing Z.",
    quote:
      "I’ve bought phones from a few places before, but Smart Switch Mobile stands out. I got my iPhone 12 here and it came with warranty, a clean receipt, and top-notch service from start to finish.",
    image: "/images/people/blessing.jpg",
    rating: 5,
  },
  {
    name: "Tanaka D.",
    quote:
      "The checkout process was smooth, updates were clear, and my new phone arrived fast. It's rare to find local businesses that handle online orders this professionally. Big win for Mutare!",
    image: "/images/people/tanaka.jpg",
    rating: 5,
  },
  {
    name: "Nyasha P.",
    quote:
      "I needed a Tecno Spark for my younger sister and these guys sorted me out in less than 24 hours. The fact that they’re based right here in Mutare makes it even better. No more Harare runs!",
    image: "/images/people/nyasha.jpg",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="section">
      <article className="flex flex-col gap-2 items-center text-center justify-centrer">
        <h2 className="heading">What our customers are saying</h2>

        <p className="text-slate-500 text-center">
          We’re proud to serve Mutare and beyond. Here's what some of our happy
          customers had to say after shopping with us—real stories from real
          people
        </p>

        <Button asChild>
          <Link href="/shop">
            <ShoppingBasketIcon />
            Shop Now
          </Link>
        </Button>
      </article>

      <article className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
        {/* IMPORTANT !!!! */}
        {/* TODO: Add testimonials that show when card is hovered over */}
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <Card
            className="border-2 border-sky-400 transition-all duration-300 hover:shadow-2xl hover:border-purple-400"
            key={index}
          >
            <CardHeader className="flex flex-col gap-2 items-center justify-center">
              <Image
                src={testimonial.image || ""}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full"
              />

              <article className="flex flex-col justify-center items-center text-center">
                <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                <p>{testimonial.rating}</p>
              </article>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 text-sm">{testimonial.quote}</p>
            </CardContent>
          </Card>
        ))}
      </article>
    </section>
  );
}

export default Testimonials;
